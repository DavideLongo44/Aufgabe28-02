

---

# Greeting App

## Introduction

The Greeting App is a simple web application that allows users to enter their name and receive a personalized greeting message.

### HTML Structure

The application consists of an HTML file (`greeting.html`) defining the basic structure of the webpage. It includes an input field for the name, a button to submit the name, a heading, a section for the greeting message, and a general welcome text.

### Input Field and Button

- A text input field with the ID `nameInput` enables users to enter their name.
- A button with an `onclick` attribute calling the JavaScript function `submitName()` is used to process the entered name.

### JavaScript Functions (`greetingApp.js`)

In the JavaScript file, two functions are defined: `submitName` and `updateUI`.
- `submitName` is called when the user clicks the "Submit" button. It reads the entered name, creates a personalized greeting message, and then calls the `updateUI` function.
- `updateUI` updates the text content of the element with the ID `greetingMessage` with the generated greeting message.

### Greeting Message

The greeting message is dynamically generated and includes the user's entered name. For example: "Hello, [Name]!"

### General Welcome Message

A general welcome text below the greeting message section states: "Welcome to our Greeting App."

### JavaScript Integration

The JavaScript file (`greetingApp.js`) is included in the HTML page using a `<script>` element.

## Local Project Setup

### Step 1: Create a Local Project

```bash
mkdir greeting-app
cd greeting-app
```

Create `greeting.html` and `greetingApp.js` in the project directory.

### Step 2: Local Testing

Open `greeting.html` in a browser and verify that the Greeting App functions as expected.

## GitHub Repository Setup

### Step 3: Create GitHub Repository

1. Create a new repository on GitHub with the name, for example, "greeting-app."

### Step 4: Set Up Local Git Repository

```bash
git init
git remote add origin <URL-of-your-new-repository>
git add .
git commit -m "Initial commit"
```

Replace `<URL-of-your-new-repository>` with the actual URL of your new GitHub repository.

### Step 5: Create GitHub Actions Workflow

1. Create a GitHub Actions workflow by adding a file named `.github/workflows/main.yml` in the root directory.

### Step 6: Push Files to GitHub Repository

```bash
git push -u origin main
```

## Check GitHub Actions Workflow

1. Go to your GitHub repository.
2. Click on the "Actions" tab.
3. You should see the newly created workflow. Click on it to view details.
4. Verify if the workflow was automatically triggered and if all steps were successfully completed.

### Submission

Please provide the link to your repository. If you have created a private repository, include screenshots of:
- The HTML file
- The pipeline file (e.g., `main.yml`)
- The workflow run

---

Please note that the placeholders like `<URL-of-your-new-repository>` should be replaced with the actual values.
