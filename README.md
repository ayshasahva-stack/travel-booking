# ✈️ WayGo – Travel Booking Website

WayGo is a modern, responsive travel booking web application built using **React.js**. It allows users to explore destinations, book trips, manage their bookings, and securely authenticate using a login/register system. The project demonstrates complete CRUD operations, state management with Redux Toolkit, and API integration using JSON Server.

---

# 📸 Project Preview

- 🏠 Home Page
- 🌍 Destinations
- 📄 Destination Details
- 🔐 Login & Register Modal
- 📝 Booking Form
- ✅ Booking Success
- 📚 My Bookings
- 🌙 Dark Mode

---

# ✨ Features

## 👤 Authentication

- User Registration
- User Login
- Logout
- Protected Booking Route
- Form Validation
- Redux Toolkit Authentication

---

## 🌍 Destinations

- View All Destinations
- Destination Details
- Search Destinations
- Filter Destinations
- Responsive Cards

---

## ✈️ Booking System

- Multi-Step Booking Form
- Trip Details
- Traveler Details
- Payment Details
- Review & Confirm
- Booking Success Page

---

## 📚 My Bookings

- View Bookings
- Edit Booking
- Cancel Booking
- Dynamic Price Calculation
- Booking Status
- Responsive Booking Cards

---

## 🎨 User Interface

- Responsive Design
- Dark / Light Theme
- Splash Screen
- Loading State
- Empty State
- Error State
- Reusable Components

---

# 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Redux Toolkit
- Redux Thunk
- Axios
- Tailwind CSS
- React Icons
- AOS Animation

### Mock Backend

- JSON Server

---

# 🏗️ Project Architecture

```
React Components
        │
        ▼
Redux Toolkit
        │
        ▼
Redux Thunk
        │
        ▼
Axios
        │
        ▼
JSON Server
```

---

# 📁 Folder Structure

```
travel-booking
│
├── travel-booking
│   ├── src
│   │
│   ├── assets
│   ├── components
│   ├── context
│   ├── layouts
│   ├── pages
│   ├── redux
│   │   ├── auth
│   │   ├── booking
│   │   ├── destination
│   │   └── ui
│   ├── routes
│   ├── services
│   ├── utils
│   ├── App.jsx
│   └── main.jsx
│
└── json-server
    ├── db.json
    └── package.json
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/ayshasahva-stack/travel-booking.git
```

---

## Install Frontend

```bash
cd travel-booking
npm install
```

---

## Install JSON Server

```bash
cd ../json-server
npm install
```

If JSON Server is not installed:

```bash
npm install json-server
```

---

# ▶️ Run the Project

### Terminal 1 — React App

```bash
cd travel-booking
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

### Terminal 2 — JSON Server

```bash
cd json-server
npx json-server db.json --watch --port 3000
```

Runs on:

```
http://localhost:3000
```

---

# 🔗 API Endpoints

## Destinations

```
GET /destinations
```

---

## Bookings

```
GET    /bookings
POST   /bookings
PATCH  /bookings/:id
DELETE /bookings/:id
```

---

## Users

```
GET /users
POST /users
```

---

# ✅ CRUD Operations

| Module   |  Create | Read | Update | Delete |
|-------- -|:------:|:----:|:------:|:------:|
| Users    |    ✅  |  ✅ |  ❌    |   ❌  |
| Bookings |    ✅  |  ✅ |  ✅    |   ✅  |

---

# 📱 Responsive Design

The application is fully responsive for:

- 💻 Desktop
- 📱 Mobile
- 📲 Tablet

---

# 🌙 Theme Support

- Light Mode
- Dark Mode

---

# 📚 What I Learned

During this project I learned:

- React Components
- React Hooks
- React Router DOM
- Redux Toolkit
- Redux Thunk
- JSON Server
- CRUD Operations
- Axios API Integration
- Form Validation
- Protected Routes
- Responsive UI Design
- Reusable Components
- Dark Theme Implementation
- Multi-Step Forms
- State Management

---

# 🚧 Challenges Faced

- Implemented complete CRUD operations for bookings.
- Managed global state using Redux Toolkit and Redux Thunk.
- Built reusable components to reduce code duplication.
- Designed a responsive UI using Tailwind CSS.
- Implemented authentication with protected routes.
- Resolved a development issue caused by Vite watching `db.json` by separating the frontend and JSON Server into different folders.

---

# 🚀 Future Improvements

- Admin Dashboard
- Wishlist Feature
- User Profile
- Payment Gateway Integration
- Email Verification
- Reviews & Ratings
- Toast Notifications

---

# 👩‍💻 Author

Created as a beginner-level React student project.
---

# 📄 License

This project is developed for educational purposes.

---
