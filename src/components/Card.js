import React from 'react';

const Card = ({ name, email, id, imageUrl, city }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img
        style={{ width: '200px', height: '200px' }}
        alt='EventOrganizers' src={imageUrl} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>City: {city}</p>
      </div>
    </div>
  );
}

export default Card;
