# Company Profile Generator

This is a React application that generates a company profile based on the company's website. The application utilizes GPT (OpenAI API) to generate relevant information, providing a quick way to draft a professional profile of any company.

You can paste these links into the company website field to quickly generate profiles for testing purposes.

## Features

- **Company Profile Generation**: Enter a company website and generate a structured JSON profile including:
  - Company Name
  - Company Description
  - Service Line(s)
  - Tier 1 and Tier 2 Keywords
  - Point of Contact (POC)
  - Emails

- **Editable Profile**: After generation, all fields are editable directly in the interface.

- **Service Lines Handling**: Allows creation of multiple service lines manually. The system is also designed to support GPT-generated service lines, with user flexibility to adjust them.

- **Local Storage Integration (Custom Feature)**:
    - You can save profiles locally in your browser.
    - Saved profiles are accessible via a dedicated modal.
    - Up to 5 profiles can be saved. To delete any of them from local storage, click on the X icon.
    - Load, edit, or regenerate profiles without re-entering the website link.
