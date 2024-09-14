import React from 'react';
import './Ingredients.css';

const Ingredients = () => {
  const containerData = [
    { img: '', description1: 'Description: Information 1', description2: 'Description: Information 2', description3: 'Description: Information 3' },
    { img: '', description1: 'Description: Information 1', description2: 'Description: Information 2', description3: 'Description: Information 3' },
    { img: '', description1: 'Description: Information 1', description2: 'Description: Information 2', description3: 'Description: Information 3' },
    { img: '', description1: 'Description: Information 1', description2: 'Description: Information 2', description3: 'Description: Information 3' },
    { img: '', description1: 'Description: Information 1', description2: 'Description: Information 2', description3: 'Description: Information 3' },
    { img: '', description1: 'Description: Information 1', description2: 'Description: Information 2', description3: 'Description: Information 3' },
  ];

  return (
    <div className="Ingredients-container">
      <h1 className="Ingredients-title">Title</h1>
      <p className="Ingredients-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="grid-container">
        {containerData.map((item, index) => (
          <div className="content-container" key={index}>
            <img src={item.img} alt="Placeholder" className="image-placeholder" />
            <div className="description">
              <p>{item.description1}</p>
              <p>{item.description2}</p>
              <p>{item.description3}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ingredients;
