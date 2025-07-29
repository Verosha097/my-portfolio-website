/* File: backend/server.js */

// 1. Import necessary packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const sgMail = require('@sendgrid/mail'); // Import SendGrid Mail
require('dotenv').config();

// 2. Initialize Express App
const app = express();
const PORT = process.env.PORT || 5000;

// 3. Use Middleware
app.use(cors());
app.use(express.json());

// 4. Connect to MongoDB Database
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI)
.then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
}).catch((error) => {
    console.error("Database connection error:", error);
});

// 5. Setup SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


// 6. Define Data Structure (Schema) and Model
const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    technologies: [String],
});
const Project = mongoose.model('Project', projectSchema);

const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema);


// 7. Define API Routes (Endpoints)

// GET Route to fetch all projects
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: "Error fetching projects", error: error });
    }
});

// POST Route to receive a contact message AND send an email via SendGrid
app.post('/api/contact', async (req, res) => {
    try {
        // First, save the message to the database
        const newMessage = new Message({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        });
        await newMessage.save();

        // Second, prepare the email message for SendGrid
        const msg = {
            to: process.env.SENDER_EMAIL_ADDRESS,       // The email you will receive the message
            from: process.env.SENDER_EMAIL_ADDRESS,     // The email you verified with SendGrid
            replyTo: req.body.email,                    // *** THIS IS THE IMPORTANT PART ***
            subject: `New Portfolio Message from ${req.body.name}`,
            html: `
                <h3>You have a new contact message!</h3>
                <p><strong>Name:</strong> ${req.body.name}</p>
                <p><strong>Email:</strong> ${req.body.email}</p>
                <hr>
                <p><strong>Message:</strong></p>
                <p>${req.body.message}</p>
            `
        };

        // Third, send the email using SendGrid
        await sgMail.send(msg);
        console.log('Email sent successfully via SendGrid!');

        // Finally, send a success response to the frontend
        res.status(201).json({ message: "Message sent successfully" });

    } catch (error) {
        console.error('Error in contact route:', error.response ? error.response.body : error);
        res.status(500).json({ message: "Error processing your request" });
    }
});

// 8. Start the Server
app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});
