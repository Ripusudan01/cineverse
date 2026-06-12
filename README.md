# CineVerse

A modern movie discovery web app built with **React + Vite**, powered by the **TMDB API**.

---

## Features

- Browse popular movies from TMDB
- Search movies by title
- Add / remove favorites
- Favorites stored in Local Storage
- Responsive design

---

## Tech Stack

- React, Vite, JavaScript (ES6+), CSS
- TMDB API, Local Storage

---

## Project Structure

```
src/
├── components/
│   ├── MovieCard.jsx
│   └── NavBar.jsx
├── pages/
│   ├── Home.jsx
│   └── Favorites.jsx
├── services/
│   └── api.js
├── contexts/
│   └── MovieContext.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## Installation

```bash
git clone https://github.com/Ripusudan01/cineverse.git
cd cineverse
npm install
```

Create a `.env` file in the root:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

> Get your API key from: https://www.themoviedb.org/settings/api

```bash
npm run dev
```

App runs at **http://localhost:5173**

---

## Build

```bash
npm run build
npm run preview
```

---

## License

MIT License

---

<p align="center">Made with ❤️ using React and TMDB API</p>
