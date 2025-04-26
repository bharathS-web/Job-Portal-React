# Job Portal

A full-stack web application connecting job seekers with employers, built with Node.js, React, MongoDB, and Cloudinary.

![Job Portal Banner](https://raw.githubusercontent.com/your-username/job-portal/main/banner.png)

## 🚀 Features

### For Job Seekers
- Browse and search job listings
- Create and manage professional profiles
- Apply for jobs with a simple application form
- Track application status
- Save favorite job listings

### For Employers
- Post detailed job listings
- View and manage applications
- Edit or delete job postings
- Review job seeker profiles

## 🛠️ Tech Stack

### Backend
- **Node.js & Express.js** - Server framework
- **MongoDB Atlas** - Database
- **JWT** - Authentication
- **Cloudinary** - File/image storage

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **React Router** - Navigation
- **Tailwind CSS** (or other UI framework)

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js (v14.x or newer)
- npm (v6.x or newer)
- MongoDB Atlas account
- Cloudinary account

## 🔧 Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/your-username/job-portal.git
cd job-portal
```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=4000
   CLOUDINARY_API_KEY=YOUR_CLOUDINARY_API_KEY
   CLOUDINARY_API_SECRET=YOUR_CLOUDINARY_API_SECRET
   CLOUDINARY_CLOUD_NAME=YOUR_CLOUDINARY_CLOUD_NAME
   FRONTEND_URL=YOUR_FRONTEND_URL
   DB_URL=YOUR_MONGODB_CONNECTION_STRING
   JWT_SECRET_KEY=YOUR_JWT_SECRET_KEY
   JWT_EXPIRE=7d
   COOKIE_EXPIRE=7
   NODE_ENV=development
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```
   VITE_BACKEND_URL=YOUR_BACKEND_URL
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🌐 Deployment

The application is deployed using Render:

- **Frontend**: [https://job-portal-o1dw.onrender.com](https://job-portal-o1dw.onrender.com)
- **Backend**: [https://job-portal-react-6s4z.onrender.com](https://job-portal-react-6s4z.onrender.com)

## 🔐 Security

- JWT authentication and authorization
- Environment variables for sensitive information
- Secure file uploads via Cloudinary

## 📱 Screenshots

<div align="center">
  <img src="https://raw.githubusercontent.com/your-username/job-portal/main/screenshots/home.png" alt="Home Page" width="45%">
  <img src="https://raw.githubusercontent.com/your-username/job-portal/main/screenshots/jobs.png" alt="Jobs Page" width="45%">
</div>

## 🗂️ Project Structure

```
job-portal/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── index.html
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgements

- [MongoDB](https://www.mongodb.com/)
- [Cloudinary](https://cloudinary.com/)
- [JWT](https://jwt.io/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Node.js](https://nodejs.org/)

## 📬 Contact

Your Name - your-email@example.com

Project Link: [https://github.com/your-username/job-portal](https://github.com/your-username/job-portal)
