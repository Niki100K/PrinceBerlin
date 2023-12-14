import React from 'react';
import './PropertyImages.css'

import PropertyJS from '../../hooks/Property';

const PropertyImages = () => {

  const { propertyImages } = PropertyJS()

  return (
    <div className='PropertyImages'>
      <div className='images'>
        {propertyImages.map((image, index) => (
          <img key={index} src={image.image} alt={`Property ${image.id}`} />
        ))}
      </div>
    </div>
  );
};

export default PropertyImages;
