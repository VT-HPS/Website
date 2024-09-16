import React, { useState, useRef } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import './SponsorContactCard.css';

/**
 * Creates a sponsor contact card component that is used within the membership page. 
 * The component is filled out by companies who are interested in sponsoring the team. 
 * They can fill out their name, email, phone number, comapny, interest in team, and questions.
 * The form is submitted and handled by the backend. 
 */


/**
 * Initiates the SponsorContactCard object with empty fields
 * and submitted = false
 */
const SponsorContactCard = () => {
    const sponsorEmailService = "hps_contact_id"
    const sponsorEmailTemplate = "hps_sponsor_form"
    const sponsorEmailPubKey = "BKr6VZpPHUkW8CVAZ"


    const [contactInfo, setContactInfo] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        submitted: false
    });

    const form = useRef();
    const captchaRef = useRef(null);

    /**
     * When the sponsor contact card fields are typed into / changed, the 
     * new value is set and displayed.
     */
    const handleChange = (e) => {
        setContactInfo({
            ...contactInfo,
            [e.target.id]: e.target.value
        });
    }

    /**
     * Handles the submit functionality by sending the information to the emailJS and sending a email
     * to hps@vt.edu or the sponsor relations email
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
            emailjs.sendForm(sponsorEmailService, sponsorEmailTemplate, form.current, sponsorEmailPubKey)
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
                    <h1 className="text-center"> Thank you {contactInfo.firstName} for your interest in creating a sponsorship with HPS! 
                    We look forward to working with you and our sponsor relations officer will be in touch soon!</h1>
                </div>
            ) : (
                <form ref={form} onSubmit={sendEmail}>
                    <Container className="sponsor_contact_card_form_container" >
                        <div>
                            <h2 className="sponsor_contact_card_title">Sponsor Info</h2>
                        </div>
                        <Row className="mb-3">
                            <Col> <h6>First Name</h6>
                                <input // Input box for changing firstName
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={contactInfo.firstName}
                                    className="sponsor_contact_card_info_form_short_box"
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
                                    className="sponsor_contact_card_info_form_short_box"
                                    onChange={handleChange}
                                    required //field is required
                                />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col> <h6>Company</h6>
                                <input // Input box for changing company name
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={contactInfo.company}
                                    className="sponsor_contact_card_info_form_short_box"
                                    onChange={handleChange}
                                    required //field is required
                                />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col> <h6>Phone</h6>
                                <input // Input box for changing phone
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={contactInfo.phone}
                                    className="sponsor_contact_card_info_form_short_box"
                                    onChange={handleChange}
                                    required //field is required
                                />
                            </Col>
                            <Col> <h6>Email</h6>
                                <input // Input box for changing email
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={contactInfo.email}
                                    className="sponsor_contact_card_info_form_short_box"
                                    onChange={handleChange}
                                    required //field is required
                                />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col> <h6>Message</h6>
                                <textarea // Input box for changing company interest
                                    id="message"
                                    name="message"
                                    value={contactInfo.message}
                                    className="sponsor_contact_card_info_form_large_box"
                                    onChange={handleChange}
                                    required //field is required
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <button className="sponsor_contact_card_submit_button" type="submit">Submit Contact Info</button>
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

export default SponsorContactCard;