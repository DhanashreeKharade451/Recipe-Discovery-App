Recipe Discovery Application
📌 Project Description

The Recipe Discovery Application is a React-based web application that allows users to browse, search, and save their favorite recipes.

The application fetches real-time recipe data from the TheMealDB API and provides an interactive, user-friendly interface for exploring different meal categories and detailed recipe information.

Users can:
Browse recipe categories.
View meals within a selected category.
View detailed recipe information (image, instructions, etc.).
Search for recipes by name.
Add or remove recipes from their favorites list.
Persist favorite recipes using localStorage.

********
Features
*******
State Management & Data Fetching:
Uses useState and useEffect hooks.
Implements a custom useFetch hook for API requests.
Displays loading indicators (Spinner component).
Displays error messages using a reusable ErrorMessage component.
✅ Custom Hooks
useFetch – Handles API calls, loading state, and error state.
useLocalStorage – Syncs favorite recipes with the browser’s localStorage.
✅ Global State (Context API)
*****
FavoritesContext manages:
List of favorite recipe IDs
Add to favorites
Remove from favorites
Check if recipe is already a favorite
Favorites persist across browser sessions.

✅ Routing (React Router)
The application includes the following routes:
/ – Home page (displays recipe categories)
/category/:categoryName – Displays meals for selected category
/recipe/:recipeId – Displays detailed recipe information
/favorites – Displays user’s favorite recipes
/search?query=mealName – Displays search results

✅ Reusable Components:
Navbar
RecipeCard
Spinner
ErrorMessage

********************************
Technologies Used:
React,
React Router DOM,
Context API,
Custom Hooks,
JavaScript (ES6+),
CSS,
TheMealDB API
*******************************
📦 Installation & Setup Instructions

Follow these steps to run the project locally:

1️⃣ Added Local repo to Remote
Git Remote Add origine "Project link"
2️⃣ Navigate into the project folder
cd recipe-discovery-app
3️⃣ Install dependencies
npm install
4️⃣ Start the development server
npm run dev
5️⃣ Open in browser
***********************
🌐 API Used

This project uses the free public API:

TheMealDB
https://www.themealdb.com/api.php

No API key is required.
******************************************
📁 Project Structure (Simplified)
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── RecipeCard.jsx
│   ├── Spinner.jsx
│   └── ErrorMessage.jsx
│
├── context/
│   └── FavoritesContext.jsx
│
├── hooks/
│   ├── useFetch.js
│   └── useLocalStorage.js
│
├── pages/
│   ├── HomePage.jsx
│   ├── CategoryPage.jsx
│   ├── RecipeDetail.jsx
│   ├── Favorites.jsx
│   └── SearchResults.jsx
│
└── App.jsx


///////////////////////////////////////////////
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
