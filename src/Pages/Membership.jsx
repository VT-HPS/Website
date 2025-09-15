import React from "react";
import ContactCard from "../Components/ContactCard/ContactCard";
import Stack from 'react-bootstrap/Stack';

/**
 * Creates the membership page which asks the user to fill out a form if they are interested
 * in joining the team. The form is created using the ContactCard Component.
 */
const Membership = () => {
    return (
        <div className="membership_main_container">
            <div className="membership_left">
            <Stack gap={2} >
                <h1 className= "membership_centered_text">Interested in joining HPS at VT?</h1>
                <h3 className= "membership_centered_text">HPS at VT accepts students of all technical disciplines and grade levels. 
                If you are interested in joining the team, please fill out the contact info form. 
                Alternatively, come find us in basement of the Ware Lab to learn more!</h3>
                <br/>
                <h3 className="membership_centered_text">The application deadline has passed for this semester. 
                Thank you for showing interest in our team. The link to applications will be posted here early next semester.</h3>
                {/* <h3 className="membership_centered_text">Thank you for showing interest in our team. Please click 
                <a href="https://forms.gle/3h5SjNYNZPXeve2fA" target="_blank"> here </a> to access the application. The application closes on 
                Friday, September 12, 2025 at 11:59pm. If you have any questions regarding joining us, please contact us at hps@vt.edu.</h3>
                <h3 className="membership_centered_text"> If the link above does not work here is the full link:  
                <a href="https://forms.gle/3h5SjNYNZPXeve2fA" target="_blank"> https://forms.gle/3h5SjNYNZPXeve2fA</a></h3> */}
            </Stack>
            </div>
            <div className="membership_right">
                <ContactCard />
            </div>
        </div>
    );
}

export default Membership;