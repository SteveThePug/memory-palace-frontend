# React + TypeScript + Vite Frontend

This project is a React-based frontend application built with TypeScript and Vite. It provides a user interface for a blog-like application with posts, comments, and user management.

## Table of Contents

1. [Components](#components)
2. [API](#api)
3. [Store](#store)
4. [Setup and Installation](#setup-and-installation)
5. [Development](#development)
6. [ESLint Configuration](#eslint-configuration)

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
- `token`: Handles authentication tokens.

Each slice has its own reducer and actions defined in separate files within the `src/store/slices` directory.

## Setup and Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Use `npm run dev` to start the development server.

## Development

This project uses Vite for fast development and building. Key scripts:

- `npm run dev`: Start the development server.
- `npm run build`: Build for production.
- `npm run lint`: Run ESLint.
- `npm run preview`: Preview the production build.

## ESLint Configuration

The project uses ESLint for code linting. To enable type-aware lint rules for a production application:

1. Configure the top-level `parserOptions` in the ESLint config file.
2. Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.
3. Optionally add `...tseslint.configs.stylisticTypeChecked`.
4. Install and configure `eslint-plugin-react`.

For detailed configuration, refer to the ESLint configuration section in the original README.

---

For more information about React, TypeScript, or Vite, please refer to their respective documentation.