#!/usr/bin/env python3
"""
QA Test Report Generator - Unified CLI
Generate reports in PDF, PPTX, or DOCX format from JSON data
"""

import os
import sys
import json
from generators.generate_pdf import generate_pdf
from generators.generate_ppt import generate_ppt
from generators.generate_docx import generate_docx

DATA_FILE = 'data.json'
OUTPUT_DIR = 'output'


def display_menu():
    print("\n" + "=" * 50)
    print("  \U0001f4ca QA TEST REPORT GENERATOR")
    print("=" * 50)
    print("1. Generate PDF Report")
    print("2. Generate PPTX Report")
    print("3. Generate DOCX Report")
    print("4. Generate ALL Reports")
    print("5. View Current Data")
    print("6. Add Test Data")
    print("7. Exit")
    print("=" * 50)


def load_data():
    with open(DATA_FILE, 'r') as f:
        return json.load(f)


def view_data():
    try:
        data = load_data()
        print("\n\U0001f4cb Current Data:")
        print(json.dumps(data, indent=2))
        return data
    except Exception as e:
        print(f"\u274c Error reading data: {e}")
        return None


def add_test_data():
    try:
        data = load_data()

        print("\n\U0001f589 Add New Test Case")
        test_id = input("Test ID (e.g., AUTH_003): ").strip()
        scenario = input("Scenario: ").strip()
        status = input("Status (Pass/Fail): ").strip()

        if status.lower() not in ['pass', 'fail']:
            print("\u26a0\ufe0f  Status must be 'Pass' or 'Fail'. Setting to 'Pass'.")
            status = 'Pass'

        new_test = {
            "id": test_id,
            "scenario": scenario,
            "status": status.capitalize()
        }

        data['tests'].append(new_test)
        data['summary']['total'] += 1
        if status.lower() == 'pass':
            data['summary']['passed'] += 1
        else:
            data['summary']['failed'] += 1

        with open(DATA_FILE, 'w') as f:
            json.dump(data, f, indent=2)

        print(f"\u2705 Test case added successfully!")
        return True
    except Exception as e:
        print(f"\u274c Error adding test: {e}")
        return False


def generate_report(format_name, generator_func):
    try:
        data = load_data()
        os.makedirs(OUTPUT_DIR, exist_ok=True)
        filename = f"report.{format_name}"
        output_path = os.path.join(OUTPUT_DIR, filename)
        generator_func(data, output_path)
        print(f"\u2705 {format_name.upper()} generated: {output_path}")
    except Exception as e:
        print(f"\u274c Error generating {format_name.upper()}: {e}")


def main():
    while True:
        display_menu()
        choice = input("\nChoose an option (1-7): ").strip()

        if choice == '1':
            print("\n\U0001f4c4 Generating PDF...")
            generate_report('pdf', generate_pdf)

        elif choice == '2':
            print("\n\U0001f4ca Generating PPTX...")
            generate_report('pptx', generate_ppt)

        elif choice == '3':
            print("\n\U0001f4dd Generating DOCX...")
            generate_report('docx', generate_docx)

        elif choice == '4':
            print("\n\U0001f680 Generating ALL reports...")
            generate_report('pdf', generate_pdf)
            generate_report('pptx', generate_ppt)
            generate_report('docx', generate_docx)
            print("\n\u2705 All reports generated!")

        elif choice == '5':
            view_data()

        elif choice == '6':
            add_test_data()

        elif choice == '7':
            print("\n\U0001f44b Goodbye!")
            break

        else:
            print("\u274c Invalid choice. Please try again.")

        input("\nPress Enter to continue...")


if __name__ == "__main__":
    main()
