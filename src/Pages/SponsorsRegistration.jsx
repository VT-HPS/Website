import Stack from 'react-bootstrap/Stack';
import SponsorContactCard from "../Components/SponsorContactCard/SponsorContactCard";

/**
 * Creates the sponsors page which displays a grid of SponsorCard components, which is simply
 * images of the team's sponsor logos.The sponsor information is loaded from a json called "sponsor_infos.json"
 */
const SponsorRegistration = () => {

    return (
        <div className="sponsor_reg_main_container">
            <div className="sponsor_reg_left">
                <Stack gap={2} >
                    <h1 className="sponsor_reg_centered_text">Become a HPS Sponsor</h1>
                    <h4 className="sponsor_reg_centered_text">Human Powered Submarine at Virginia Tech is a student-led design team
                        that designs, builds, tests, and races a free-floating submarine to race at the competition hosted by the
                        International Submarine Races Organization at NAVSEA's Carderock Division in Bethesda, Maryland.
                        We operate on a 2-year design/build cycle. The team is planning to bring a new submarine to the next
                        competition in June 2025.</h4><br />
                    <h4 className="sponsor_reg_centered_text">As an undergraduate team, we rely on sponsorships to operate,
                        compete, and excel in the work that we complete--and your investment in our team would enable us to grow and
                        learn skills that would otherwise be nearly impossible to learn. Any sponsorship donations would be tax deductible
                        as our team is a nonprofit organization.</h4><br />
                    <h4 className="sponsor_reg_centered_text">Please fill out this form with any questions or for more information
                        on how to become a sponsor!</h4>
                </Stack>
            </div>
            <div className="sponsor_reg_right">
                <SponsorContactCard />
            </div>
        </div>
    )
}

export default SponsorRegistration;