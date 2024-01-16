/**
 * Sets up the schema and mongoose model for a team member
 */

const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
    lastName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    major: {
        type: String,
        required: true,
    },
    gradYear: {
        type: String,
        required: true,
    },
    major: {
        type: String,
        required: true,
    },
    interests: {
        type: String,
        required: true,
    },    
    existingMember : {
        type: Boolean,
        required: true,
    }
});

//Creating a Mongoose model based on the team member schema
const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

//Exporting the Team Member for use in other parts of the application
module.exports = TeamMember;
