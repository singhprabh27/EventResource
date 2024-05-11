// App.js file
import React, { Component } from 'react';
// import Particles from 'react-particles-js';
import ParticlesBg from 'particles-bg'
import Navigation from '../components/Navigation/Navigation';
import Signin from '../components/Signin/Signin2';
import Register from '../components/Register/Register2';
import Home from '../components/Home/Home';
import ServiceProvider from '../components/ServiceProvider/ServiceProvider';
import Card_Display from '../components/Card_Display/Card_Display';
import CreateEvent from '../components/CreateEvent/CreateEvent';
import UserEvents from '../components/userEvents/userEvents';
import Joinus from '../components/Joinus/Joinus';
import Profile from '../components/Profile/Profile';
import './App.css';

const initialState = {
    input: '',
    image_url: '',
    box: {},
    route: 'signin',
    isSignedIn: false,
    user: {
        id: '',
        name: '',
        email: '',
        joined: ''
    }
}


class App extends Component {
    constructor() {
        super();
        this.state = initialState;
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => { this.setState({ robots: users }) });
    // }
    componentDidMount() {
        fetch('https://eventresourcebackend.onrender.com')
            .then(response => response.json())
            .then(users => { this.setState({ robots: users }) })
            .catch(err => console.log('Error fetching users:', err));
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    loadUser = (data) => {
        this.setState({
            user: {
                id: data.id,
                name: data.name,
                email: data.email,
                joined: data.joined
            }
        })
    }

    onRouteChange = (route) => {
        if (route === 'signout') {
            this.setState(initialState)
        } else if (route === 'home') {
            this.setState({ isSignedIn: true })
        }
        this.setState({ route: route });
    }

    render() {
        const { robots, searchfield, isSignedIn, route } = this.state;
        const filteredRobots = robots.filter(organizer => {
            return organizer.city.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (
            <div className="App">
                <ParticlesBg type="circle" bg={true} />
                <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
                {(() => {
                    switch (route) {
                        case 'home':
                            return <Home
                                searchChange={this.onSearchChange}
                                filteredRobots={filteredRobots}
                                userName={this.state.user.name}
                            />;
                        case 'signin':
                            return <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />;
                        case 'register':
                            return <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />;
                        case 'ServiceProvider':
                            return <ServiceProvider searchChange={this.onSearchChange}
                                userName={this.state.user.name}
                                onRouteChange={this.onRouteChange}
                            />;
                        case 'card_display':
                            return <Card_Display loadUser={this.loadUser} onRouteChange={this.onRouteChange} />;
                        case 'CreateEvent':
                            return <CreateEvent
                                userName={this.state.user.name}
                                userid={this.state.user.id}
                                loadUser={this.loadUser} onRouteChange={this.onRouteChange} />;
                        case 'UserEvents':
                            return <UserEvents
                                userName={this.state.user.name}
                                userid={this.state.user.id}
                                onRouteChange={this.onRouteChange} />;
                        case 'Joinus':
                            return <Joinus
                                userName={this.state.user.name}
                                userid={this.state.user.id}
                                loadUser={this.loadUser} onRouteChange={this.onRouteChange} />;
                        case 'Profile':
                            return <Profile
                                userName={this.state.user.name}
                                userid={this.state.user.id}
                                onRouteChange={this.onRouteChange} />;

                        default:
                            return <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />;
                    }
                })()}
            </div>
        );
    }
}

export default App;
