# Crypto App Full-Stack 

A full-stack cryptocurrency platform  inspired by leading crypto exchanges. This project features a robust **React & Tailwind CSS** frontend paired with a powerful **Express.js & MongoDB** backend API.

## 🚀 Features

- **User Authentication**: Secure user registration, email verification flow, and login.
- **Live Crypto Dashboard**: The Explore page fetches and displays live cryptocurrency data, top gainers, and new asset listings directly from the backend API.
- **Admin Dashboard (Hidden)**: Access the `/admin` route to seamlessly add new cryptocurrencies to the MongoDB database and have them appear instantly on the platform.
- **Dynamic Navigation**: A polished, responsive navigation bar with interactive dropdown menus for a premium user experience.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing using modern Tailwind utility classes.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Data Fetching**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT (JSON Web Tokens), bcryptjs
- **Middleware**: CORS, cookie-parser

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/en/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas URI)

## ⚙️ Getting Started

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd coinbase-clone-r-owusu
```

### 2. Backend Setup
Navigate to the backend directory, install dependencies, and start the server:
```bash
cd Backend
npm install

# Create a .env file in the Backend directory and add the following:
# PORT=5000
# MONGO_DB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret

npm start
```
The backend will run on `http://localhost:5000`.

### 3. Frontend Setup
Open a new terminal window, navigate to the frontend directory, install dependencies, and start the Vite dev server:
```bash
cd Frontend
npm install
npm run dev
```
The frontend will run on `http://localhost:5173`.

## 📖 User Manual (How to Use)

### 1. Authentication (Sign Up & Login)
- Click **Sign up** in the navigation bar to create a new account.
- **Email Verification**: This is a demo app. When you reach the email verification screen, you do not need to check your email. **You can enter any 6-digit code** to bypass the verification step.
- After verifying, use your credentials to sign in. The navigation bar will dynamically update to show your initials.

### 2. Adding New Cryptocurrencies (Admin)
- There is an admin route used to populate the database with new crypto assets.
- Navigate to `http://localhost:5173/admin` in your browser.
- Fill out the form fields (Name, Symbol, Price, Image URL, and 24h Change).
- Upon successful submission, the new cryptocurrency will be permanently saved to the backend database.

### 3. Exploring the Market
- Navigate to the **Explore** page (or click "Cryptocurrencies" in the navbar).
- You will see the main list of cryptocurrencies fetched from the database.
- The **Top Movers** sidebar automatically calculates and displays the top 2 cryptocurrencies with the highest positive 24-hour change.
- The **New on Crypto App** sidebar automatically fetches and displays the 2 most recently added assets from the database. Any assets you added via the `/admin` page will instantly appear here.

## 📡 Key API Endpoints

- **Auth Routes** (`/api/auth`)
  - `POST /register`: Create a new user account
  - `POST /login`: Authenticate a user
  - `POST /logout`: Clear authentication cookies
- **User Routes** (`/api/user`)
  - `GET /profile`: Retrieve the authenticated user's profile
- **Crypto Routes** (`/api/crypto`)
  - `GET /`: Fetch all cryptocurrencies
  - `POST /`: Add a new cryptocurrency (Used by the Admin panel)
  - `GET /gainers`: Fetch top performing cryptocurrencies
  - `GET /new`: Fetch recently listed cryptocurrencies

## 📁 Architecture Overview

```text
coinbase-clone-r-owusu/
├── Backend/                 # Express API
│   ├── controllers/         # Route logic (auth, crypto, user)
│   ├── models/              # Mongoose database schemas
│   ├── routes/              # Express route definitions
│   ├── middleware/          # Custom middlewares (e.g., auth protection)
│   └── index.js             # Server entry point
│
└── Frontend/                # React App
    ├── src/
    │   ├── assets/          # Static images & SVGs
    │   ├── components/      # Reusable UI components (Navbar, Footer, etc.)
    │   ├── pages/           # Page views (Home, Explore, Admin, Auth, etc.)
    │   ├── App.jsx          # Root component & Route configuration
    │   └── main.jsx         # React DOM renderer
    ├── tailwind.config.js   # Tailwind configuration
    └── vite.config.js       # Vite configuration
```

## 🌐 Deployment
The frontend is optimized and ready to be built for production (`npm run build`) and deployed to static hosts like **Netlify** or **Vercel**. The Node.js backend can be hosted on platforms like **Railway**, **Render**, or **Heroku**.
