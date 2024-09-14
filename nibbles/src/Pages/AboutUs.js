import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const teamMembers = [
    { name: 'John Doe', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Jane Smith', bio: 'Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.' },
    { name: 'Emily Davis', bio: 'In condimentum facilisis porta. Sed nec diam eu diam mattis viverra.' },
    { name: 'Michael Johnson', bio: 'Ut placerat orci nulla, id scelerisque dolor facilisis eget.' },
  ];

  return (
    <div className="about-us-container">
      <h1 className="about-us-title">Who are we?</h1>
      <p className="about-us-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <h2 className="meet-the-team-title">Meet the Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="member-image">
              <img src="" alt={`${member.name}`} className="image-placeholder"/>
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
