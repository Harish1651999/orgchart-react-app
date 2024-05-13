# OrgChart React App

## Description
OrgChart React App is a web application built with React and Vite that allows users to visualize and update an employee organization chart interactively. The app provides filtering and drag & drop functionality for managing the organization structure.

## Features
- Display a list of employees with their name, designation, and team.
- Filter employees by team using a dropdown filter.
- Search functionality to quickly find an employee by name, designation, or team.
- Interactive organization chart based on the manager-subordinate relationship.
- Drag and drop employees on the organization chart to change their manager.

## Technologies Used
- React
- Vite
- Redux Toolkit for state management
- @balkangraph/orgchart.js for building the organization chart
- Axios for API calls

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Harish1651999/orgchart-react-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd orgchart-react-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Start the Json-server:
   ```bash
   npm run server
   ``` 

2. Start the development server:
   ```bash
   npm run dev
   ```
   This will start the Vite development server at `http://localhost:5173`.

2. Open your web browser and go to `http://localhost:5173` to view the application.

## Task Details & Breakdown
- **List of Employees**: Display a list of employees with search and filtering options.
- **Organization Chart**: Generate a tree-like chart based on the manager-subordinate relationship.
- **Drag and Drop**: Enable drag and drop functionality to change the manager of an employee.

## Folder Structure:
- **src/**: Contains the source code of the React application.
  - **components/**: React components used in the application.
  - **App.jsx**: Main entry point for the application.
- **public/**: Contains static assets.

## Backend API
The app uses Json-server as the backend API.

## Demo
[Live Demo](https://orgchart-react-app-demo.netlify.app/)

## Author
Harish - [GitHub Profile](https://github.com/Harish1651999)