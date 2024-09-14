import React from 'react';
import './AboutUs.css';

// Import the images directly
import OmarImage from '../Images/Omar.png';
import TanmayImage from '../Images/Tanmay.png';

const AboutUs = () => {
  const teamMembers = [
    { name: 'Omar Elgazzar', bio: '1st year Mechatronics Student @ University of Waterloo', image: OmarImage },
    { name: 'Nihar Sheth', bio: '1st year Mechatronics Student @ University of Waterloo', image: OmarImage },
    { name: 'Tanmay Shah', bio: '1st year Software Student @ University of Waterloo', image: TanmayImage },
    { name: 'Aaron Kang', bio: '12th Grade Student @ Lord Byng Secondary School', image: OmarImage },
  ];

  return (
    <div className="about-us-container">
      <h1 className="about-us-title">Who are we?</h1>
      <p className="about-us-description">
        Nibbles is committed to providing you with viable and nutritious dishes based on what you have in store! Meet the team that works hard behind the scenes!
      </p>
      <h2 className="meet-the-team-title">Meet the Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="member-image">
              <img 
                src={member.image} 
                alt={`${member.name}`} 
                className="image-placeholder"
              />
            </div>
            <div className="member-info">
              <h2>{member.name}</h2>
              <p>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
