# URL Shortener Project

## Project Overview
This is a full-stack URL Shortener application with user authentication. Users can register, login, and create shortened URLs. The app provides a dashboard to manage URLs and supports user sessions.

## Features
- User registration and login
- URL shortening and management
- Dashboard to view user URLs
- Authentication state management with Redux (frontend)
- REST API backend with Node.js, Express, and MongoDB
- Protected routes and authentication middleware

## Technologies Used
### Frontend
- React
- Redux Toolkit
- React Router (TanStack Router)
- Vite (build tool)
- Tailwind CSS (styling)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Various middleware for error handling and authentication

## Project Structure
```
/BACKEND
  - app.js                 # Backend app entry point
  - src/
    - config/              # Configuration files (DB, environment)
    - controller/          # Route controllers (auth, user, short_url)
    - dao/                 # Data access objects
    - middleware/          # Express middleware (auth, error handling)
    - models/              # Mongoose models
    - routes/              # Express routes
    - services/            # Business logic services
    - utils/               # Utility functions

/FRONTEND
  - src/
    - api/                 # API calls
    - components/          # React components (LoginForm, RegisterForm, NavBar, etc.)
    - pages/               # Page components (AuthPage, DashboardPage, HomePage)
    - routing/             # Route definitions and route tree
    - store/               # Redux store and slices
    - utils/               # Utility functions
  - index.html
  - main.jsx               # Frontend app entry point
  - vite.config.js         # Vite config
```

## Setup and Installation

### Backend
1. Navigate to the `BACKEND` directory:
   ```bash
   cd BACKEND
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables as needed (e.g., MongoDB URI, JWT secret).
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend
1. Navigate to the `FRONTEND` directory:
   ```bash
   cd FRONTEND
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
4. Open the app in your browser at the URL shown in the terminal (usually `http://localhost:3000`).

## Usage
- Register a new user or login via the `/auth` page.
- Create and manage shortened URLs in the dashboard.
- Use the navigation bar to login/logout and navigate between pages.

## Testing
- Manual testing of user authentication flows (login, signup, logout).
- Verify URL shortening and dashboard functionality.
- Further automated tests can be added as needed.

## Notes
- Ensure MongoDB is running and accessible for the backend.
- Environment variables should be set properly for backend configuration.

## License
This project is open source and free to use.
