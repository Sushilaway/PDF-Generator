from fpdf import FPDF
import json
import os
from datetime import datetime

class PDFReport(FPDF):
    def header(self):
        self.set_font('Arial', 'B', 16)
        self.cell(0, 10, 'QA Test Report', 0, 1, 'C')
        self.set_font('Arial', 'I', 10)
        self.cell(0, 5, f'Generated: {datetime.now().strftime("%Y-%m-%d %H:%M")}', 0, 1, 'C')
        self.ln(5)

    def footer(self):
        self.set_y(-15)
        self.set_font('Arial', 'I', 8)
        self.cell(0, 10, f'Page {self.page_no()}', 0, 0, 'C')

    def add_summary(self, data):
        self.set_font('Arial', 'B', 14)
        self.cell(0, 10, 'Executive Summary', 0, 1, 'L')
        self.set_font('Arial', '', 12)

        summary = data.get('summary', {})
        total = summary.get('total', 0)
        passed = summary.get('passed', 0)
        failed = summary.get('failed', 0)
        pass_rate = (passed / total * 100) if total > 0 else 0

        self.cell(0, 8, f'Project: {data.get("project", "N/A")}', 0, 1)
        self.cell(0, 8, f'Tester: {data.get("tester", "N/A")}', 0, 1)
        self.cell(0, 8, f'Date: {data.get("date", "N/A")}', 0, 1)
        self.cell(0, 8, f'Total Test Cases: {total}', 0, 1)
        self.cell(0, 8, f'Passed: {passed}', 0, 1)
        self.cell(0, 8, f'Failed: {failed}', 0, 1)
        self.cell(0, 8, f'Pass Rate: {pass_rate:.1f}%', 0, 1)

    def add_test_table(self, data):
        self.add_page()
        self.set_font('Arial', 'B', 14)
        self.cell(0, 10, 'Test Case Details', 0, 1, 'L')

        self.set_font('Arial', 'B', 10)
        headers = ['ID', 'Scenario', 'Status']
        col_widths = [30, 100, 40]

        for i, header in enumerate(headers):
            self.cell(col_widths[i], 10, header, 1, 0, 'C')
        self.ln()

        self.set_font('Arial', '', 9)
        tests = data.get('tests', [])
        for test in tests:
            self.cell(col_widths[0], 8, test.get('id', ''), 1, 0, 'C')
            self.cell(col_widths[1], 8, test.get('scenario', ''), 1, 0, 'L')
            status = test.get('status', '')
            if status.lower() == 'pass':
                self.set_text_color(0, 128, 0)
            else:
                self.set_text_color(255, 0, 0)
            self.cell(col_widths[2], 8, status, 1, 0, 'C')
            self.set_text_color(0, 0, 0)
            self.ln()

def generate_pdf(data, output_path):
    pdf = PDFReport()
    pdf.add_page()
    pdf.add_summary(data)
    pdf.add_test_table(data)
    pdf.output(output_path)

def generate_pdf_from_file(json_file='data.json', output_dir='output'):
    try:
        with open(json_file, 'r') as f:
            data = json.load(f)

        os.makedirs(output_dir, exist_ok=True)
        output_path = os.path.join(output_dir, 'report.pdf')
        generate_pdf(data, output_path)
        print(f"\u2705 PDF generated: {output_path}")
        return output_path
    except Exception as e:
        print(f"\u274c Error generating PDF: {e}")
        return None

if __name__ == "__main__":
    generate_pdf_from_file()
