# Hybrid Mobile Development Assignment 1 Part B

This repository contains the React Native program demonstrated in Part A of Assignment 1. The written book chapter for Part A is prepared separately in Google Docs.

## Purpose

Part B requires the group to submit all programs demonstrated in Part A. The program in this repository must:

- Be functional and complete
- Run without syntax or semantic errors
- Match the code and output presented in the Part A document
- Be understood and explainable by all group members

## Demonstrated Concepts

The application demonstrates three selected React concepts:

- React Components
- Props
- useState

The Class To-Do List divides its interface into reusable components such as `Course` and `TodoItem`.

## Technology Stack

- React Native
- Expo
- TypeScript and TSX
- Node.js
- npm

## Project Structure

```text
Assignment1/
|-- assets/                 # Images, icons, fonts, and other resources
|-- components/             # Reusable React components
|   |-- Course.tsx
|   `-- TodoItem.tsx
|-- App.tsx                 # Root application component
|-- index.ts                # Application entry point
|-- app.json                # Expo configuration
|-- package.json            # Project scripts and dependencies
|-- package-lock.json       # Exact dependency versions
|-- tsconfig.json           # TypeScript configuration
`-- README.md               # Project documentation
```

Additional components and program examples should be placed in clearly named folders as the project grows.

## Requirements

Install the following before running the application:

- Node.js
- npm
- Expo Go on a mobile device, or an Android/iOS emulator

## Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/sDuyToans/Assignment1.git
cd Assignment1
npm install
```

## Running the Application

Start the Expo development server:

```bash
npx expo start
```

After Expo starts, you can:

- Scan the QR code using Expo Go on a physical device
- Press `a` to open an Android emulator
- Press `i` to open an iOS simulator on macOS
- Press `w` to run the web version

Alternatively, start the web version directly:

```bash
npx expo start --web
```

## Team Workflow

Pull the newest changes before starting work:

```bash
git checkout main
git pull origin main
```

Create a separate branch:

```bash
git checkout -b feature/your-feature-name
```

Commit and push the completed work:

```bash
git add .
git commit -m "Add description of completed work"
git push -u origin feature/your-feature-name
```

Open a pull request on GitHub so the group can review the changes before merging them into `main`.

## Generated Files

Do not commit generated folders such as:

- `node_modules/`
- `.expo/`
- `ios/`
- `android/`

These folders should be excluded through `.gitignore`. Run `npm install` after cloning to recreate the required dependencies.

## Final Testing Checklist

Before creating the submission ZIP file, confirm that:

- `npm install` completes successfully
- `npx expo start` runs without errors
- Every program discussed in Part A is included
- The application produces the output shown in Part A
- There are no syntax or semantic errors
- All required assets are included
- The application works after being cloned into a clean folder
- Generated folders are excluded
- All contributor names are included

## Creating the Submission ZIP

Ensure the latest completed work is on the `main` branch. Download the repository by selecting **Code > Download ZIP**, or create a ZIP file from a clean copy of the project.

The ZIP file must contain the source code and configuration files. It should not contain `node_modules`, `.expo`, or other generated folders.

## Contributors

- Ethan [Last name]
- Vivek [Last name]
- Le Duy Toan Nguyen
- Noah [Last name]
