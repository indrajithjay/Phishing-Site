# Phishing-Site

This project is a simple login page that imitates Facebook, sourced from different open sources and designed for stricly educational purposes. 
It allows users to enter their credentials, which are then stored in an AWS RDS MySQL database. 
The application is hosted on an AWS EC2 instance and can be accessed via a custom domain.

Legal Advice
-----------------------------------------------------------------------------------------------------------------------------------------------------
**Privacy and Data Protection** : Ensure that this is not tested against any organizations. For educational purposes, avoid collecting real personal data.
**Encryption** : Always encrypt sensitive data, such as passwords, before storing it in a database.
**Consent** : Make sure to inform users that their credentials will be stored. For educational scenarios, use dummy data.
**Intellectual Property** : The use of names like "Facebook" should be avoided in production environments to prevent trademark infringement.

## Features

- User login form
- Credential storage in an AWS RDS MySQL database
- Redirection to another website after login
- Hosted on an AWS EC2 instance

## Technologies Used

- Node.js
- Express.js
- MySQL (AWS RDS)
- HTML/CSS
- AWS EC2
- PM2 (for process management)

## Setup and Installation

### Prerequisites

- Node.js and npm installed
- AWS account with access to RDS and EC2
- Domain name

- ### Step 1: Clone the Repository

- ### Step 2: Set Up AWS RDS Database
Create an RDS Instance:
Go to the RDS service in the AWS Management Console.
Click on "Create database".
Select "MySQL" as the database engine.
Choose "Free tier" if you're eligible for it.
Configure the database instance settings.
Launch the database instance and note the endpoint, username, and password.

- ### Step 3: Configure the Application
Update server.js:
Replace the database configuration with your RDS endpoint, username, and password.

```sh
const db = mysql.createConnection({
    host: 'your-rds-endpoint', // Replace with your RDS endpoint
    user: 'your-username', // Replace with your RDS username
    password: 'your-password', // Replace with your RDS password
    database: 'your-database-name' // Replace with your RDS database name
});
```

- ###  Step 4: Deploy to AWS EC2
1. Launch an EC2 Instance:

    Go to the EC2 service in the AWS Management Console.
    Click on "Launch Instance".
    Choose an Amazon Machine Image (AMI). You can use the free tier eligible Ubuntu AMI.
    Choose an instance type. The t2.micro is free tier eligible.
    Configure instance details, add storage, add tags, and configure the security group to allow HTTP (port 80) and SSH (port 22) access.
    Launch the instance and download the key pair.
   
2. SSH into Your EC2 Instance:
   ```sh
   ssh -i /path/to/your-key-pair.pem ubuntu@your-ec2-public-dns

3. Install Node.js and npm:
   ```sh
   sudo apt update
   sudo apt install nodejs np
   ```
4. Install Dependencies:
   ```sh
   npm install
5. Start the server
   ```sh
   sudo node server.js

- ###  Step 5: Keep the Server Running with PM2
1. Install PM2:
    ```sh
    sudo npm install -g pm2

2. Start the Application with PM2:
   ```sh
   pm2 start server.js
3. Save the PM2 process list
   ```sh
   pm2 save
4. Set PM2 to Start on Boot:
   ```sh
   pm2 startup systemd
   sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u ubuntu --hp /home/ubuntu
   ```

- ### Step 5 : Configure Domain Name
Configure DNS Settings:
Go to Route 53 (or your domain registrar's DNS settings).
Create a new record set for your domain to point to your EC2 instance's public IP address.

**Accessing the Application**
Once the DNS changes have propagated, you can access your application by navigating to your domain name (e.g., www.testdomain.com) in a web browser.

**Contributing**
Contributions are welcome! Please open an issue or submit a pull request for any changes.


   

   




