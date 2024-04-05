// App.js file
import React, { Component } from 'react';
// import Particles from 'react-particles-js';
import ParticlesBg from 'particles-bg'
import Navigation from '../components/Navigation/Navigation2';
import Signin from '../components/Signin/Signin2';
import Register from '../components/Register/Register2';
import Home from '../components/Home/Home';
import SearchBox from '../components/SearchBox';
import Rank from '../components/Rank/Rank';
import CardList from '../components/CardList';

import './App.css';

const initialState = {
    input: '',
    imageUrl: '',
    box: {},
    route: 'signin',
    isSignedIn: false,

    user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
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
        fetch('http://localhost:3000')
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
                entries: data.entries,
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
                {route === 'home'
                    ? <Home
                    searchChange={this.onSearchChange}
                    filteredRobots={filteredRobots}
                    userName={this.state.user.name}
                    userEntries={this.state.user.entries}
                /> :
                    (
                        route === 'signin'
                            ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                    )
                }
            </div>
        );
    }
}

export default App;
