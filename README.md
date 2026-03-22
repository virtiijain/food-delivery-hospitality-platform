# food-delivery-hospitality-platform
# 🍔 Merchant Dashboard – Food Delivery Platform

This project is a simple Merchant Dashboard built as part of a food delivery and dine-out platform. It allows restaurant owners to manage their menu, track orders, and handle basic cart operations.

The goal of this project was to understand how frontend and backend work together in a real-world application using React and Node.js.

---

## 🚀 Features

- Dashboard showing basic order stats
- Add new food items to menu
- View and delete menu items
- View customer orders and update status
- Add items to cart and view total

---

## 🛠️ Tech Used

**Frontend**
- React.js
- Bootstrap

**Backend**
- Node.js
- Express.js

---

## 📁 Project Structure
# 🍽️ Integrated Food Delivery & Dine-Out Hospitality Platform

[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![Socket.io](https://img.shields.io/badge/Socket.io-Realtime-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io/)
[![AWS](https://img.shields.io/badge/AWS-EC2%20%7C%20S3-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/)

*One platform. Every craving. Every table. Every event.*

</div>

---

## 📌 Problem Statement

The modern hospitality industry is **digitally fragmented**. Users juggle multiple apps for food delivery, table reservations, and event ticketing — causing app fatigue and a disjointed experience. Restaurant partners face high commission fees and scattered dashboards.

This platform solves this by unifying food delivery, dine-in reservations, and event discovery into a single, intelligent ecosystem — powered by geospatial search, real-time order tracking, and a gamified review engine.

---

## ✨ Core Features

| Feature | Description |
|---|---|
| 📍 **Geospatial Discovery** | Find nearby restaurants using MongoDB `$geoNear` with filters for cuisine, rating & distance |
| 🛒 **Unified Cart** | Seamlessly switch between delivery orders and table reservations in one checkout |
| 🔴 **Real-Time Tracking** | WebSocket-powered live order status updates for consumers, merchants & couriers |
| ⭐ **Gamified Reviews** | Earn loyalty points based on review length, keyword richness & media uploads |
| 🤖 **AI Review Assist** | NLP-powered keyword suggestions to help users write better reviews |
| 🏪 **Merchant Dashboard** | Unified portal for managing orders, tables, menus & revenue analytics |

---

## 🏗️ Tech Stack

```
┌─────────────────────────────────────────────────────┐
│                    CLIENT LAYER                     │
│              React.js  ·  Socket.io Client          │
├─────────────────────────────────────────────────────┤
│                    API LAYER                        │
│           Node.js  ·  Express.js  ·  JWT Auth       │
├─────────────────────────────────────────────────────┤
│                  REAL-TIME LAYER                    │
│                  Socket.io Server                   │
├─────────────────────────────────────────────────────┤
│                  DATABASE LAYER                     │
│         MongoDB Atlas  ·  2dsphere Indexes          │
├─────────────────────────────────────────────────────┤
│                  CLOUD LAYER                        │
│         AWS EC2  ·  AWS S3  ·  Docker  ·  CI/CD     │
└─────────────────────────────────────────────────────┘
```

---

## 👥 Team

| Name | GitHub | Role | Responsibilities |
|------|--------|------|-----------------|
| **Virti Jain** | [@virtiijain](https://github.com/virtiijain) | Full Stack | Database Architecture, MongoDB Schemas, GeoJSON Design, Frontend UI & Components |
| **Krishna Vamshi** | [@krishnavamshi-12](https://github.com/krishnavamshi-12) | Frontend | Frontend UI, React Components, Merchant Dashboard Interface |
| **Poorva Harde** | [@poorvaharde](https://github.com/poorvaharde) | Backend | REST APIs, JWT Authentication, Express Routes, WebSocket Server |
| **Syed Farazdak Mehdi** | [@Syedfaraz7860](https://github.com/Syedfaraz7860) | DevOps | Docker, GitHub Actions CI/CD Pipeline, AWS Deployment |

---

### Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

> ⚠️ **Never commit your `.env` file.** It is already listed in `.gitignore`. Share credentials with teammates privately only (WhatsApp/DM).

---

## 🤝 Contributing — Team Git Workflow

### Branch Strategy

```
main                               ← production only, strictly protected
 └── develop                       ← integration branch, protected
      ├── feat/database-schemas         (Virti)
      ├── feat/auth-layer               (Poorva)
      ├── feat/restaurant-discovery     (Poorva)
      ├── feat/cart-state-management    (Virti + Krishna)
      ├── feat/websocket-server         (Poorva)
      ├── feat/review-engine            (Poorva)
      ├── feat/merchant-dashboard       (Krishna + Virti)
      └── feat/docker-cicd              (Syed)
```

### Workflow Rules

1. **Always branch off `develop`** — never off `main`
2. **Branch naming convention**: `feat/`, `fix/`, `chore/`, `docs/`
3. **Open PR to `develop`** — minimum **1 teammate approval** required before merge
4. **Never push directly** to `main` or `develop`
   
---

## 📄 License

This project is developed as part of a structured internship engineering program.

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/virtiijain">Virti</a> · <a href="https://github.com/krishnavamshi-12">Krishna</a> · <a href="https://github.com/poorvaharde">Poorva</a> · <a href="https://github.com/Syedfaraz7860">Farazdak</a></sub>
</div>
