import React, { useState, useRef } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import './ContactCard.css';

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
    // This needs to be updated to noreplyvthps@gmail.com's account
    const membershipEmailService = "hps_contact_service"
    const membershipEmailTemplate = "hps_contact_form"
    const membershipEmailPubKey = "A-bfzMnIjPCSesPQ8"


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

    const form = useRef();
    const captchaRef = useRef();

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
     * Handles the submit functionality by sending the information to the emailJS and sending a email
     * to hps@vt.edu
     */
    const sendEmail = (e) => {
        e.preventDefault();

        const captchaValue = captchaRef.current.getValue();
        if (!captchaValue) {
            alert("Please verify the reCAPTCHA!");
        } else {
            // make form submission
            setContactInfo({ ...contactInfo, submitted: true }); //say that the form is submitted
            console.log({ ...contactInfo })
            emailjs.sendForm(membershipEmailService, membershipEmailTemplate, form.current, membershipEmailPubKey) 
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        };
    }

    return (
        <div>
            {contactInfo.submitted ? ( //If the form is submitted, display this text
                <div>
                    <h1 className="text-center"> Thank you for your interest in HPS {contactInfo.firstName}! One of our current members will be in contact with you soon!</h1>
                </div>
            ) : (
                <form ref={form} onSubmit={sendEmail}>
                    <Container className="contactcard_form_container" >
                        <div>
                            <h2 className="contactcard_title">Contact Info</h2>
                        </div>
                        <Row className="mb-3">
                            <Col> <h6>First Name</h6>
                                <input // Input box for changing firstName
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={contactInfo.firstName}
                                    className="contactcard_info_form_short_box"
                                    onChange={handleChange}
                                    required //field is required
                                />
                            </Col>
                            <Col> <h6>Last Name</h6>
                                <input // Input box for changing lastName
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={contactInfo.lastName}
                                    className="contactcard_info_form_short_box"
                                    onChange={handleChange}
                                    required //field is required
                                />
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col> <h6>Email</h6>
                                <input // Input box for changing email
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={contactInfo.email}
                                    className="contactcard_info_form_short_box"
                                    onChange={handleChange}
                                    required //field is required
                                />
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col> <h6>Phone Number</h6>
                                <input // Input box for changing lastName
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={contactInfo.phone}
                                    className="contactcard_info_form_short_box"
                                    onChange={handleChange}
                                    required //field is required
                                />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col> <h6>Graduation Year</h6>
                                <select // Input box for changing lastName
                                    id="grad"
                                    name="grad"
                                    value={contactInfo.grad}
                                    className="contactcard_info_form_short_box"
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
                                    id="major"
                                    name="major"
                                    value={contactInfo.major}
                                    className="contactcard_info_form_short_box"
                                    onChange={handleChange}
                                    required //field is required
                                />
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col> <h6>Interests</h6>
                                <textarea // Input box for changing lastName
                                    id="interests"
                                    name="interests"
                                    value={contactInfo.interests}
                                    className="contactcard_info_form_large_box"
                                    onChange={handleChange}
                                    required //field is required
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <button className="contactcard_submit_button" type="submit">Submit Contact Info  </button>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} ref={captchaRef} />
                            </Col>
                        </Row>
                    </Container>
                </form>
            )}
        </div>
    );

}

export default ContactCard;