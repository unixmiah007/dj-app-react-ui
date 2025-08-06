# dj-app
dj app for Bala Kuna / RTFM

# 🎧 DJ Booking App

<img width="1920" height="984" alt="image" src="https://github.com/user-attachments/assets/218c0319-a75e-4be6-914c-12feb7fbcc99" />
<img width="1920" height="911" alt="image" src="https://github.com/user-attachments/assets/b9c0e27d-738b-4eba-9944-36745aaa2393" />

A full-stack DJ booking website with a React frontend, Express.js backend, MySQL database, and calendar integration to manage bookings and gigs.

---

## 🚀 Features

- Booking form for clients
- Interactive calendar to view past & future gigs
- Responsive Tailwind CSS styling
- MySQL database integration

---

## 🧩 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Calendar**: FullCalendar React

---

## ⚙️ Local Installation (WSL/Ubuntu)

### 1. Clone the Repository

```bash
git clone git@github.com:YOUR_USERNAME/dj-app.git
cd dj-app

cd backend
cp .env.example .env
# Edit the .env file with your MySQL credentials

npm install
npm run dev
cd ../frontend
npm install
npm start
mysql -u root -p
CREATE DATABASE dj_app;
CREATE USER 'djuser'@'localhost' IDENTIFIED BY 'YourStrongPassword123!';
GRANT ALL PRIVILEGES ON dj_app.* TO 'djuser'@'localhost';
FLUSH PRIVILEGES;

USE dj_app;

CREATE TABLE bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  date DATE,
  details TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ssh -i your-key.pem ubuntu@your-ec2-ip
sudo apt update
sudo apt install nodejs npm mysql-server
node -v
npm -v
git clone https://github.com/YOUR_USERNAME/dj-app.git
cd dj-app/backend
npm install
cp .env.example .env
# Edit .env with your server's DB config

# Start backend
npm run dev
cd ../frontend
npm install
npm run build

DB_HOST=localhost
DB_USER=djuser
DB_PASSWORD=YourStrongPassword123!
DB_NAME=dj_app
PORT=5000

npm run dev     # Start backend with nodemon for live reload
npm start       # Run frontend in development mode
npm run build   # Build production-ready frontend


