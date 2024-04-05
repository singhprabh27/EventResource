import React, { Component } from 'react';
import SearchBox_ServiceProvider from '../SearchBox_ServiceProvider';
import Rank from '../Rank/Rank';
import CardList_ServiceProvider from '../Cardlist_ServiceProvider';

class ServiceProvider extends Component {
    constructor() {
        super();
        this.state = {
            providers: [],
            searchfield: ''
            
        }
    }
    componentDidMount() {
        fetch('http://localhost:3000/ServiceProvider')
            .then(response => response.json())
            .then(users => { this.setState({ providers: users }) })
            .catch(err => console.log('Error fetching users:', err));
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const { providers, searchfield } = this.state;
        const filteredproviders = providers.filter(serviceprovider => {
            return serviceprovider.servicetype.toLowerCase().includes(searchfield.toLowerCase());
        })
        const { searchChange, userName, userEntries, onRouteChange } = this.props;
        return (
            <div className='tc'>
                <Rank name={userName} entries={userEntries} />
                <h1 className='f1'> Service Provider </h1>
                <SearchBox_ServiceProvider searchChange={this.onSearchChange} />
                <CardList_ServiceProvider organizers={filteredproviders} onRouteChange={onRouteChange} />
            </div>
        );
    }
}

export default ServiceProvider;
