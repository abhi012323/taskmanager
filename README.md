Task Management Frontend
Overview

This is the frontend of the Task Management Application, built using React. It provides a user interface for managing tasks, including user registration, login, and CRUD operations on tasks. The frontend communicates with the backend via RESTful APIs.
Features

    User Registration and Login with JWT-based Authentication.
    Task Creation, Viewing, Updating, and Deletion.
    State Management using Redux.
    Form Validation and Error Handling.

Technologies Used

    React: JavaScript library for building user interfaces.
    Redux: State management library for React applications.
    Axios: Promise-based HTTP client for making API requests.
    React Router: Declarative routing for React applications.
    ESLint: Tool for identifying and fixing problems in JavaScript code.

Installation
Prerequisites

    Node.js and npm installed on your machine.
    Backend server running and accessible.

Steps to Set Up

    Clone the Repository:

    bash

git clone https://github.com/your-username/task-manager-frontend.git
cd task-manager-frontend

Install Dependencies:

bash

npm install

Set Up Environment Variables:

    Create a .env file in the root directory of your project.
    Add the following environment variable:

    env

    REACT_APP_API_URL=http://localhost:5000/api

Start the Development Server:

bash

    npm start

    The application will run on http://localhost:3000.

Project Structure

    src/
        components/: Reusable React components like forms, task lists, etc.
        features/: Contains Redux slices and related files.
        pages/: Specific page components like Login, Register, TaskManager.
        services/: API service functions using Axios.
        store/: Redux store configuration.
        App.js: Main application component.
        index.js: Entry point of the application.

Available Scripts

In the project directory, you can run:

    npm start: Runs the app in development mode.
    npm test: Launches the test runner.
    npm run build: Builds the app for production.
    npm run eject: Ejects the configuration files for customization.

State Management

    Redux: The application uses Redux for state management, with slices for managing user authentication and tasks.

API Endpoints

The frontend interacts with the following backend API endpoints:
User Authentication

    Register a New User
        POST /api/auth/register
        Request Body:

        json

    {
      "email": "example@example.com",
      "password": "your_password"
    }

Login an Existing User

    POST /api/auth/login
    Request Body:

    json

        {
          "email": "example@example.com",
          "password": "your_password"
        }

Task Management

    Get All Tasks
        GET /api/tasks
        Requires a valid JWT token.

    Create a New Task
        POST /api/tasks
        Requires a valid JWT token.

    Update a Task
        PUT /api/tasks/:id
        Requires a valid JWT token.

    Delete a Task
        DELETE /api/tasks/:id
        Requires a valid JWT token.

Usage

    User Registration and Login:
        Upon launching the app, users can register for a new account or log in to an existing account.
        Upon successful login, a JWT token is stored in local storage to authenticate the user for subsequent requests.

    Task Management:
        Users can create, view, update, and delete tasks once logged in.
        The task list is dynamically updated based on user actions.

Security

    JWT tokens are stored in local storage and are used for authenticating API requests.
    Proper validation and error handling are implemented for form inputs.

Contributing

Feel free to fork this repository, make your changes, and submit a pull request. Contributions are always welcome!
License

This project is licensed under the MIT License.
