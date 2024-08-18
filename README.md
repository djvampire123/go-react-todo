
# Go-React-Todo

![Go-React-Todo](https://img.shields.io/badge/Go-1.16-blue.svg)
![React](https://img.shields.io/badge/React-17.0.2-blue.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-4.4-green.svg)

A simple and modern To-Do List application built using Go for the backend, React for the frontend, and MongoDB for the database.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Features
- Add, update, and delete tasks
- Mark tasks as completed or undo completion
- Real-time task updates
- Responsive design

## Demo
![Screenshot from 2024-08-18 18-09-39](https://github.com/user-attachments/assets/e1b67109-5e0f-4f1f-8f5c-10b3a3f5dade)

Block Diagram:

![image](https://github.com/user-attachments/assets/0687e669-c289-479f-8879-55692348a63b)



## Setup

### Prerequisites
- [Go](https://golang.org/dl/) (v1.16 or later)
- [Node.js](https://nodejs.org/) and npm (v14 or later)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/go-react-todo.git
   cd go-react-todo
   ```

2. **Backend Setup:**
   - Navigate to the `backend` directory:
     ```bash
     cd server
     ```
   - Install Go dependencies:
     ```bash
     go mod tidy
     ```
   - Create a `.env` file in the `backend` directory with the following content:
     ```bash
     DB_URI=mongodb://localhost:27017
     DB_NAME=go_react_todo
     DB_COLLECTION_NAME=todolist
     ```
   - Run the backend server:
     ```bash
     go run main.go
     ```

3. **Frontend Setup:**
   - Navigate to the `frontend` directory:
     ```bash
     cd client
     ```
   - Install React dependencies:
     ```bash
     npm install
     ```
   - Start the React development server:
     ```bash
     npm start
     ```

4. **Access the Application:**
   - Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Add a Task:** Type a task in the input field and click "Create Task" to add it to the list.
- **Mark as Done:** Click the green checkmark to mark a task as completed.
- **Undo a Task:** Click the blue undo icon to mark a task as incomplete.
- **Delete a Task:** Click the red delete icon to remove a task from the list.

## API Endpoints

### Task Endpoints
- `GET /api/tasks` - Retrieve all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/{id}` - Mark a task as completed
- `PUT /api/undoTask/{id}` - Undo a task completion
- `DELETE /api/deleteTask/{id}` - Delete a task

## Technologies Used

- **Go:** Backend API
- **React:** Frontend UI
- **MongoDB:** Database
- **Semantic UI:** UI components and styling

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

