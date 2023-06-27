# Workstation Booking App

The Workstation Booking App is a web application designed to manage and book workstations in a shared office space. It provides users with the ability to view available workstations, book a workstation for a specific date and time, and manage their bookings. This repository contains the source code for both the frontend and backend components of the application.

## Technologies Used

- Frontend: React.js
- Backend: Java Spring Boot (Spring JPA)
- Database: PostgreSQL

## Prerequisites

Before running the Workstation Booking App, ensure you have the following prerequisites installed:

- Node.js: Make sure you have Node.js and npm (Node Package Manager) installed.
- Java Development Kit (JDK): Install JDK to run the Spring Boot backend.
- PostgreSQL: Set up a PostgreSQL database and configure the connection details.

## Getting Started

Follow the steps below to get the Workstation Booking App up and running:

### Frontend

1. Navigate to the `workstation-booking` directory: `cd frontend`.
2. Install the dependencies: `npm install`.
3. Configure the backend API endpoint in the `.env` file. (Example: APP_API_URL=http://localhost:8080/api`)
4. Start the development server: `npm start`.
5. Access the app in your browser at `http://localhost:3000`.

### Backend

1. Navigate to the `backend` directory: `cd backend`.
2. Configure the database connection details in `application.properties` file.
3. Build the project: `./mvnw clean package`.
4. Run the application: `./mvnw spring-boot:run`.
5. The backend server(Tomcat) will start at `http://localhost:8080`.

## Database Setup

1. Create a new PostgreSQL database for the Workstation Booking App.
2. Update the database connection details in the backend's `application.properties` file.
3. Run the database migrations by executing the SQL scripts available in the `database` directory.

## License

This project is licensed under [Arshil Akkala](LICENSE). You are free to use, modify, and distribute the code as per the terms of the license.

## Contact

If you have any questions or suggestions regarding the Workstation Booking App, please feel free to reach out to us at [arshilakkala@gmail.com](mailto:arshilakkala@gmail.com).

Happy booking!
