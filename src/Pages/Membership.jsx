import React from "react";
import ContactCard from "../Components/ContactCard";
import Stack from 'react-bootstrap/Stack';

/**
 * Creates the membershiop page which asks the user to fill out a form if they are interested
 * in joining the team. The form is created using the ContactCard Component.
 */
const Membership = () => {
    return (
        <body>
            <div className="membership_main_container">
                <div className="membership_left">
                <Stack gap={2} >
                    <h1 className= "centered_text">Interested in joining HPS at VT?</h1>
                    <h3 className= "centered_text">HPS at VT accepts students of all techincal disciplines and grade levels. 
                    If you are interested in joining the team, please fill out the contact info form. 
                    Alternatively, come find us in basement of the Ware Lab to learn more!</h3>
                </Stack>
                </div>
                <div className="membership_right">
                    <ContactCard />
                </div>
            </div>
        </body>
        
    );
}

export default Membership;