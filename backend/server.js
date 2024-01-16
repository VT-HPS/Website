/**
 * This file creates the server for our backend. The current backend functionality includes a database to populate
 * the Team Member page and a database that stores responses to the Membership page interest form. 
 */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TeamMember = require('./teamMember');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/HPSwebsite', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

/**
 * Endpoint to get all the team members
 */
app.get('/api/team', async (req, res) => {
    try {
        const allTeamMembers = await TeamMember.find();
        res.json(allTeamMembers);
    } 
    catch (err) {
        console.error("Unable to get team members, here is the error:", err);
        res.status(500).json({ error: err.message})
    }
});

/**
 * Endpoint to add anew team member
 */
app.post('/api/team', async (req, res) => {
    try {
        //save the new team member to the database
        const newTeamMember = new TeamMember(req.body);
        await newTeamMember.save();
        res.status(201).json(newTeamMember);
    }
     catch (err) {
        console.error("Unable to post team members, here is the error:", err);
        res.status(500).json({error: err.message}) 
    }


});

/**
 * Endpoint to send an email
 */
app.post('/api/email', async (req, res) => {
    //create a transporter to send an email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: 'bubbles6602@gmail.com',
        pass: 'aqqe ypra jvui nvtl',
        },
    });

    //get the subject and text from the form
    const {subject , text} = req.body;
    //set the content of the email
    const mailOptions = {
        from: 'bubbles6602@gmail.com',
        to: 'caitlyns@vt.edu',
        subject: subject,
        text: text
    };

    try{
        //send an email saying there is a new member interested
        const email = await transporter.sendMail(mailOptions);
        console.log('Email Sent:', email.response);
        res.status(200).json({ message: 'Email sent successfully' });
    }
    catch (error) {
        console.error('Error when sending email:', error);
        res.status(500).json({ error: 'error when sending email ' + error.message });
    }
});

/**
 * Endpoint to update an existing team member.
 * This route handler will be called when a PUT request is made to '/api/experiences/:id'.
 */
app.put('/api/team:id', async (req, res) => {
    try {
        const teamMemberId = req.params.id;
        const teamMemberToUpdate = await TeamMember.findOneAndUpdate({id: teamMemberId}, req.body, {new: true});

        if (!teamMemberToUpdate) 
        {
            return res.status(404).json({error: 'There is no team member with that ID' });
        }
        res.json({ message: 'Team member has been updated'})
    } 
    catch (err) {
        console.error("Unable to update team members, here is the error:", err);
        res.status(500).json({error: err.message})     
    }
});

/**
 * Endpoint to delete an existing team member.
 */
app.delete('/api/team:id', async (req, res) => {
    try {
        const teamMemberId = req.params.id;
        const teamMemberToDelete = await TeamMember.findByIdAndDelete(teamMemberId);
        if (!teamMemberToDelete) 
        {
            return res.status(404).json({error: 'There is no team member with that ID' });
        }
        res.json({ message: 'Team member has been deleted'})
    } 
    catch (err) {    
        res.status(500).json({error: err.message}) 
    }
});

/**
 * Starts the server
 */
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
