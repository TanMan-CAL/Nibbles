import React from 'react';
import './Recipies.css';

const Recipies = () => {
  const containerData = [
    { title: 'Title 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', img: '' },
    { title: 'Title 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img: '' },
    { title: 'Title 3', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', img: '' },
  ];

  return (
    <div className="recipie-container">
      <h1 className="recipie-title">Title</h1>
      {containerData.map((item, index) => (
        <div className="content-container" key={index}>
          <div className="image-container">
            <img src={item.img} alt={item.title} className="image-placeholder" />
          </div>
          <div className="content-details">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button className="content-button">Button</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipies;
