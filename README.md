# 🔗 URL Shortener

<div align="center">
  <h3>A modern, full-stack URL shortening service with user authentication</h3>
  
  [![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge)](https://url-shortner-frontend-71p3.onrender.com)
  [![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/AdityaCU2026/URL_SHORTNER)
</div>

---

## 🌟 Live Demo

**🚀 [Try the App Live](https://url-shortner-frontend-71p3.onrender.com)**

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Live Demo](#-live-demo)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Usage](#-usage)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [API Documentation](#-api-documentation)
- [License](#-license)

---

## ✨ Features

### 🔐 **Authentication System**
- User registration and login
- JWT-based authentication
- Secure session management
- Protected routes

### 🔗 **URL Management**
- Shorten long URLs instantly
- Custom URL slugs (for authenticated users)
- Click tracking and analytics
- Personal dashboard for URL management

### 🎨 **User Experience**
- Modern, responsive UI with Tailwind CSS
- Real-time URL validation
- Copy-to-clipboard functionality
- Loading states and error handling

### 🚀 **Performance & Security**
- Fast redirects
- CORS configuration for cross-origin requests
- Input validation and sanitization
- Error handling middleware

---

## 🛠 Tech Stack

### **Frontend**
| Technology | Purpose |
|------------|----------|
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) | UI Framework |
| ![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white) | State Management |
| ![TanStack Router](https://img.shields.io/badge/TanStack%20Router-FF6B6B?style=flat) | Routing |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | Styling |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) | Build Tool |

### **Backend**
| Technology | Purpose |
|------------|----------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) | Runtime Environment |
| ![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white) | Web Framework |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) | Database |
| ![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=json-web-tokens&logoColor=white) | Authentication |

### **Deployment**
| Platform | Service |
|----------|----------|
| ![Render](https://img.shields.io/badge/Render-46E3B7?style=flat&logo=render&logoColor=white) | Frontend & Backend Hosting |
| ![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-47A248?style=flat&logo=mongodb&logoColor=white) | Database Hosting |

---

## 📁 Project Structure

```
URL_SHORTNER/
├── 📁 BACKEND/
│   ├── 📄 app.js                    # Express app entry point
│   ├── 📁 src/
│   │   ├── 📁 config/               # Database & environment config
│   │   ├── 📁 controller/           # Route controllers
│   │   │   ├── auth.controller.js
│   │   │   ├── short_url.controller.js
│   │   │   └── user.controller.js
│   │   ├── 📁 dao/                  # Data access objects
│   │   ├── 📁 middleware/           # Express middleware
│   │   ├── 📁 models/               # Mongoose schemas
│   │   ├── 📁 routes/               # API routes
│   │   ├── 📁 services/             # Business logic
│   │   └── 📁 utils/                # Helper functions
│   └── 📄 package.json
├── 📁 FRONTEND/
│   ├── 📁 src/
│   │   ├── 📁 api/                  # API integration
│   │   ├── 📁 components/           # React components
│   │   │   ├── LoginForm.jsx
│   │   │   ├── RegisterForm.jsx
│   │   │   ├── UrlForm.jsx
│   │   │   └── UserUrl.jsx
│   │   ├── 📁 pages/                # Page components
│   │   ├── 📁 routing/              # Route definitions
│   │   ├── 📁 store/                # Redux store
│   │   └── 📁 utils/                # Utility functions
│   ├── 📄 index.html
│   ├── 📄 main.jsx
│   └── 📄 package.json
└── 📄 README.md
```

---

## 🚀 Installation

### **Prerequisites**
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Git

### **1. Clone Repository**
```bash
git clone https://github.com/AdityaCU2026/URL_SHORTNER.git
cd URL_SHORTNER
```

### **2. Backend Setup**
```bash
cd BACKEND
npm install

# Create .env file
cp .env.example .env
# Edit .env with your configuration

npm start
```

### **3. Frontend Setup**
```bash
cd ../FRONTEND
npm install

# Create .env file
cp .env.example .env
# Edit .env with your configuration

npm run dev
```

---

## 🔧 Environment Variables

### **Backend (.env)**
```env
MONGO_URI=mongodb://localhost:27017/urlshortener
JWT_SECRET=your_super_secret_jwt_key
APP_URL=http://localhost:3000
CORS_ORIGIN=http://localhost:5173
PORT=3000
NODE_ENV=development
```

### **Frontend (.env)**
```env
VITE_API_URL=http://localhost:3000
```

---

## 📡 API Endpoints

### **Authentication**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | User login |
| GET | `/api/auth/logout` | User logout |
| GET | `/api/auth/me` | Get current user |

### **URL Management**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/create` | Create short URL |
| GET | `/:id` | Redirect to original URL |
| POST | `/api/user/urls` | Get user's URLs |

---

## 🎯 Usage

### **1. Authentication**
- Visit the [live app](https://url-shortner-frontend-71p3.onrender.com)
- Register a new account or login
- Access protected features

### **2. URL Shortening**
- Enter any valid URL
- Get instant shortened link
- Copy and share anywhere

### **3. Dashboard Management**
- View all your shortened URLs
- Track click analytics
- Manage your links

---

## 🌐 Deployment

### **Render Deployment**

**Backend:**
- Build Command: `cd BACKEND && npm install`
- Start Command: `cd BACKEND && npm start`
- Environment Variables: Set in Render dashboard

**Frontend:**
- Build Command: `cd FRONTEND && npm install && npm run build`
- Publish Directory: `FRONTEND/dist`
- Environment Variables: Set `VITE_API_URL`

---

## 📡 API Documentation

Detailed API documentation is available in [API_DOCUMENTATION.md](API_DOCUMENTATION.md).

**Quick API Reference:**
- **Base URL:** `https://url-shortner-backend-080g.onrender.com`
- **Authentication:** JWT via HTTP-only cookies
- **Content-Type:** `application/json`

**Key Endpoints:**
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/create` - Create short URL
- `GET /:id` - Redirect to original URL
- `POST /api/user/urls` - Get user URLs

[📖 View Full API Documentation →](API_DOCUMENTATION.md)

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <h3>🔗 Quick Links</h3>
  
  **[Live Demo](https://url-shortner-frontend-71p3.onrender.com)** • 
  **[API Docs](API_DOCUMENTATION.md)** • 
  **[GitHub](https://github.com/AdityaCU2026/URL_SHORTNER)**
  
  <br>
  
  **Made with ❤️ by [Aditya Pratap Singh](https://github.com/AdityaCU2026)**
</div>
