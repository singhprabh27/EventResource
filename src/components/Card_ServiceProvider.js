
// export default Card_ServiceProvider;
import React, { Component } from 'react';

class Card_ServiceProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false,
            serviceProvider: ''

        };
    }
    componentDidMount() {
        // Fetch service provider data with the given ID
        fetch(`http://localhost:3000/Card_ServiceProvider/${this.props.id}`)
            .then(response => response.json())
            .then(serviceProvider => this.setState({ serviceProvider: serviceProvider }))
            .catch(error => console.error('Error fetching service provider:', error));
    }
    // Function to toggle detailed information
    toggleDetails = () => {
        this.setState(prevState => ({
            showDetails: !prevState.showDetails
        }));
    };

    render() {
        const { name, servicetype, id, imageUrl, city, onRouteChange } = this.props;
        const { showDetails } = this.state;
        const { serviceProvider } = this.state;
        const { description, phone, email, rating } = serviceProvider;

        return (
            <div onClick={this.toggleDetails} className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
                <img
                    style={{ width: '200px', height: '200px' }}
                    alt='ServiceProvider' src={imageUrl} />
                <div>
                    <h2>{name}</h2>
                    <p>{servicetype}</p>
                    <p>City: {city}</p>
                    {showDetails && (
                        <div>
                            <p>ID: {id}</p>
                            <p>description: {description}</p>
                            <p>email: {email}</p>
                            <p>phone: {phone}</p>
                            <p>rating: {rating}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Card_ServiceProvider;
