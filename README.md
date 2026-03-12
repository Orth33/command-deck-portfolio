# CommandDeck Portfolio

A modern, interactive portfolio website built with React, TypeScript, and ShadCN UI, featuring a terminal-inspired interface for navigating through different sections.

## Features

- **Terminal Interface**: Command-line style navigation with a retro terminal aesthetic
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Interactive Sections**: Dedicated panels for About, Experience, Projects, Skills, and Contact
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Dark/Light Theme**: Theme switching support with next-themes
- **Modern UI Components**: Built with Radix UI primitives and Tailwind CSS

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI (Radix UI primitives)
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Routing**: React Router DOM
- **Testing**: Vitest + Testing Library
- **Linting**: ESLint

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/command-deck-ui.git
   cd command-deck-ui
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests once
- `npm run test:watch` - Run tests in watch mode

## Project Structure

```
src/
├── components/
│   ├── terminal/          # Terminal interface components
│   ├── sections/          # Portfolio section components
│   ├── ui/               # Reusable UI components
│   └── ...
├── pages/                # Route components
├── store/                # Zustand state management
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and data
└── ...
```

## Usage

Navigate through the portfolio using terminal commands or the navigation menu. Each section provides detailed information about different aspects of the portfolio owner's background and work.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request
