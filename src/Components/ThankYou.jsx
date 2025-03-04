import React from 'react';
import './ThankYou.css'; // Import the CSS file
import jawedKarim from "../assets/jawedKarim.png";// Adjust the path accordingly

const ThankYou = () => {
    return (
        <div className="thank-you-container">
            <img src={jawedKarim} className="profile-photo" alt="Jawed Karim" />
            <p className="thank-you-text">Thank You Jawed Karim for building YouTube Platform</p>
        </div>
    );
}

export default ThankYou;
