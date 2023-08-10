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

1. Navigat to the `workstation-booking` directory: `cd workstation-booking`.
2. Install the dependencies: `npm install`.
3. Configure the backend API endpoint in the `.env` file. (Example: APP_API_URL=http://localhost:8080/api`)
4. Start the development server: `npm start`.
5. Access the app in your browser at `http://localhost:3000`.

### Backend

1. Navigate to the `backend` directory to check out the code.
2. Configure the database connection details in `application.properties` file.
3. Build the project: `./mvnw clean package`.
4. Run the application: `./mvnw spring-boot:run`.
5. The backend server(Tomcat) will start at `http://localhost:8080`.

## Database Setup

1. Create a new PostgreSQL database for the Workstation Booking App.
2. Update the database connection details in the backend's `application.properties` file.
3. Run the database migrations by executing the SQL scripts available in the `database` directory.

## Screenshots
![home](https://github.com/ArshiL610/workstation-booking/assets/91752244/65c2ac20-e4b5-4b69-9c77-e41cb80820fe)
*Home Page*

![login](https://github.com/ArshiL610/workstation-booking/assets/91752244/8bceb547-5e00-4142-b62c-3c1e247d547a)
*Login Page*

![about](https://github.com/ArshiL610/workstation-booking/assets/91752244/ad75553c-b497-4870-a86c-5491a7fc2c83)
*About Page*

![reset](https://github.com/ArshiL610/workstation-booking/assets/91752244/1b0919e1-e76f-46b7-8148-3c468dffb4cf)
*Reset Password Page*

![signup](https://github.com/ArshiL610/workstation-booking/assets/91752244/176fe70e-8ed0-4bc2-bdfd-01aab4da9a2a)
*Sign Up Page*

![helpdesk](https://github.com/ArshiL610/workstation-booking/assets/91752244/84817a22-599f-4cb6-afbf-04df88a2ae03)
*Helpdesk Page*

![viewbookings](https://github.com/ArshiL610/workstation-booking/assets/91752244/aa045675-d1aa-46ca-9888-01bc0f80e3e5)
*View Bookings Page*

![newbooking](https://github.com/ArshiL610/workstation-booking/assets/91752244/2e504edf-3544-46dc-8a48-f3bafe46b547)
*New Booking Page*

![bookingdetails](https://github.com/ArshiL610/workstation-booking/assets/91752244/372bebd0-c319-45de-8774-be8f8f64be46)
*Booking Details Page*


## License

This project is licensed under [Arshil Akkala](LICENSE). You are free to use, modify, and distribute the code as per the terms of the license.

## Contact

If you have any questions or suggestions regarding the Workstation Booking App, please feel free to reach out to us at [arshilakkala@gmail.com](mailto:arshilakkala@gmail.com).

Happy booking!
