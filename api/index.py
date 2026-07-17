import json
import os
import io
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, ROOT)

from flask import Flask, render_template, request, redirect, url_for, send_file, jsonify, session

from generators.generate_pdf import generate_pdf
from generators.generate_ppt import generate_ppt
from generators.generate_docx import generate_docx

app = Flask(__name__, template_folder=os.path.join(ROOT, "templates"))
app.secret_key = os.environ.get("SECRET_KEY", "dev-secret-key-change-in-production")

DATA_FILE = os.path.join(ROOT, "data.json")


def load_base_data():
    with open(DATA_FILE, "r") as f:
        return json.load(f)


def get_data():
    data = load_base_data()
    extra = session.get("extra_tests", [])
    for t in extra:
        data["tests"].append(t)
        data["summary"]["total"] += 1
        if t["status"].lower() == "pass":
            data["summary"]["passed"] += 1
        else:
            data["summary"]["failed"] += 1
    return data


@app.route("/")
def index():
    data = get_data()
    return render_template("index.html", data=data)


@app.route("/add", methods=["POST"])
def add_test():
    test_id = request.form["test_id"]
    scenario = request.form["scenario"]
    status = request.form["status"]

    extra = session.get("extra_tests", [])
    extra.append({"id": test_id, "scenario": scenario, "status": status})
    session["extra_tests"] = extra

    return redirect(url_for("index"))


@app.route("/clear")
def clear():
    session.pop("extra_tests", None)
    return redirect(url_for("index"))


@app.route("/generate/<fmt>")
def generate(fmt):
    data = get_data()
    buf = io.BytesIO()

    if fmt == "pdf":
        generate_pdf(data, buf)
    elif fmt == "pptx":
        generate_ppt(data, buf)
    elif fmt == "docx":
        generate_docx(data, buf)
    else:
        return "Invalid format", 400

    buf.seek(0)
    return send_file(buf, as_attachment=True, download_name=f"report.{fmt}")


@app.route("/generate-custom/<fmt>", methods=["POST"])
def generate_custom(fmt):
    try:
        body = request.get_json()
        if not body:
            return jsonify({"error": "No JSON data provided"}), 400

        required = ["title", "tests"]
        for field in required:
            if field not in body:
                return jsonify({"error": f"Missing required field: {field}"}), 400

        body.setdefault("project", "Custom Project")
        body.setdefault("tester", "N/A")
        body.setdefault("date", "N/A")
        body.setdefault("summary", {})
        s = body["summary"]
        s.setdefault("total", len(body["tests"]))
        s.setdefault("passed", sum(1 for t in body["tests"] if t.get("status", "").lower() == "pass"))
        s.setdefault("failed", sum(1 for t in body["tests"] if t.get("status", "").lower() == "fail"))

        buf = io.BytesIO()
        if fmt == "pdf":
            generate_pdf(body, buf)
        elif fmt == "pptx":
            generate_ppt(body, buf)
        elif fmt == "docx":
            generate_docx(body, buf)
        else:
            return jsonify({"error": "Invalid format"}), 400

        buf.seek(0)
        return send_file(buf, as_attachment=True, download_name=f"report.{fmt}")
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/data")
def get_data_route():
    return jsonify(get_data())
