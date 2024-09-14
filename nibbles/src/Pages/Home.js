import React from 'react';
import './Home.css';
import Kitchen from '../Images/BackgroundImage.png';

const Home = () => {
    return (
        <div className="content-container">
            <div className="main-content" style={{ backgroundImage: `url(${Kitchen})` }}>
                <div className="overlay">
                    <h1>Nibbles</h1>
                    <h3>Your Fridge, Your Menu, Simplified</h3>
                </div>
                <div className="button-container"> {/* New button container outside the overlay */}
                    <button className="get-started-btn">Get Started</button>
                </div>
            </div>
            <div className="text-content">
                <h1>What is Nibbles?</h1>
                <p>At Nibbles, our mission is to simplify cooking and grocery management for university students, helping them make the most of their limited time and resources. We understand the challenges that come with balancing academics, social life, and healthy eating, so we’re dedicated to offering a smart solution. Using our innovative hardware, Nibbles tracks the quantities of ingredients students have on hand, allowing us to generate personalized recipes based on what’s available. As ingredients begin to run low, we automatically create a shopping list, ensuring students are always prepared for their next meal. Our goal is to make cooking stress-free and efficient, empowering students to eat well without the hassle of meal planning or grocery shopping.</p>
            </div>
        </div>
    );
}

export default Home;
