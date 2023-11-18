import React from 'react';

const About = ({ imageSrc = 'https://via.placeholder.com/215', altText = 'blog logo', aboutText }) => {
  return (
    <aside>
      <img src={imageSrc} alt={altText} />
      <p>{aboutText}</p>
    </aside>
  );
};

export default About;