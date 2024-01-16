import React from "react";
import questions from "../Faq.json";
import Banner from "../Banner";

/**
 * Creates the FAQ page, which contains several expandable "questions" that correspond with answers.
 * The questions and answers are stored in a json file called "Faq.json" for easy editability. 
 */
const FAQ = () => {
    return (
        <div className="main_page_container">
            <h1>
                <Banner>
                    <Banner.Header>Frequently Asked Questions</Banner.Header>
                    {questions.map((question) => (
                        <Banner.Entity key={question.id}>
                            <Banner.Question>{question.question}</Banner.Question>
                            <Banner.Text>{question.answer}</Banner.Text>
                        </Banner.Entity>
                    ))}
                    <h4>
                        Question not on the list? Contact our team at hps@vt.edu
                    </h4>
                </Banner>
            </h1>
        </div>
    )
}

export default FAQ;
