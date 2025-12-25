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

## The Solution

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

## Author

Amritesh Singh
