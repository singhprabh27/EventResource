import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav className="flex items-center justify-between bb b--white-10 bg-black-40">
                <a onClick={() => onRouteChange('home')} className="link white-70 hover-white no-underline flex items-center pa3" href="#" title="Home">
                    Home
                </a>
                <div className="flex-grow pa3 flex items-center">
                    <a onClick={() => onRouteChange('CreateEvent')} className="f6 link dib white dim mr3 mr4-ns" href="#" title="CreateEvent">Create Event</a>
                    <a onClick={() => onRouteChange('home')} className="f6 link dib white dim mr3 mr4-ns" href="#" title="PlanningCompanies">Planning Companies</a>
                    <a onClick={() => onRouteChange('ServiceProvider')} className="f6 link dib white dim mr3 mr4-ns" href="#" title="ServiceProviders">Service providers</a>
                    <a onClick={() => onRouteChange('Joinus')} className="f6 link dib white dim mr3 mr4-ns" href="#" title="joinus">Join us</a>
                    <a onClick={() => onRouteChange('UserEvents')} className="f6 link dib white dim mr3 mr4-ns" href="#" title="UserEvents">Your Events</a>
                    <a onClick={() => onRouteChange('Profile')} className="f6 link dib white dim mr3 mr4-ns" href="#" title="Profile">Profile</a>
                    <a onClick={() => onRouteChange('signout')} className="f6 link dib white dim" href='#' title="Signout">Sign-out</a>
                </div>
            </nav>
        );
    } else {
        return (
            <nav className="flex items-center justify-end">
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer white-70'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer white-70'>Register</p>
            </nav>
        );
    }
}

export default Navigation;
