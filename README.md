# ✈️ Flights-Service Microservice

This is a **microservice** built using Node.js, Express.js, and PostgreSQL that provides all the flight-related data in an **Airplane Booking System**. It handles flight, airplane, city, and airport data, offering full CRUD capabilities and structured RESTful API endpoints.

---

## 📦 Tech Stack

- **Backend Framework**: Node.js, Express.js  
- **Database**: PostgreSQL  
- **ORM**: Prisma ORM  
- **Language**: JavaScript  

---

## 🚀 Getting Started

Follow these steps to get the project up and running locally.

### 1. Clone the Repository

```bash
git clone <repo_url>
cd Flights-Service
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables
Create a .env file in the root directory and add the following variables:

```env
PORT=3000
DATABASE_URL=<your_postgresql_database_url>
```

### 4. Set Up Database with Prisma
Navigate to the src directory and run the following Prisma commands:

```bash
cd src
npx prisma migrate dev
npx prisma generate
```

### 5. Seed the Database (Optional)

```bash
npx prisma db seed
```

### Start the Development Server

```bash
npm run dev
```

## 🗃️ Database Schema
You can inspect the data models and relationships in the Prisma schema file located at:

```bash
prisma/schema.prisma
```

## 📡 API Endpoints

Below is a categorized list of the available RESTful API endpoints.

### 🔄 General
- `GET /api/v1/info` — Check if the server is up and running

### ✈️ Flight Routes
- `GET /api/v1/flight` — Get all flights
- `GET /api/v1/flight/search` — Search flights by filter
- `GET /api/v1/flight/:id` — Get details of a specific flight
- `POST /api/v1/flight` — Create a new flight
- `PATCH /api/v1/flight/:id` — Update an existing flight
- `DELETE /api/v1/flight/:id` — Delete a flight
- `PATCH /api/v1/flight/:id/seats` — Update seats for a flight (used in booking flow)

### 🛩️ Airplane Routes
- `GET /api/v1/airplanes` — Get all airplanes
- `GET /api/v1/airplanes/:modelNumber` — Get airplane by model number
- `POST /api/v1/airplanes` — Add a new airplane
- `PATCH /api/v1/airplanes/:modelNumber` — Update an existing airplane
- `DELETE /api/v1/airplanes/:modelNumber` — Delete an airplane

### 🌆 City Routes
- `GET /api/v1/city` — Get all cities
- `GET /api/v1/city/:id` — Get city by ID
- `POST /api/v1/city` — Add a new city
- `PATCH /api/v1/city/:id` — Update city details
- `DELETE /api/v1/city/:id` — Delete a city

### 🛬 Airport Routes
- `GET /api/v1/airport` — Get all airports
- `GET /api/v1/airport/:code` — Get airport by code
- `POST /api/v1/airport` — Add a new airport
- `PATCH /api/v1/airport/:code` — Update airport details
- `DELETE /api/v1/airport/:code` — Delete an airport

## 📁 Folder Structure

```bash
└───src
    ├───config
    ├───controllers
    ├───middlewares
    ├───prisma
    │   └───migrations
    │       ├───20250320185732_added_airplane_model
    │       ├───20250320190758_added_capacity_default_value
    │       ├───20250322111427_modified_airplane_model
    │       ├───20250322112525_model_number_auto_increment
    │       ├───20250322125851_added_city_model
    │       ├───20250323131305_added_airport_model
    │       ├───20250323142239_added_flight_model
    │       ├───20250324113326_updated_flight_model
    │       ├───20250324114415_updated_time_field
    │       ├───20250324145606_reset_db
    │       └───20250325083317_added_seats_model
    ├───repositories
    ├───routes
    │   └───v1
    │       ├───airplanes
    │       ├───airport
    │       ├───city
    │       └───flight
    ├───services
    └───utils
        └───common
```
