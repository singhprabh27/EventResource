import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav className="dt w-100 ba b--black-5 border-box pa3 ph5-ns">
                <a onClick={() => onRouteChange('home')} className="dtc v-mid black b link dim w-10" href="#" title="Home">
                    Home
                </a>
                <div className="dtc v-mid w-75 tr">
                    <a onClick={() => onRouteChange('CreateEvent')} className="link dim black b f6 f5-ns dib mr3 mr4-ns" href="#" title="CreateEvent">Create Event</a>
                    <a onClick={() => onRouteChange('home')} className="link dim black b f6 f5-ns dib mr3 mr4-ns" href="#" title="PlanningCompanies">Planning Companies </a>
                    <a onClick={() => onRouteChange('ServiceProvider')} className="link dim black b f6 f5-ns dib mr3 mr4-ns" href="#" title="ServiceProviders">Service providers</a>
                    <a onClick={() => onRouteChange('Joinus')} className="link dim black b f6 f5-ns dib mr3 mr4-ns" href="#" title="joinus">Join us</a>
                    <a onClick={() => onRouteChange('UserEvents')} className="link dim black b f6 f5-ns dib mr3 mr4-ns" href="#" title="UserEvents">Your Events</a>
                    <a onClick={() => onRouteChange('Profile')} className="link dim black b f6 f5-ns dib mr3 mr4-ns" href="#" title="Profile">Profile</a>
                    <a onClick={() => onRouteChange('signout')} className="link dim black b f6 f5-ns dib" href='#' title="Signout">Sign-out</a>
                </div>
            </nav>
        );
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
            </nav>
        );
    }
}

export default Navigation;