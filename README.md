# Student Portal

A professional web-based student portal that provides a centralized platform for managing academic and personal information. The portal includes essential features such as authentication, a personalized dashboard, profile management, and account settings, along with a community discussion space where students can share information, ask questions, and interact with their peers.


## Features
- Student login and authentication
- Personalized student dashboard
- Student profile management
- Account and application settings
- Student discussion posts
- Comments and reactions
- Browse recent discussions

## Prerequisites

- **Node.js (v18 or higher)**
- **npm**
- **Git**

## Installation

Follow these steps to set up the Student Portal locally.

**1. Clone the Repository**

Clone the repository using Git:

*git clone https://github.com/Sanjana-Venkatesan/student-portal.git*

Navigate to the project directory:

*cd student-portal*

**2. Install Dependencies**

Install the required project dependencies using npm:

*npm install*

**3. Run the Application**

Start the Vite development server:

*npm run dev*

Once the server starts, open the local URL displayed in the terminal. By default:

http://localhost:5173

The application will automatically update in the browser when changes are made during development.

## Application Routes

| Route | Description |
|---|---|
| `/login` | Student login and authentication |
| `/dashboard` | Personalized student dashboard |
| `/profile` | View and edit student profile |
| `/settings` | Manage account and application preferences |
| `/community` | Browse and interact with community discussions |

## Project Structure

The Student Portal uses a modular React structure with separate pages, application context, mock data, layouts, and utility functions.

```text
student-portal/
├── src/
│   ├── components/
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── data/
│   │   └── mockPosts.js
│   ├── layout/
│   ├── pages/
│   │   ├── CommunityFeed.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Dashboard.css
│   │   ├── Login.jsx
│   │   ├── Login.css
│   │   ├── Profile.jsx
│   │   ├── Profile.css
│   │   ├── Settings.jsx
│   │   └── Settings.css
│   ├── utils/
│   │   └── formatDate.js
│   ├── App.jsx
│   └── index.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

## Contributing

This is a lab exercise project built to demonstrate Git workflows. Feel free to fork and experiment.

## License

This project is for educational purposes.