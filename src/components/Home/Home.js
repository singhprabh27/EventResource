import React, { Component } from 'react';
import SearchBox from '../SearchBox';
import Rank from '../Rank/Rank';
import CardList from '../CardList';

class Home extends Component {
    render() {
        const { searchChange, filteredRobots, userName} = this.props;
        return (
            <div className='tc'>
                <Rank name={userName} />
                <h1 className='f1'> Event Planning Companies</h1>
                <SearchBox searchChange={searchChange} />
                <CardList organizers={filteredRobots} />
            </div>
        );
    }
}

export default Home;
