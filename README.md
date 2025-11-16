# Netflix Clone Project

A responsive Netflix clone built with React.js and Vite, featuring user authentication, movie browsing, and video playback capabilities.

# Live Demo

link - https://project-neflix-clone-0554fa.netlify.app/

## Table of Contents
- [Project Overview](#project-overview)
- [Business Problem](#business-problem)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Research Questions and Key Findings](#research-questions-and-key-findings)
- [Screenshots](#screenshots)
- [How to Run the Project](#how-to-run-the-project)

## Project Overview

This Netflix clone is a full-stack web application that replicates the core functionality of Netflix. Users can browse movies, view details, and watch trailers. The application features user authentication, responsive design, and integration with external APIs for movie data.

## Business Problem

The entertainment industry requires scalable, user-friendly streaming platforms. This project addresses the need for:
- A responsive interface that works across all device sizes
- Secure user authentication and account management
- Efficient content browsing and discovery
- Seamless video playback experience

## Technologies Used

### Frontend
- **React 19** - JavaScript library for building user interfaces
- **Vite** - Next-generation frontend tooling (using rolldown for performance)
- **React Router v7** - Declarative routing for React applications
- **Bootstrap 5** - CSS framework for responsive design
- **React Bootstrap** - Bootstrap components built with React

### Backend & Services
- **Firebase** - Authentication and database services
- **The Movie Database (TMDb) API** - Movie data and trailers
- **React Firebase Hooks** - Easy integration with Firebase services

### Development Tools
- **ESLint** - Code linting and quality assurance
- **react-toastify** - Notification system

## Project Structure

```
src/
├── assets/                 # Images, icons, and static assets
│   └── cards/
├── components/             # Reusable UI components
│   ├── Footer/
│   ├── Navbar/
│   └── TitleCards/
├── pages/                  # Main application pages
│   ├── Home/
│   ├── Login/
│   └── Player/
├── App.jsx                 # Main application component
├── firebase.js             # Firebase configuration and auth functions
└── main.jsx                # Application entry point
```

## Key Features

1. **User Authentication**
   - Sign up and login functionality
   - Protected routes
   - Session management

2. **Movie Browsing**
   - Hero banner with featured content
   - Category-based browsing (Popular, Top Rated, etc.)
   - Horizontal scrolling movie cards

3. **Video Playback**
   - YouTube trailer integration
   - Movie information display
   - Responsive player interface

4. **Responsive Design**
   - Works on all screen sizes (including 1024x1366 portrait orientation)
   - Mobile-friendly navigation
   - Adaptive layouts

## Research Questions and Key Findings

### Research Questions
1. How to implement secure user authentication in a React application?
2. How to efficiently fetch and display large amounts of movie data?
3. How to create a responsive UI that mimics Netflix's design?
4. How to integrate external APIs for video content?

### Key Findings
1. Firebase provides a robust, secure authentication system with minimal setup
2. The Movie Database (TMDb) API offers comprehensive movie data with reliable performance
3. React components with Bootstrap enable rapid development of responsive UIs
4. React Router v7 simplifies navigation and route management in single-page applications

## Screenshots

1. **Login Page** - Clean authentication interface with sign in/up options
   
   ![Login Page](screenshot/Screenshot%202025-11-04%20215341.png)

2. **Home Page** - Netflix-style layout with hero banner and movie categories
   
   ![Home Page](screenshot/Screenshot%202025-11-13%20172148.png)

4. **Movie Player** - Full-screen video playback with movie information
   
   ![Movie Player](screenshot/Screenshot%202025-11-04%20215443.png)

## How to Run the Project

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Firebase account with a project set up
- TMDb API key (optional, for movie data)

### Installation Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd netfilx-clone-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`:
     ```bash
     copy .env.example .env
     ```
   - Update `.env` with your Firebase credentials:
     ```
     VITE_FIREBASE_API_KEY=your_api_key_here
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
     VITE_FIREBASE_PROJECT_ID=your_project_id_here
     VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
     VITE_FIREBASE_APP_ID=your_app_id_here
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

6. Preview the production build:
   ```bash
   npm run preview
   ```

### Available Scripts
- `npm run dev` - Starts the development server
- `npm run build` - Builds the project for production
- `npm run lint` - Runs ESLint to check for code issues
- `npm run preview` - Previews the production build locally

The application will be available at `http://localhost:5173` (default Vite port).

----------------------------------------------------------------------------------

© 2025 Vedant Ligade. All rights reserved.
