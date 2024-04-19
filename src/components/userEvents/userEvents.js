import React, { Component } from 'react';

class UserEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            loading: true
        };
    }

    componentDidMount() {
        // Fetch events associated with the user from the database
        this.fetchUserEvents();
    }

    fetchUserEvents = async () => {
        const { userid } = this.props;

        try {
            const response = await fetch(`https://eventresourcebackend.onrender.com/UserEvents/${userid}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user events');
            }
            const events = await response.json();
            this.setState({ events, loading: false });
        } catch (error) {
            console.error('Error fetching user events:', error);
            this.setState({ loading: false });
        }
    };

    render() {
        const { events, loading } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div className='w-100'>
                <div className="pa3">
                    <h2 className="mt4 mb2">{`Events of ${this.props.userName}`}</h2>
                    {events.length === 0 ? (
                        <p>No events found.</p>
                    ) : (
                        <div className="">
                            {events.map((event, index) => (
                                <div key={index} className="bg-white-80 pa3 mb3 mr3 w-100 w-100-m w-100-l flex">
                                    <div className="w-50">
                                        <p className="f4">Event Name: {event.eventname}</p>
                                        <p className="f5">Event Type: {event.eventtype}</p>
                                        <p className="f5">Event Date: {event.eventdate}</p>
                                        <p className="f5">Location: {event.location}</p>
                                        <p className="f5">Total Guests: {event.totalguests}</p>
                                        <p className="f5">Cuisine Preferences: {event.cuisinepreferences}</p>
                                        <p className="f5">Decoration Theme: {event.decorationtheme}</p>
                                        <p className="f5">Entertainment Preferences: {event.entertainmentpreferences}</p>

                                    </div>
                                    <div className="w-50">
                                        <p className="f5">ID:{event.photographer_id ? event.photographer_id : 'No'}, Photographer: {event.photographer_name ? event.photographer_name : 'No'}</p>
                                        <p className="f5">ID:{event.decorator_id ? event.decorator_id : 'No'}, Decorator: {event.decorator_name ? event.decorator_name : 'No'}</p>
                                        <p className="f5">ID:{event.caterer_id ? event.caterer_id : 'No'}, Caterer: {event.caterer_name ? event.caterer_name : 'No'}</p>
                                        <p className="f5">ID:{event.florist_id ? event.florist_id : 'No'}, Florist: {event.florist_name ? event.florist_name : 'No'}</p>
                                        <p className="f5">ID:{event.baker_id ? event.baker_id : 'No'}, Baker: {event.baker_name ? event.baker_name : 'No'}</p>
                                    </div>


                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>

        );
    }
}

export default UserEvents;
