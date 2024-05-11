import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {} // Initialize userData state to an empty object
        };
    }

    componentDidMount() {
        // Fetch user data from the backend based on user id
        this.fetchUserData();
    }

    fetchUserData = () => {
        // Make a GET request to fetch user data based on user id
        fetch(`https://eventresourcebackend.onrender.com/profile/${this.props.userid}`)
            .then(response => response.json())
            .then(data => {
                // Set the fetched user data to the component state
                this.setState({ userData: data });
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    };

    render() {
        const { userData } = this.state;
        const { onRouteChange } = this.props;
        return (
            <div className="pa3  bg-white-50 br3 shadow-5">
                <h1 className="f2 tc mb4">User Profile</h1>
                <table className="center">
                    <tbody>
                        <tr>
                            <td className="f4 fw6 pr3">Name:</td>
                            <td className="f4">{userData.name}</td>
                        </tr>
                        <tr>
                            <td className="f4 fw6 pr3">Email:</td>
                            <td className="f4">{userData.email}</td>
                        </tr>
                        <tr>
                            <td className="f4 fw6 pr3">Joined:</td>
                            <td className="f4">{userData.joined}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex justify-center mt4">
                    <button
                        className="f4 link dim br-pill ph4 pv3 mb2 dib white bg-dark-blue pointer grow"
                        onClick={() => onRouteChange('UserEvents')}
                    >
                        Your Events
                    </button>
                </div>
            </div>
        );
    }
}

export default Profile;
