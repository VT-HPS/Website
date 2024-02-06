import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="page-not-found-container">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for might be in another castle.</p>
            <Link to="/">Go to Home</Link>
        </div>
    )
}
export default NotFound;