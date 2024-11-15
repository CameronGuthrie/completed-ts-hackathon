# TypeScript CRUD Hackathon Project

## Overview
This project is designed for learners to build a frontend CRUD application using TypeScript that interacts with a provided backend API. The project utilises TypeScript concepts such as types, interfaces, classes, generics, and decorators to ensure strong typing and maintainable code. The backend is built using Express, and `json-server` is used to mock the API, allowing learners to focus on CRUD operations and TypeScript features.

## Prerequisites

- Node.js and npm installed
- Basic understanding of TypeScript, HTML, and CSS
- Git installed for cloning the repository

## Download and Installation

1. **Clone the Repository**

   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/CameronGuthrie/typescript-crud-hackathon.git
   cd typescript-crud-hackathon
   ```

   Ensure you have proper permissions and SSH setup if required to clone the repository.

2. **Install Dependencies**

   To install all the required dependencies for the backend, json-server, and frontend, run the following command in the root directory:

   ```bash
   npm run install-all
   ```

## Running the Project

To run the entire project (backend server, json-server, and frontend) with one command, use:

```bash
npm run start-all
```

This command will:
- Start the backend server (running on `http://localhost:5000`)
- Start the json-server (running on `http://localhost:3000`)
- Serve the frontend using live-server (available at `http://127.0.0.1:8080`)

**Note**: If there are port conflicts, you may need to update the port numbers in the respective configuration files.

## Project Structure

```plaintext
typescript-crud-hackathon/
├── backend/             # Backend Express server
│   ├── server.ts        # Main server file for handling API requests
│   ├── package.json     # Backend dependencies
│   └── tsconfig.json    # TypeScript configuration for backend
├── json-server/         # Mock API server
│   ├── db.json          # Mock database for tasks
│   ├── package.json     # json-server dependencies
│   └── tsconfig.json    # TypeScript configuration for json-server
├── frontend/            # Frontend TypeScript application
│   ├── index.html       # Main HTML file for the frontend
│   ├── styles.css       # CSS for styling the frontend
│   ├── app.ts           # Main TypeScript file for frontend logic
│   ├── models/          # TypeScript models for data structures
│   ├── services/        # API service classes for data handling
│   └── decorators/      # Custom decorators for logging and other behaviors
├── completed/           # Completed project files
└── README.md            # Project documentation
```

## Troubleshooting

- **Backend Server Issues**: If the backend server fails to start, ensure that all TypeScript dependencies are installed by running:

  ```bash
  npm install --prefix backend
  ```

  Additionally, verify that Node.js and npm are correctly installed and up-to-date.

- **json-server Issues**: If there are issues with json-server, ensure that the `@types/json-server` dependency is removed or correctly updated in `json-server/package.json`.

- **Port Conflicts**: Make sure the ports `3000`, `5000`, and `8080` are not in use by other applications.

- **Module Not Found Errors**: If you encounter module-related errors, try cleaning the `node_modules` directory and reinstalling all dependencies:
  
  ```bash
  rm -rf node_modules && npm install
  ```

## Additional Commands

- **Install Dependencies for a Specific Folder**:
  - Backend: `npm install --prefix backend`
  - json-server: `npm install --prefix json-server`
  - Frontend: `npm install --prefix frontend`

- **Clean and Re-install Dependencies**:
  - If facing issues, clean `node_modules` and reinstall dependencies:
    ```bash
    rm -rf node_modules && npm install
    ```

- **Compile TypeScript in the Frontend**:
  ```bash
  npx tsc --project frontend/tsconfig.json
  ```

## To-Do List

1. **Understand the Project Structure**
  - Familiarise yourself with the directories and files.
  - Review the `Task` interface in `models/Task.ts`.
  - Examine the `ApiService` class in `services/ApiService.ts`.
  - Set up version control branches for different features to promote good development practices.

2. **Enhance the Frontend**
  - **Create a Form to Add Tasks**
    - Add input fields and a button to allow users to create new tasks.
    - Implement the `addTask` method to send POST requests to the backend.
  - **Display Tasks**
    - Fetch tasks from the backend using the `getAll` method of `ApiService`.
    - Render tasks in the UI, displaying their titles and completion status.
  - **Update Tasks**
    - Allow users to toggle the completion status of tasks.
    - Implement a method to send PUT requests to update tasks on the backend.
  - **Delete Tasks**
    - Add functionality to delete tasks.
    - Implement a method to send DELETE requests to remove tasks from the backend.

3. **Apply TypeScript Features**
  - **Types and Interfaces**
    - Define appropriate types and interfaces for your data models.
    - Ensure all variables and functions use strong typing.
  - **Classes and Generics**
    - Utilise classes to encapsulate functionality.
    - Apply generics in `ApiService` to handle different data types if needed.
  - **Decorators**
    - Implement method decorators to add logging or other behaviors.
    - Experiment with class decorators to add metadata or modify class behavior.

4. **Style the Application**
  - Use `styles.css` to enhance the UI.
  - Ensure the application is user-friendly and visually appealing.

5. **Testing and Debugging**
  - Test all CRUD operations to ensure they work correctly.
  - Use the browser console to debug and verify TypeScript typings.

6. **Documentation**
  - Comment your code to explain complex sections.
  - Update `README.md` with project details and instructions.

## Tips for Success

- **Leverage TypeScript's Type Safety**: Always define types and interfaces to maintain strong typing throughout your application.
- **Modularise Your Code**: Break down your code into modules (models, services, decorators) to enhance maintainability.
- **Utilise Decorators Wisely**: Use decorators to add cross-cutting concerns like logging without cluttering your business logic.
- **Iterative Development**: Build your application step-by-step, testing each feature as you add it.
- **Use Code Quality Tools**: Use tools like ESLint and Prettier to maintain code quality and formatting.

## Additional Resources

- **TypeScript Handbook**: [https://www.typescriptlang.org/docs/handbook/](https://www.typescriptlang.org/docs/handbook/)
- **Express.js Documentation**: [https://expressjs.com/](https://expressjs.com/)
- **json-server Documentation**: [https://github.com/typicode/json-server](https://github.com/typicode/json-server)
- **Understanding Decorators in TypeScript**: [https://www.typescriptlang.org/docs/handbook/decorators.html](https://www.typescriptlang.org/docs/handbook/decorators.html)
