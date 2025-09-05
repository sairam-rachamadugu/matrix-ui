# Brick Plant UI

This project is a user interface for a brick plant built using Next.js, TypeScript, and Redux. It provides a modern and efficient way to manage and display brick-related data.

## Features

- **Next.js Framework**: Utilizes the powerful features of Next.js for server-side rendering and static site generation.
- **TypeScript**: Ensures type safety and better developer experience.
- **Redux**: Manages the application state effectively, allowing for easy data flow and state management.

## Project Structure

```
brick-plant-ui
├── src
│   ├── pages
│   │   ├── _app.tsx        # Custom App component for global styles and state management
│   │   └── index.tsx       # Main landing page of the application
│   ├── components
│   │   └── BrickList.tsx   # Component to display a list of bricks
│   ├── store
│   │   ├── index.ts        # Redux store setup
│   │   └── brickSlice.ts   # Slice for managing brick-related state
│   ├── types
│   │   └── index.ts        # TypeScript interfaces and types
│   └── styles
│       └── globals.css     # Global CSS styles
├── public
│   └── favicon.ico         # Favicon for the application
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
└── README.md               # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd brick-plant-ui
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to see the application in action.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.