# Todo List App Using React - TS - Mobx:

This is a simple todo list application built using React, TypeScript, MobX, and Material UI, created with Vite.

## Features

- Add new todos
- Mark todos as complete
- Delete todos
- Filter todos by status (all, active, completed)
- Responsive design using Material UI

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types and other features.
- **MobX**: A state management library that provides a reactive approach to state updates.
- **Material UI**: A popular UI library for React that provides pre-built components and styling.
- **Vite**: A fast and modern build tool that provides a smooth development experience.

## Getting Started

1. Clone the repository:

```
git clone <https://github.com/HHiepShadow/todolist-react-mobx.git>
```

2. Install dependencies:

```
cd todo-list-app
npm install
```

3. Start the development server:

```
npm run dev
```

The application will be available at `http://localhost:5173`.

## Project Structure

The project structure is as follows:

todo-list-app/<br />
├── src/<br />
│ ├── components/<br />
│ │ ├── TodoForm.tsx<br />
│ │ ├── TodoItem.tsx<br />
│ │ └── TodoList.tsx<br />
│ ├── stores/<br />
│ │ ├── TodoStore.ts<br />
│ │ └── RootStore.ts<br />
│ ├── utils/<br />
│ │ ├── types.ts<br />
│ │ └── helpers.ts<br />
│ ├── App.tsx<br />
│ └── main.tsx<br />
├── .gitignore<br />
├── package.json<br />
├── tsconfig.json<br />
├── vite.config.ts<br />
└── README.md<br />

## Contributing

If you find any issues or have suggestions for improvements, feel free to create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
