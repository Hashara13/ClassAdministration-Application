# Class Administration Application

## Overview

The Class Administration Application is a comprehensive web-based solution built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application is designed to streamline the management of classes, students, and teachers in an educational setting.

## Features

- **User Authentication**: Secure login system for administrators, teachers, and students.
- **Class Management**: Create, update, and delete classes.
- **Student Management**: Add, edit, and remove student profiles.
- **Teacher Management**: Manage teacher information and class assignments.
- **Attendance Tracking**: Record and monitor student attendance.
- **Grade Management**: Input and track student grades.
- **Reports Generation**: Generate reports on student performance and class statistics.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB (v4.0.0 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Hashara13/ClassAdministration-Application.git
   ```

2. Navigate to the project directory:
   ```
   cd TutionClass
   ```

3. Install server dependencies:
   ```
   npm install
   ```

4. Navigate to the client directory and install frontend dependencies:
   ```
   cd client
   npm install
   ```

5. Create a `.env` file in the root directory and add your MongoDB connection string and JWT secret:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

## Running the Application

1. Start the server (from the root directory):
   ```
   npm run server
   ```

2. In a separate terminal, start the client (from the client directory):
   ```
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to access the application.


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For any queries or support, please contact [Your Name] at [hnethmin13l@gmail.com].
