# Blood Bank Management System (BBMS)

## Overview

The **Blood Bank Management System (BBMS)** is a web-based platform designed to streamline the management of blood donations, hospital requests, and inventory tracking. By replacing manual processes with a structured digital workflow, BBMS enables hospitals and blood banks to access real-time inventory, maintain donor records, and process blood requests efficiently.

## The Problem

Many blood banks still rely on manual documentation, scattered information, and slow communication methods. This leads to:

* No real-time visibility of blood availability
* Delays during emergency blood requirements
* Frequent data entry errors
* Difficulty managing donors, patients, and hospital requests
* Lack of a centralized system connecting all operations

These limitations reduce the efficiency and reliability of blood bank operations.

## Our Solution

BBMS provides an **all-in-one, centralized, and secure system** that handles all operations digitally. Key features include:

* Donor registration and management
* Hospital request creation and status tracking
* Real-time inventory monitoring
* Secure authentication using JWT
* Fully structured backend APIs
* Organized frontend interface for hospitals and staff

The goal is to ensure quick response times, reduce manual errors, and improve operational workflow.

## Tech Stack

### Frontend

* React.js
* React Router
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt for password hashing

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd blood-bank-management-system
```

2. **Backend Setup:**
```bash
cd backend
npm install
```

Create a `.env` file:
```env
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
PORT=5000
FRONTEND_URL=http://localhost:5173
```

Start the backend server:
```bash
npm start
```

3. **Frontend Setup:**
```bash
cd ../frontend
npm install
```

Create a `.env` file:
```env
VITE_API_URL=http://localhost:5000
VITE_WEBSITE_NAME=Blood Bank MS
```

Start the frontend:
```bash
npm run dev
```

4. **Create Admin User (Optional):**
```bash
cd ../backend
node seedAdmin.js
```

Default admin credentials:
- Email: `admin@bbms.com`
- Password: `bbms@admin`

## Deployment

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

## Project Structure

```
blood-bank-management-system/
├── backend/
│   ├── config/          # Database configuration
│   ├── controllers/      # Route controllers
│   ├── middlewares/      # Authentication & authorization
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   └── server.js         # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   └── utils/        # Utility functions
│   └── vite.config.js    # Vite configuration
└── README.md
```

## License

MIT License - See LICENSE file for details

## Author

Amritesh Singh
