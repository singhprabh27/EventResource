import React from 'react';
import Card from './Card';

const CardList = ({ organizers }) => {
  return (
    <div>
      {
        organizers.map((user, i) => {
          return (
            <Card
              key={i}
              id={organizers[i].id}
              name={organizers[i].name}
              email={organizers[i].email}
              imageUrl={organizers[i].image_url}
              city= {organizers[i].city}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;