import Faq from "react-faq-component";

const FAQ = () => {
    const data = {
        title: "FAQ (Sub Questions)",
        rows: [
            {
                title: "What is Human Powered Submarine (HPS)?",
                content: `Human Powered Submarine is a design team competition that challenges participants to build a manned submarine that is fully flooded that can 
                navigate a basin for 100 meters while being fully powered by a human inside of the rigid sub body.`,
            },
            {
                title: "Is the submarine pressurized? How deep can it go?",
                content: `The submarine is not pressurized and is instead fully-flooded meaning all of the material inside of the submarine needs to be waterproof. The 
                submarine is raced at about 15-20 feet of depth but has been tested at up to 30ft deep before.`,
            },
            {
                title: "Why do we make the sub? Doesn't it being full of water defeat the purpose?",
                content: `The sub is made to compete! The HPS competition was designed by the Navy and Foundation for Underwater Research and Education (FURE) to teach young engineers about maritime engineering
                and ship design. The sub being flooded is for safety and to fit within the competition guidelines, since a pressurized sub has more points of failure and opportunities for injuries among the support divers and pilots.`,
            },
            {
                title: "How often and where are the Internation Submarine Races held?",
                content: `Every 2 years at Naval Surface Warfare Center, Carderock Division in Bethesda, Maryland.`,
            },
            {
                title: "What is the competition and how are the subs judged?",
                content: `The competititon is a 100 meter long drag race in a 22 foot deep basin. The subs are judged on various categories including design, innovations, and speed. 
                Speed is the top category, with the fastest sub winning for each category and the fastest sub overall winning as well.`,
            },
            {
                title: "What divisions are there on the team? Can I do HPS for senior design?",
                content: `The subteams are Controls, Electronics, Hydro, and Structures. Each subteam is responbile for a 
                different part of the submarine design, and they integrate their parts with other subteams as the submarine is designed
                and completed. HPS also has an interdisciplinary senior design team as of Fall 2023, which means a multitude of engineering majors can participate in an HPS capstone project`,
            },
            {
                title: "When does the team recruit new members?",
                content: `Every Fall and Spring at the start of the semester, the team posts the application to this website in the 
                Membership tab. After the applications are completed, applicatants are interviewed and given a opportunity to join the 
                team if leadership thinks they will be a good fit.`,
            },
            {
                title: "How long has the team been active?",
                content: `The Human Powered Submarine Team at Virginia Tech has been active since 1991! They competed for the first time
                at ISR 3 in 1993.`,
            },
            {
                title: "Can I get SCUBA certified if I join the team?",
                content: `Yes, after being on the team for at least one semester, any memeber that would like to can get SCUBA ceritified with the team through our local 
                connections.`,
            },
            {
                title: "How heavy is the submarine?",
                content: `When the sub is just a shell, it weighs roughly 15-20 pounds, but with all of the internal systems, the sub is about 80-100 pounds on land. However,
                it is neutrally buoyant when in the water to allow for free movement of the sub.`,
            },
        ],
    };

    const styles = {
        bgColor: 'white',
        titleTextColor: "black",
        rowTitleColor: "maroon",
        rowContentColor: "maroon",
        // arrowColor: "red",
        // titleTextSize: '48px',
        // rowTitleTextSize: 'medium',
        rowContentTextSize: '30px',
        // rowContentPaddingTop: '10px',
        rowContentPaddingBottom: '10px',
        rowContentPaddingLeft: '50px',
        // rowContentPaddingRight: '150px',
        //transitionDuration: "1s",
        // timingFunc: "ease"
    };

    const config = {
        animate: true,
        arrowIcon: "V",
        expandIcon: "+",
        collapseIcon: "-",
        tabFocus: true,
    };

    return (

        <div className="main_page_container">
            <h1 className="page_title">
                <div>Frequently Asked Questions</div>
            </h1>
            <div className="faq-style-wrapper">
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div>
        </div>
    );
}

export default FAQ;