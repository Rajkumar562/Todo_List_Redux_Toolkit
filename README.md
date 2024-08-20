# Redux Toolkit Todo List

A simple Todo List application built with React and Redux Toolkit, allowing users to add, edit, delete, and persist tasks across sessions using localStorage.

## Features

- **Add Todos**: Easily add new tasks with a description.
- **Edit Todos**: Update existing tasks with new text.
- **Delete Todos**: Remove tasks from the list.
- **Persist Todos**: Tasks are saved in `localStorage` to persist them across page reloads.

## Project Structure

The project is organized as follows:

```plaintext
src/
├── app/
│   └── store.js             # Redux store configuration
├── features/
│   ├── todo/
│   │   ├── todoSlice.js     # Redux slice for todos
│   └── editTodo/
│       └── editTodoSlice.js # Redux slice for editing a todo
├── components/
│   ├── AddTodo.jsx          # Component to add or update a todo
│   └── Todos.jsx            # Component to display and manage the list of todos
├── App.js                   # Main app component
└── index.js                 # Entry point for the React app
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v12 or later)
- **npm** (v6 or later)

### Installation

1. Clone the repository:

   ````bash
   git clone https://github.com/Rajkumar562/Todo_List_Redux_Toolkit```
   ````

2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

- **Adding a Todo**: Type a task in the input field and click "Add Todo".
- **Editing a Todo**: Click the "Edit" button next to a todo, modify the text, and click "Update Todo".
- **Deleting a Todo**: Click the "Delete" button to remove a todo from the list.

## Code Explanation

### Redux Setup

- **`todoSlice.js`**: Contains the Redux logic for adding, removing, and updating todos. It also includes an action to load todos from `localStorage`.
- **`editTodoSlice.js`**: Manages the state of the todo currently being edited.

### Components

- **`AddTodo.jsx`**: Handles adding a new todo or updating an existing one.
- **`Todos.jsx`**: Displays the list of todos and provides options to edit or delete them. Syncs the todos with `localStorage`.

## Improvements

- Add input validation to prevent empty todos.
- Implement filtering or searching within the todos list.
- Add due dates or priority levels for todos.
- Enhance UI/UX with animations or additional design elements.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Issues

If you encounter any issues with the project, please open an issue on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
