Hospital COVID-19 API:
This project is an API designed for doctors working in a hospital allocated by the government for COVID-19 patient testing, quarantine, and well-being. It provides essential functionalities for both doctors and patients.

Features:
Authentication: Doctors can register and log in securely to access the system.
Patient Registration: Doctors can register patients using their phone numbers, retrieving existing patient information if already registered.
Report Creation: Doctors can create reports for patients after check-ups, including details such as status and date.
Patient Report Management: Patients can view all their reports, and doctors can filter reports by status.



Routes:
/doctors/register: Register a new doctor with a username and password.
/doctors/login: Authenticate and receive a JSON Web Token (JWT) for accessing protected routes.
/patients/register: Register a new patient with essential details.
/patients/:id/create_report: Create a report for a specific patient after a check-up.
/patients/:id/all_reports: View all reports of a patient sorted from oldest to latest.
/reports/:status: List all reports of all patients filtered by a specific status.

Authentication:
Routes requiring authentication are protected using JSON Web Tokens (JWT), ensuring secure access to sensitive functionalities.

Technologies Used:
Node.js
Express.js
MongoDB
Mongoose
JSON Web Tokens (JWT)