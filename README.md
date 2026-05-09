# Wisata API Documentation

This is a mock API for Indonesian tourist destinations, intended for frontend development and placeholder use.

**Base URL**: `https://mobile-api-beryl.vercel.app`

---

## Endpoints

### 1. Get All Tourist Destinations

- **Method**: `GET`
- **Path**: `/api/data`
- **Description**: Retrieves a list of all tourist destinations.
- **Success Response (200 OK)**:
  ```json
  {
    "success": true,
    "total": 20,
    "data": [
      {
        "id": 1,
        "nama": "Pantai Kuta",
        "kategori": "Pantai",
        "kota": "Badung",
        "provinsi": "Bali",
        "rating": 4.8,
        "gambar": "https://example.com/image.jpg"
      },
      {
        "id": 2,
        "nama": "Candi Borobudur",
        "kategori": "Budaya",
        "kota": "Magelang",
        "provinsi": "Jawa Tengah",
        "rating": 4.9,
        "gambar": "https://example.com/image.jpg"
      }
    ]
  }
  ```

---

### 2. Get a Single Tourist Destination

- **Method**: `GET`
- **Path**: `/api/data/{id}`
- **Description**: Retrieves a single tourist destination by its unique ID.
- **Parameters**:
  - `id` (integer, required): The ID of the destination to retrieve.
- **Success Response (200 OK)**:
  ```json
  {
    "success": true,
    "data": {
      "id": 1,
      "nama": "Pantai Kuta",
      "kategori": "Pantai",
      "kota": "Badung",
      "provinsi": "Bali",
      "rating": 4.8,
      "gambar": "https://example.com/image.jpg"
    }
  }
  ```
- **Error Response (404 Not Found)**:
  ```json
  {
    "success": false,
    "message": "Data tidak ditemukan"
  }
  ```

---

### 3. Add a New Tourist Destination

- **Method**: `POST`
- **Path**: `/api/data`
- **Description**: Adds a new tourist destination to the list. The ID will be auto-generated.
- **Request Body**:
  ```json
  {
    "nama": "Danau Kelimutu",
    "kategori": "Danau",
    "kota": "Ende",
    "provinsi": "NTT",
    "rating": 4.9,
    "gambar": "https://example.com/image.jpg"
  }
  ```
- **Success Response (201 Created)**:
  ```json
  {
    "success": true,
    "data": {
      "id": 21,
      "nama": "Danau Kelimutu",
      "kategori": "Danau",
      "kota": "Ende",
      "provinsi": "NTT",
      "rating": 4.9,
      "gambar": "https://example.com/image.jpg"
    }
  }
  ```

---

### 4. Update a Tourist Destination

- **Method**: `PUT`
- **Path**: `/api/data/{id}`
- **Description**: Updates an existing tourist destination's information.
- **Parameters**:
  - `id` (integer, required): The ID of the destination to update.
- **Request Body**:
  ```json
  {
    "nama": "Pantai Kuta Indah",
    "rating": 4.9
  }
  ```
- **Success Response (200 OK)**:
  ```json
  {
    "success": true,
    "data": {
      "id": 1,
      "nama": "Pantai Kuta Indah",
      "kategori": "Pantai",
      "kota": "Badung",
      "provinsi": "Bali",
      "rating": 4.9,
      "gambar": "https://example.com/image.jpg"
    }
  }
  ```
- **Error Response (404 Not Found)**:
  ```json
  {
    "success": false,
    "message": "Data tidak ditemukan"
  }
  ```

---

### 5. Delete a Tourist Destination

- **Method**: `DELETE`
- **Path**: `/api/data/{id}`
- **Description**: Deletes a tourist destination from the list.
- **Parameters**:
  - `id` (integer, required): The ID of the destination to delete.
- **Success Response (200 OK)**:
  ```json
  {
    "success": true,
    "message": "Data berhasil dihapus"
  }
  ```
- **Error Response (404 Not Found)**:
  ```json
  {
    "success": false,
    "message": "Data tidak ditemukan"
  }
  ```
