Task Manager Backend

Overview

This is the backend server for the Task Management Application. It handles user authentication, task management, and interaction with the MongoDB database. The server is built using Node.js and Express and communicates with the frontend via RESTful APIs.
Features

    User Registration and Login with JWT-based Authentication.
    Secure Password Storage using Bcrypt.
    CRUD Operations for Task Management.
    MongoDB as the Database.

Technologies Used

    Node.js: JavaScript runtime environment.
    Express: Web framework for building RESTful APIs.
    MongoDB: NoSQL database for storing user and task data.
    Mongoose: ODM (Object Data Modeling) library for MongoDB.
    Bcrypt: Library for hashing passwords.
    JWT (JSON Web Token): For secure authentication.

Installation
Prerequisites

    Node.js and npm installed on your machine.
    MongoDB installed and running.

Steps to Set Up

    Clone the Repository:

    bash

git clone https://github.com/your-username/task-manager-backend.git
cd task-manager-backend

Install Dependencies:

bash

npm install

Set Up Environment Variables:

    Create a .env file in the root directory of your project.
    Add the following environment variables:

    env

    MONGO_URI=mongodb://admin:azad9872@localhost:27017/myDatabase?authSource=admin
    JWT_SECRET=your_jwt_secret

Start the Server:

bash

    npm start

    The server will start on http://localhost:5000.

Project Structure

    routes/: Contains route definitions for authentication (auth.js) and task management (tasks.js).
    models/: Contains Mongoose models for User and Task.
    controllers/: (Optional) If you have a controllers folder, this is where the business logic for routes resides.
    config/: Contains configuration files (if any).
    middleware/: (Optional) Middleware for authentication, error handling, etc.

API Endpoints
User Authentication

    Register a New User
        POST /api/auth/register
        Request Body:

        json

    {
      "email": "example@example.com",
      "password": "your_password"
    }

    Response: Returns a JWT token upon successful registration.

Login an Existing User

    POST /api/auth/login
    Request Body:

    json

        {
          "email": "example@example.com",
          "password": "your_password"
        }

        Response: Returns a JWT token upon successful login.

Task Management

    Get All Tasks
        GET /api/tasks
        Protected route; requires a valid JWT token.

    Create a New Task
        POST /api/tasks
        Request Body:

        json

    {
      "title": "New Task",
      "description": "Task description"
    }

    Protected route; requires a valid JWT token.

Update a Task

    PUT /api/tasks/:id
    Request Body:

    json

        {
          "title": "Updated Task",
          "description": "Updated description"
        }

        Protected route; requires a valid JWT token.

    Delete a Task
        DELETE /api/tasks/:id
        Protected route; requires a valid JWT token.

Security

    Passwords are hashed using Bcrypt before storing them in the database.
    Authentication is handled using JWT tokens, which expire after 1 hour for security.

Contributing

Feel free to fork this repository, make your changes, and submit a pull request. Contributions are always welcome!
License

This project is licensed under the MIT License.