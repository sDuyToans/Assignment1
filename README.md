# Hybrid Mobile Development — Assignment 1 (Part B)

This repository contains the working React Native and Expo programs used in **Part B of Assignment 1**. The written book chapter for Part A is prepared separately in Google Docs.

## Purpose

Part B requires the group to submit all programs demonstrated in Part A. Every program in this repository must:

- Be functional and complete
- Run without syntax or semantic errors
- Match the code and output presented in the Part A document
- Be understood and explainable by the group members

## Technology Stack

- React Native
- Expo
- TypeScript
- Node.js and npm

## Project Structure

```text
assignment1/
├── assets/             # Images, icons, fonts, and other resources
├── App.tsx             # Main React Native application component
├── index.ts            # Application entry point
├── app.json            # Expo configuration
├── package.json        # Project scripts and dependencies
├── package-lock.json   # Exact dependency versions
└── tsconfig.json       # TypeScript configuration
```

Additional components, screens, and program examples should be placed in clearly named folders as the project grows.

## Requirements

Install the following before running the application:

- Node.js
- npm
- Expo Go on a mobile device, or an Android/iOS emulator

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/sDuyToans/Assignment1
cd assignment1
npm install
```

## Running the Application

Start the Expo development server(for react native web):

```bash
npx expo install react-dom react-native-web
npx expo start --web
```

After Expo starts, you can:

- Scan the QR code using Expo Go on a physical device
- Press `a` to open the Android emulator
- Press `i` to open the iOS simulator on macOS
- Press `w` to run the web version, if supported

## Team Workflow

Pull the newest changes before starting work:

```bash
git checkout main
git pull origin main
```

Create a separate branch for your work:

```bash
git checkout -b feature/your-feature-name
```

Commit and push your completed work:

```bash
git add .
git commit -m "Add description of completed work"
git push -u origin feature/your-feature-name
```

Open a pull request on GitHub so the group can review the code before merging it into `main`.

## Customizing the Base Application

Group members can customize the base application by updating:

- `app.json` for the application name, slug, and platform settings
- `assets/` for icons, images, fonts, and splash graphics
- `App.tsx` for the main interface and application content

Do not commit generated folders such as `node_modules`, `.expo`, `ios`, or `android`. Run `npm install` after cloning to recreate the required dependencies.

## Final Testing Checklist

Before creating the submission ZIP file, confirm that:

- `npm install` completes successfully
- `npx expo start` runs without errors
- Every program discussed in Part A is included
- Each program produces the output shown in Part A
- There are no syntax or semantic errors
- All required images and other assets are included
- The application works after being cloned into a clean folder
- `node_modules`, `.expo`, and other generated files are excluded

## Creating the Submission ZIP

Make sure the latest completed work is on the `main` branch. Download the repository from GitHub by selecting **Code → Download ZIP**, or create a ZIP file from a clean copy of the project.

The ZIP file should contain the source code and configuration files, but it should not contain `node_modules` or other generated folders.

## Contributors (please fill your name here)

- `[Team member name]`
- `[Team member name]`
- `Le Duy Toan Nguyen`
- `[Team member name]`
