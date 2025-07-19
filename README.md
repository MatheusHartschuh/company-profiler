# Company Profile Generator

This is a React application that generates a company profile based on the company's website. The application utilizes GPT (OpenAI API) to generate relevant information, providing a quick way to draft a professional profile of any company.

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

## Notes on GPT Integration

⚠️ **Disclaimer**: Currently, the application is using **mock data** instead of actual GPT API calls because my OpenAI API credits have temporarily expired. 

However, the codebase includes a fully implemented GPT integration layer within the `services` folder. This can be easily re-enabled by:
- Adding your OpenAI API Key to the environment variables.
- Switching from mock functions to the actual GPT functions in the respective service files.

## Mock Data Usage

Application tests can be made using mock data.

### Available Mocks:
- **Solar Company Example**:
https://simplesolar.com

- **Cybersecurity Company Example**: 
https://techinnovators.com

- **Generic IT Company Example**:
https://futureent.com


You can paste these links into the company website field to quickly generate profiles for testing purposes.