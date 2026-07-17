import json
import os
import io
import sys

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from flask import Flask, render_template, request, redirect, url_for, send_file, jsonify

from generate_pdf import generate_pdf
from generate_ppt import generate_ppt
from generate_docx import generate_docx

app = Flask(__name__, template_folder=os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "templates"))

DATA_FILE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "data.json")


def load_data():
    with open(DATA_FILE, "r") as f:
        return json.load(f)


def save_data(data):
    with open(DATA_FILE, "w") as f:
        json.dump(data, f, indent=2)


@app.route("/")
def index():
    data = load_data()
    return render_template("index.html", data=data)


@app.route("/add", methods=["POST"])
def add_test():
    data = load_data()
    test_id = request.form["test_id"]
    scenario = request.form["scenario"]
    status = request.form["status"]

    new_test = {"id": test_id, "scenario": scenario, "status": status}
    data["tests"].append(new_test)
    data["summary"]["total"] += 1
    if status.lower() == "pass":
        data["summary"]["passed"] += 1
    else:
        data["summary"]["failed"] += 1
    save_data(data)
    return redirect(url_for("index"))


@app.route("/generate/<fmt>")
def generate(fmt):
    data = load_data()
    buf = io.BytesIO()
    filename = f"report.{fmt}"

    if fmt == "pdf":
        generate_pdf(data, buf)
    elif fmt == "pptx":
        generate_ppt(data, buf)
    elif fmt == "docx":
        generate_docx(data, buf)
    else:
        return "Invalid format", 400

    buf.seek(0)
    return send_file(buf, as_attachment=True, download_name=filename)


@app.route("/data")
def get_data():
    data = load_data()
    return jsonify(data)
