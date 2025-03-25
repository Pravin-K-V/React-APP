# Running the Project in Docker

## Prerequisites

Before running the project in Docker, ensure the following prerequisites are met:

- **Docker** must be installed on your system.
  - If you haven't installed Docker yet, follow the installation guide for your operating system: [Docker Installation Guide](https://docs.docker.com/get-docker/)

---

## Backend: Spring Boot Application

### Pull the Docker Image

To pull the backend Spring Boot application image from Docker Hub, run:

```
docker pull pravin19/retailer-app
docker run -d -p 8080:8080 pravin19/retailer-app
```

## Frontend: React Application

### Pull the Docker Image

To pull the backend Spring Boot application image from Docker Hub, run:

```
docker pull pravin19/react-app
docker run -d -p 3000:80 pravin19/react-app
```

Backend API: Once the backend container is running, you can access the API at:
http://localhost:8080

Frontend Application: Once the frontend container is running, you can access the React app at:
http://localhost:3000 ( run this address in the browser to visit the User interface)







