# Getting Started with Create React App

## VISIT to view the project: https://sailesh-altys-assignment.vercel.app/

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technologies Used:
### React.js & Typescript:
For building the user interface and handling the overall application logic.
### Tailwind CSS:
For styling the components with utility-first CSS classes.
### Local Storage:
For managing user authentication data (e.g., storing login status and user details).
### Window Object (for Routing):
Used to handle navigation between pages instead of using React Router.

## Application Flow:
### Login Process:
- When a user visits the application, they are prompted to log in.
- User credentials are validated (likely against locally stored user data).
- Upon successful login, the user’s status is saved in local storage.
- The user is then redirected to the home page (root path) using the window.location method.

### Home Page Access:
- The user can access and interact with the home page once logged in.
  
### Logout Process:
- When the user logs out, their authentication status is cleared from local storage.
- The user is still on the home page but is now unauthenticated.
  
### Handling Unauthenticated Actions:
- If the user tries to perform any action on the home page after logging out, a modal is displayed.
- The modal contains a login form, requiring the user to log in again to continue.

