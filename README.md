## Module

Search, Filter & Pagination APIs

## Objective

Build Employee Search API, Attendance Filter API, Pagination Support, Standardized API Responses, and Global Exception Handling using Node.js, Express.js, and PostgreSQL.

## Technologies Used

* Node.js
* Express.js
* PostgreSQL
* pg
* dotenv
* Nodemon

## Features

* Employee Search API
* Attendance Filter API
* Pagination Support
* Standard API Response Structure
* Global Error Handling
* PostgreSQL Integration

## Installation

```bash
npm install
```

## Run Application

```bash
npm run dev
```

## API Endpoints

### Employee Search

```http
GET /api/employees/search
```

Query Parameters:

```text
search
page
limit
```

Example:

```http
GET /api/employees/search?search=IT&page=1&limit=5
```

### Attendance Filter

```http
GET /api/attendance/filter
```

Query Parameters:

```text
status
page
limit
```

Example:

```http
GET /api/attendance/filter?status=Present&page=1&limit=5
```

## Database

Tables:

* employees
* attendance

FlowTrack 360 - AIventra Software Solutions PVT LTD
