<h1 align="center">✨ Fullstack Chat & Video Calling App ✨</h1>

<p align="center">
  🚀 A modern real-time messaging and video calling platform with stunning UI, language exchange features, and robust authentication.
</p>

---

## 🌟 Features

- 💬 **Real-time Messaging** – Typing indicators, message reactions, and instant delivery.
- 📹 **Video Calling** – 1-on-1 & group video calls with screen sharing and recording.
- 🔐 **Secure Authentication** – JWT-based auth & protected routes.
- 🌍 **Language Exchange** – Built-in support for connecting users globally.
- 🎨 **32 Unique UI Themes** – Fully customizable look & feel.
- ⚡ **Modern Tech Stack** – React, Express, MongoDB, TailwindCSS, TanStack Query.
- 🧠 **State Management** – Powered by Zustand.
- 📡 **Stream API Integration** – Scalable, real-time backend.

---

## 🛠️ Tech Stack

| Frontend               | Backend            | Database  | State Mgmt | Real-Time Engine |
|------------------------|--------------------|-----------|------------|------------------|
| React + Vite           | Express.js         | MongoDB   | Zustand    | Stream API       |
| TailwindCSS            | Node.js            |           |            |                  |
| TanStack Query         |                    |           |            |                  |

---

## ⚙️ Environment Setup

### 🔹 Backend (`/backend`)

```env
PORT=5001
MONGO_URI=your_mongo_uri
STEAM_API_KEY=your_stream_api_key
STEAM_API_SECRET=your_stream_api_secret
JWT_SECRET_KEY=your_jwt_secret
NODE_ENV=development
````

### 🔹 Frontend (`/frontend`)

```env
VITE_STREAM_API_KEY=your_stream_api_key
```

---

## 🚀 Getting Started


### 2️⃣ Install Dependencies & Run Backend

```bash
cd backend
npm install
npm run dev
```

### 3️⃣ Install Dependencies & Run Frontend

```bash
cd frontend
npm install
npm run dev
```