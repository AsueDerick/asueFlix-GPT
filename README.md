
# 🎬 asueFlix-GPT

**asueFlix-GPT** is a Netflix-inspired movie discovery web application built with **React** that combines real-time movie data from **The Movie Database (TMDB)** with **AI-powered movie recommendations** using **OpenAI GPT**.  
The application features authentication, dynamic movie browsing, and an intelligent GPT-based search experience.

<img width="2520" height="1117" alt="Screenshot from 2025-12-20 21-13-07" src="https://github.com/user-attachments/assets/5c6715f8-3984-43f1-b578-6894e632f5c6" />

<img width="2520" height="1117" alt="Screenshot from 2025-12-20 21-14-19" src="https://github.com/user-attachments/assets/0580af39-c4b8-459c-b932-c872b0087f79" />


## 🚀 Features

- 🔐 User authentication with Firebase
- 🎞️ Browse **Now Playing**, **Popular**, **Top Rated**, and **Upcoming** movies
- 🤖 AI-powered movie recommendations using GPT
- 🔍 GPT search interface for natural-language movie discovery
- 📺 Dynamic movie trailers via TMDB Videos API
- 🎨 Netflix-style UI using Tailwind CSS
- 🧠 Global state management with Redux Toolkit
- ⚡ Responsive and component-driven UI

---

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router DOM
- Redux Toolkit
- React Redux
- JavaScript (ES6+)

### Styling
- Tailwind CSS
- PostCSS
- Autoprefixer

### Authentication
- Firebase Authentication

### APIs
- TMDB (The Movie Database) API
- OpenAI API (GPT)

---

## 📦 Libraries & Dependencies

```txt
react
react-dom
react-router-dom
redux
@reduxjs/toolkit
react-redux
firebase
openai
tailwindcss
postcss
autoprefixer
dotenv
````

---

## 📁 Project Structure

```bash
src/
├── components/
│   ├── Header.jsx
│   ├── MainContainer.jsx
│   ├── SecondaryContainer.jsx
│   ├── MovieList.jsx
│   ├── MovieCard.jsx
│   ├── VideoBackground.jsx
│   ├── VideoTitle.jsx
│   ├── GptSearchBar.jsx
│   └── GptMovieSuggestion.jsx
│
├── hooks/
│   ├── useNowPlayingMovies.js
│   ├── usePopularMovies.js
│   ├── useTopRatedMovies.js
│   └── useUpcomingMovies.js
│
├── utils/
│   ├── firebase.js
│   ├── constants.js
│   ├── userSlice.js
│   ├── movieSlice.js
│   └── gptSlice.js
│
├── App.js
├── index.js
└── index.css
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root:

```env
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_OPENAI_API_KEY=your_openai_api_key
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
```

⚠️ **Never commit API keys to GitHub.**
The `.env` file must be listed in `.gitignore`.

---

## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AsueDerick/asueFlix-GPT.git
cd asueFlix-GPT
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

The app will run at:

```
http://localhost:3000
```

---

## 🤖 GPT Search Flow

1. User enters a natural-language movie query
2. Query is sent to OpenAI GPT
3. GPT returns movie names
4. TMDB API fetches movie metadata
5. Movies are displayed as scrollable cards

---

## 🔐 Security Notes

* OpenAI API keys **should not be exposed in frontend-only applications**
* For production:

  * Use a backend or serverless function
  * Proxy OpenAI requests securely

---

## 📌 Future Improvements

* Secure backend for OpenAI requests
* Multilingual support (i18n)
* User watchlists and profiles
* Improved GPT ranking and relevance
* Performance and accessibility enhancements

---

## 👨‍💻 Author

**Asue Derick**
DevOps Engineer & Full-Stack Developer

GitHub: [https://github.com/AsueDerick](https://github.com/AsueDerick)

---

## 📄 License

This project is licensed under the **MIT License**.

