# dj-app
dj app for Bala Kuna / RTFM (https://www.brownboiblue.com)

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

How to deploy to server:

````markdown
# React + Express + MySQL App Deployment on AWS EC2

This repository contains a full-stack application with:

- React frontend
- Express.js backend API
- MySQL database

This guide explains how to deploy the app on an Amazon AWS EC2 instance running Ubuntu.

---

## Prerequisites

- An AWS account with permissions to create EC2 instances.
- AWS CLI installed (optional, for easier management).
- Basic knowledge of SSH and Linux command line.

---

## Step 1: Launch an EC2 Instance

1. Log in to your AWS Management Console.
2. Navigate to **EC2 > Instances > Launch Instances**.
3. Choose **Ubuntu Server 22.04 LTS** (or latest LTS).
4. Select an instance type (e.g., t2.micro for testing).
5. Configure instance details (default settings are usually fine).
6. Add storage (default 8 GB is fine).
7. Configure security group:
   - Add rule to allow HTTP (port 80).
   - Add rule to allow HTTPS (port 443) if needed.
   - Add rule to allow custom TCP port 5000 (or your backend port).
   - Add SSH rule (port 22) to your IP for access.
8. Review and launch.
9. Download your key pair (`.pem` file) to SSH into your server.

---

## Step 2: SSH Into Your EC2 Instance

```bash
chmod 400 your-key.pem
ssh -i your-key.pem ubuntu@your-ec2-public-ip
````

---

## Step 3: Install Node.js, npm, and MySQL

Update and install dependencies:

```bash
sudo apt update && sudo apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs mysql-server
```

Check versions:

```bash
node -v
npm -v
mysql --version
```

---

## Step 4: Secure and Configure MySQL

Start MySQL server:

```bash
sudo service mysql start
```

Run secure installation:

```bash
sudo mysql_secure_installation
```

Create your database and user:

```bash
sudo mysql -u root -p

CREATE DATABASE user_app;
CREATE USER 'appuser'@'localhost' IDENTIFIED BY 'your_strong_password';
GRANT ALL PRIVILEGES ON user_app.* TO 'appuser'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

---

## Step 5: Upload Your App Code to EC2

You can use `scp` or Git.

Example with `scp`:

```bash
scp -i your-key.pem -r ./your-app-folder ubuntu@your-ec2-public-ip:~/app
```

Or clone directly on the server if using Git:

```bash
git clone https://github.com/yourusername/yourrepo.git
cd yourrepo
```

---

## Step 6: Install Dependencies & Configure Backend

Navigate to your backend folder and install:

```bash
cd app/backend
npm install
```

Set environment variables (create a `.env` file or export variables):

```bash
export DB_HOST=localhost
export DB_USER=appuser
export DB_PASS=your_strong_password
export DB_NAME=user_app
export PORT=5000
```

---

## Step 7: Start Backend Server

You can run with:

```bash
node index.js
```

Or use **pm2** for production:

```bash
sudo npm install -g pm2
pm2 start index.js --name backend
pm2 startup
pm2 save
```

---

## Step 8: Build and Serve React Frontend

In another terminal or SSH session:

```bash
cd app/frontend
npm install
npm run build
```

Serve React production build using a static server:

```bash
npm install -g serve
serve -s build -l 3000
```

Alternatively, configure **Nginx** to serve the React app (recommended for production).

---

## Step 9: Configure Nginx (Optional but Recommended)

Install Nginx:

```bash
sudo apt install nginx
```

Edit default config:

```bash
sudo nano /etc/nginx/sites-available/default
```

Example config snippet:

```nginx
server {
  listen 80;

  server_name your-domain-or-ip;

  location / {
    root /home/ubuntu/app/frontend/build;
    index index.html index.htm;
    try_files $uri /index.html;
  }

  location /api/ {
    proxy_pass http://localhost:5000/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

Restart Nginx:

```bash
sudo systemctl restart nginx
```

---

## Step 10: Access Your App

* Visit `http://your-ec2-public-ip` to see your React frontend.
* React frontend will proxy API calls to backend.
* Backend connects to MySQL database.

---

## Troubleshooting

* Make sure your security group allows necessary ports.
* Check backend logs with `pm2 logs backend` or `node index.js`.
* Verify MySQL is running and credentials are correct.
* Use `curl http://localhost:5000` on the server to test backend.

---

## Additional Tips

* Use a domain name with Route53 for better access.
* Set up HTTPS with Let's Encrypt.
* Use environment variables or a config file for secrets.
* Automate deployment with scripts or CI/CD tools.

---

## License

MIT License
