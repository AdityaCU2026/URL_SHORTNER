# 📡 URL Shortener API Documentation

## Base URL
**Production:** `https://url-shortner-backend-080g.onrender.com`  
**Development:** `http://localhost:3000`

---

## 🔐 Authentication

All authenticated endpoints require a JWT token sent via cookies (`accessToken`).

---

## 📋 API Endpoints

### **Authentication Endpoints**

#### **POST** `/api/auth/register`
Register a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "user": {
    "_id": "60d5ecb74b24a1234567890a",
    "name": "John Doe",
    "email": "john@example.com",
    "avatar": "https://www.gravatar.com/avatar/..."
  },
  "message": "register success"
}
```

**Error Responses:**
- `400` - Invalid input data
- `409` - User already exists

---

#### **POST** `/api/auth/login`
Login with existing credentials.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "user": {
    "_id": "60d5ecb74b24a1234567890a",
    "name": "John Doe",
    "email": "john@example.com",
    "avatar": "https://www.gravatar.com/avatar/..."
  },
  "message": "login success"
}
```

**Error Responses:**
- `400` - Invalid credentials
- `404` - User not found

---

#### **GET** `/api/auth/logout`
Logout current user (clears authentication cookie).

**Response (200):**
```json
{
  "message": "logout success"
}
```

---

#### **GET** `/api/auth/me`
Get current authenticated user information.

**Headers:**
```
Cookie: accessToken=jwt_token_here
```

**Response (200):**
```json
{
  "user": {
    "_id": "60d5ecb74b24a1234567890a",
    "name": "John Doe",
    "email": "john@example.com",
    "avatar": "https://www.gravatar.com/avatar/..."
  }
}
```

**Error Responses:**
- `401` - Unauthorized (no valid token)

---

### **URL Management Endpoints**

#### **POST** `/api/create`
Create a new shortened URL.

**Request Body (Anonymous User):**
```json
{
  "url": "https://www.example.com/very-long-url"
}
```

**Request Body (Authenticated User with Custom Slug):**
```json
{
  "url": "https://www.example.com/very-long-url",
  "slug": "my-custom-slug"
}
```

**Response (200):**
```json
{
  "shortUrl": "https://url-shortner-backend-080g.onrender.com/abc123"
}
```

**Error Responses:**
- `400` - Invalid URL format
- `409` - Custom slug already exists (for authenticated users)

---

#### **GET** `/:id`
Redirect to original URL using short URL ID.

**Parameters:**
- `id` - The short URL identifier (e.g., `abc123`)

**Response:**
- `302` - Redirect to original URL
- `404` - Short URL not found

**Example:**
```
GET /abc123
→ Redirects to https://www.example.com/very-long-url
```

---

### **User URL Management**

#### **POST** `/api/user/urls`
Get all URLs created by the authenticated user.

**Headers:**
```
Cookie: accessToken=jwt_token_here
```

**Response (200):**
```json
{
  "urls": [
    {
      "_id": "60d5ecb74b24a1234567890b",
      "full_url": "https://www.example.com/page1",
      "short_url": "abc123",
      "clicks": 5,
      "user_id": "60d5ecb74b24a1234567890a",
      "createdAt": "2024-01-15T10:30:00.000Z"
    },
    {
      "_id": "60d5ecb74b24a1234567890c",
      "full_url": "https://www.google.com",
      "short_url": "xyz789",
      "clicks": 12,
      "user_id": "60d5ecb74b24a1234567890a",
      "createdAt": "2024-01-14T15:45:00.000Z"
    }
  ]
}
```

**Error Responses:**
- `401` - Unauthorized (no valid token)

---

## 🔧 Request/Response Details

### **Content Type**
All requests should use `Content-Type: application/json`

### **Authentication**
- JWT tokens are sent via HTTP-only cookies
- Cookie name: `accessToken`
- Automatically handled by browsers

### **CORS**
- Configured for cross-origin requests
- Credentials included in requests

---

## 📝 Data Models

### **User Model**
```json
{
  "_id": "ObjectId",
  "name": "string",
  "email": "string (unique)",
  "password": "string (hashed)",
  "avatar": "string (Gravatar URL)",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### **Short URL Model**
```json
{
  "_id": "ObjectId",
  "full_url": "string",
  "short_url": "string (unique)",
  "clicks": "number (default: 0)",
  "user_id": "ObjectId (optional)",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

---

## 🚨 Error Handling

### **Error Response Format**
```json
{
  "message": "Error description",
  "error": "Detailed error information (development only)"
}
```

### **HTTP Status Codes**
- `200` - Success
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (authentication required)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `409` - Conflict (duplicate data)
- `500` - Internal Server Error

---

## 🧪 Testing Examples

### **Using cURL**

**Register User:**
```bash
curl -X POST https://url-shortner-backend-080g.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123"}'
```

**Create Short URL:**
```bash
curl -X POST https://url-shortner-backend-080g.onrender.com/api/create \
  -H "Content-Type: application/json" \
  -d '{"url":"https://www.google.com"}'
```

**Access Short URL:**
```bash
curl -L https://url-shortner-backend-080g.onrender.com/abc123
```

### **Using JavaScript (Frontend)**
```javascript
// Create short URL
const response = await fetch('/api/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include', // Include cookies
  body: JSON.stringify({
    url: 'https://www.example.com'
  })
});

const data = await response.json();
console.log(data.shortUrl);
```

---

## 🔗 Related Links

- **Live API:** https://url-shortner-backend-080g.onrender.com
- **Frontend App:** https://url-shortner-frontend-71p3.onrender.com
- **GitHub Repository:** https://github.com/AdityaCU2026/URL_SHORTNER