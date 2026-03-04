# 🧠 Portfolio Knowledge Base - Backend API

This is the high-performance, resilient REST API powering the Technical Knowledge Base. Built with **Node.js** and **Express**, it demonstrates advanced system design patterns focused on **High Availability** and **Error Resilience**.

---

## 🛠 Tech Stack

* **Runtime:** `Node.js` (v22+)
* **Framework:** `Express.js`
* **Database:** `MongoDB Atlas`
* **Object Modeling:** `Mongoose`
* **Testing:** `Jest` & `Supertest`
* **Environment:** `Dotenv`

---

## 🏗 Key Engineering Features

### 🛡 Graceful Degradation & Resilience
As highlighted in my [Medium article](https://medium.com/@ayseadagci), this API implements a **Guard Clause** mechanism using `mongoose.connection.readyState`. 
* **The Problem:** Cloud databases (MongoDB Atlas) can experience latency or connection drops.
* **The Solution:** Instead of failing with a timeout, the API instantly detects connection issues and serves a pre-configured **Fallback Dataset** from a local module.
* **Result:** 100% UI uptime for the end user.

### 🧪 Unit & Integration Testing
Quality is verified through automated tests:
* **Connection Simulation:** Using `Object.defineProperty` and custom headers to simulate database failures.
* **Payload Verification:** Ensuring fallback data matches the expected schema during outages.
* **Mocking:** Implementing Jest spies to isolate business logic from database state.

---

## 🚦 Local Development & Testing

```bash
# 1. Clone & Install
git clone [https://github.com/aysead/portfolio-backend.git](https://github.com/aysead/portfolio-backend.git)
cd portfolio-backend
npm install

# 2. Setup Environment Variables
# Create a .env file and add your MONGO_URI

# 3. Run Automated Tests
npm test

# 4. Start Server
npm start
```

Markdown
---

## 🚀 Deployment

The API is architected for **Serverless Environments** and is currently deployed on **Vercel**. 

* **CI/CD:** Integrated with GitHub for automated deployment and continuous integration.
* **Security:** Implements `CORS` policies and strict environment variable protection via `dotenv`.

---

> **"Junior developers focus on the Happy Path; Senior developers design for the Unhappy Path."**

---

### 📬 Contact
**Ayşe A. Dagci** - *Full Stack Developer*
* [GitHub](https://github.com/aysead)
