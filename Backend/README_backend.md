# 🛠️ Meeting Scheduler Backend – Spring Boot REST API

This is the backend for the Meeting Scheduler project, built using **Java Spring Boot** with RESTful API design and MySQL integration.

---

## 🚀 Features

- Create and retrieve meetings via REST API
- MySQL database support
- JPA & Hibernate ORM
- Swagger UI for API testing
- CORS support for frontend communication

---

## ⚙️ Tech Stack

- Java 21
- Spring Boot 3.5.0
- Spring Data JPA & JDBC
- MySQL & H2 (dev)
- Lombok
- Swagger/OpenAPI (springdoc)

---


## 🧾 Setup Instructions

### 🛠 Requirements

- Java 17+
- Maven
- MySQL Server running on `localhost:3306`

### 🧑‍💻 Setup

1. Start MySQL and ensure database credentials match:

```
spring.datasource.url=jdbc:mysql://localhost:3306/Meeting_DB...
spring.datasource.username=root
spring.datasource.password=root
```

2. Run backend using Maven:

```bash
cd backend
./mvnw spring-boot:run
```

The server will start at:  
📍 `http://localhost:8080`

---

## 🛣️ API Endpoints

| Method | Endpoint          | Description         |
|--------|-------------------|---------------------|
| POST   | `/api/meetings`   | Create new meeting  |
| GET    | `/api/meetings`   | List all meetings   |

### Sample POST request

```json
{
  "title": "Project Sync",
  "date": "2025-06-25",
  "time": "14:00",
  "priority": "High",
  "participants": "Alice, Bob"
}
```

---

## 📊 Swagger UI

Access API documentation at:  
🔗 `http://localhost:8080/swagger-ui.path.html`



---

## 🧪 Testing

Run unit and integration tests with:

```bash
./mvnw test
```

---
