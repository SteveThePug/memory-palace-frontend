# React + TypeScript + Vite Frontend + Tailwindcss

This project is a learning tool for me to explore and understand React, TypeScript, Vite, and Tailwindcss. I intend to use it as a memory palace, but in the mean-time I implementing basic blog functionality. Also, the posts include markdown so you can add as much math as you like! ^-^

## Table of Contents

1. [Project Structure](#project-structure)
2. [Components](#components)
3. [API](#api)
4. [Store](#store)
5. [Setup and Installation](#setup-and-installation)
6. [Development](#development)
7. [ESLint Configuration](#eslint-configuration)

## Project Structure

The project follows a standard React application structure:

```
.
├── public/
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── fonts/
│   ├── hooks/
│   ├── pages/
│   ├── store/
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
└...
```

## Components

The application is composed of several key components:

- `Navbar`: Handles navigation and user authentication.
  - `Form`: Reusable form component.
  - `Login`: Handles user login.
- `Posts`: Displays a list of blog posts.
  - `Post`: Individual post component.
- `Comments`: Manages comments for each post.
  - `Comment`: Individual comment component.
- `Users`: Displays user information.
  - `User`: Individual user component.
- `Modal`: Reusable modal component for various purposes.

## API

The `api.ts` file in the `src/api` directory contains functions for interacting with the backend API. Key functions include:

- Posts:
  - `fetchPosts()`: Retrieves all posts.
  - `fetchPost(post_id)`: Retrieves a specific post.
  - `createPost(post)`: Creates a new post.
  - `deletePost(post_id)`: Deletes a post.
  - `updatePost(post_id, post)`: Updates an existing post.

- Comments:
  - `fetchComments()`: Retrieves all comments.
  - `addComment(comment)`: Adds a new comment.
  - `deleteComment(comment_id)`: Deletes a comment.
  - `updateComment(comment_id, comment)`: Updates an existing comment.

- Users:
  - `fetchUsers()`: Retrieves all users.
  - `fetchUser(username)`: Retrieves a specific user.
  - `signIn(creds)`: Handles user sign-in.
  - `signUp(creds)`: Handles user registration.
  - `deleteUser()`: Deletes the current user.

## Store

The application uses Redux for state management. The store is configured in `src/store/store.ts` and includes the following slices:

- `posts`: Manages the state of blog posts.
- `users`: Handles user-related state.
- `comments`: Manages the state of comments.
- `token`: Handles authentication token and logged in user.

Each slice has its own reducer and actions defined in separate files within the `src/store/slices` directory.

## Setup and Installation

1. Clone the repository.
2. Run `npm install` or `deno install` to install dependencies.
3. Use `npm run dev` or `deno task dev` to start the development server.

## Development

This project uses Vite for fast development and building.

Using npm:
- `npm run dev`: Start the development server.
- `npm run build`: Build for production.
- `npm run lint`: Run ESLint.
- `npm run preview`: Preview the production build.

Using deno:
- `deno task dev`: Start the development server.
- `deno task build`: Build for production.
- `deno task lint`: Run ESLint.
- `deno task preview`: Preview the production build.

## ESLint Configuration

The project uses ESLint for code linting. To enable type-aware lint rules for a production application:

1. Configure the top-level `parserOptions` in the ESLint config file.
2. Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.
3. Optionally add `...tseslint.configs.stylisticTypeChecked`.
4. Install and configure `eslint-plugin-react`.

For detailed configuration, refer to the ESLint configuration section in the original README.

---

For more information about React, TypeScript, or Vite, please refer to their respective documentation.