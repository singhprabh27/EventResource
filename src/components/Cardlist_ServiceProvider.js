import React from 'react';
import Card_ServiceProvider from './Card_ServiceProvider';

const CardList_ServiceProvider = ({ organizers, onRouteChange }) => {
    return (
        <div>
            {
                organizers.map((organizer) => (
                    <Card_ServiceProvider
                        onRouteChange={onRouteChange}
                        key={organizer.serviceproviderid}
                        id={organizer.serviceproviderid}
                        name={organizer.name}
                        servicetype={organizer.servicetype}
                        imageUrl={organizer.image_url}
                        city={organizer.city}
                    />
                ))
            }
        </div>
    );
}

export default CardList_ServiceProvider;
