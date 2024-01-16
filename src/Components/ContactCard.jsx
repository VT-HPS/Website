import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import axios from "axios";

/**
 * Creates a contact card component that is used within the membership page. 
 * The component is filled out by users who are interested in joining the HPS team. 
 * They can fill out their name, email, phone number, graduation year, major, and interests.
 * The form is submitted and handled by the backend. 
 */


/**
 * Initiates the ContactCard object with empty fields
 * and submitted = false
 */
const ContactCard = () => {
    const [contactInfo, setContactInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        gradYear: '',
        major: '',
        interests: '',
        submitted: false
    });

/**
 * When the contact card fields are typed into / changed, the 
 * new value is set and displayed.
 */ 
const handleChange = (e) => {
    setContactInfo({
        ...contactInfo, 
        [e.target.id]: e.target.value 
    });
}

/**
 * When the contact card grad field, which is a drop down menu,
 * is changed, the new value is set and displayed.
 */
const handleDropdownChange = (e) => {
    setContactInfo({
        ...contactInfo,
        gradYear: e.target.value
    });
}

/**
 * Handles the submit functionality by sending the information to the backend 
 * using axios.
 */
const handleSubmit = (e) => {
    e.preventDefault();
    setContactInfo({ ...contactInfo, submitted: true}); //say that the form is submitted
    console.log({...contactInfo})    
    
    try {
        const response = axios.post('http://localhost:5000/api/team', {
        // Last Name of member
        lastName: contactInfo.lastName,
        // First Name of member
        firstName: contactInfo.firstName,
        // Email
        email: contactInfo.email,
        // Phone Number
        phoneNumber: contactInfo.phoneNumber,
        // Graduation Year
        gradYear: contactInfo.gradYear,
        //Major
        major: contactInfo.major,
        // interests
        interests: contactInfo.interests,
        //existing member?
        existingMember: false,
    });

        console.log ('Success:', response.data);
    }
    catch (error) {
        console.error('Error:', error.message);
    }
    try {
        const response = axios.post('http://localhost:5000/api/email', {
            subject: contactInfo.firstName + ' ' + contactInfo.lastName + ' is interested in joining HPS!',
            text: contactInfo.firstName + ' ' + contactInfo.lastName + ' is interested in joining HPS! Their email is ' +
            contactInfo.email + ' and their phone number is ' + contactInfo.phoneNumber
        });

        console.log ('Success:', response.data);
    }
    catch (error) {
        console.error('Error:', error.message);
    }


}
    
    return (
        <div> 
            {contactInfo.submitted ? ( //If the form is submitted, display this text
                <div>
                    <h1 className="text-center"> Thank you for your interest in HPS {contactInfo.firstName}! One of our current members will be in contact with you soon!</h1>
                </div>    
            ) : (
            <Form onSubmit={handleSubmit}> 
                <Container className="contact_form_container" >
                    <div>
                        <h2 className="contact_title">Contact Info</h2>
                    </div>
                    <Row className="mb-3">
                        <Col> <h6>First Name</h6>
                            <input // Input box for changing firstName
                                type="text"
                                id = "firstName"
                                value={contactInfo.firstName}
                                className="contact_info_form_short_box"
                                onChange={handleChange}
                                required //field is required
                            />
                        </Col>
                        <Col> <h6>Last Name</h6>
                            <input // Input box for changing lastName
                                type="text"
                                id = "lastName"
                                value={contactInfo.lastName}
                                className="contact_info_form_short_box"
                                onChange={handleChange}
                                required //field is required
                            />
                        </Col>
                    </Row>
                    
                    <Row className="mb-3"> 
                        <Col> <h6>Email</h6>
                            <input // Input box for changing email
                                type="text"
                                id = "email"
                                value={contactInfo.email}
                                className="contact_info_form_short_box"
                                onChange={handleChange}
                                required //field is required
                            />
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col> <h6>Phone Number</h6>
                            <input // Input box for changing lastName
                                type="tel"
                                id = "phoneNumber"
                                value={contactInfo.phoneNumber}
                                className="contact_info_form_short_box"
                                onChange={handleChange}
                                required //field is required
                            />
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col> <h6>Graduation Year</h6>
                            <select // Input box for changing lastName
                                id = "year"
                                value={contactInfo.gradYear}
                                className="contact_info_form_short_box"
                                onChange={handleDropdownChange}
                                required //field is required
                            >
                                <option value="">Select Year</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                            </select>
                        </Col>
                        <Col> <h6>Major</h6>
                            <input // Input box for changing lastName
                            type="text"
                            id = "major"
                            value={contactInfo.major}
                            className="contact_info_form_short_box"
                            onChange={handleChange}
                            required //field is required
                            />
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col> <h6>Interests</h6>
                            <textarea // Input box for changing lastName
                                id = "interests"
                                value={contactInfo.interests}
                                className="contact_info_form_large_box"
                                onChange={handleChange}
                                required //field is required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <button className = "contact_submit_button" type = "submit">Submit Contact Info  </button>
                        </Col>
                    </Row>
                </Container>
            </Form>
            )}
        </div>
    );
    
}

export default ContactCard;