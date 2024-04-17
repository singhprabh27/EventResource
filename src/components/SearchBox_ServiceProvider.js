import React from 'react';

const SearchBox_ServiceProvider = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search by servicetype'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox_ServiceProvider;