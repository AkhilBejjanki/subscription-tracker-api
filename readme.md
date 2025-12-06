<div align="center">
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white" alt="node.js" />
  <img src="https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express.js" />
  <img src="https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
</div>

# Subscription Management System API

A production-ready Subscription Management System API that handles real users, real money, and real business logic.

## ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB

## 🔋 Features

- **Advanced Rate Limiting and Bot Protection** with Arcjet for comprehensive app security
- **Database Modeling** with MongoDB & Mongoose for robust data relationships
- **JWT Authentication** for user CRUD operations and subscription management
- **Global Error Handling** with input validation and middleware integration
- **Logging Mechanisms** for better debugging and monitoring
- **Email Reminders** with automated smart email workflows using Upstash
- **Scalable Architecture** with reusable code patterns

## 🤸 Quick Start

### Prerequisites

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Cloning the Repository

```bash
git clone https://github.com/AkhilBejjanki/subscription-tracker-api.git
cd subscription-tracker-api
```

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Set Up Environment Variables

Create a new file named `.env.local` in the root of your project and add the following content:

```env
# PORT
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV=development

# DATABASE
DB_URI=

# JWT AUTH
JWT_SECRET=
JWT_EXPIRES_IN="1d"

# ARCJET
ARCJET_KEY=
ARCJET_ENV="development"

# UPSTASH
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=

# NODEMAILER
EMAIL_PASSWORD=
```

### Running the Project

```bash
npm run dev
```

Open [http://localhost:5500](http://localhost:5500) in your browser or any HTTP client to test the project.

## 📝 Sample Data

Example subscription data structure:

```json
{
  "name": "Premium Membership",
  "price": 139.00,
  "currency": "USD",
  "frequency": "monthly",
  "category": "Entertainment",
  "startDate": "2025-01-20T00:00:00.000Z",
  "paymentMethod": "Credit Card"
}
```

## 🔗 Useful Resources

- **Arcjet** - [https://launch.arcjet.com/4g2R2e4](https://arcjet.com/)
- **Upstash** - [https://bit.ly/42ealiN](https://upstash.com/)
