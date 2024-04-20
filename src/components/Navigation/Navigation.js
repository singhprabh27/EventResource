import React, { Component } from 'react';
import './navbar.css';

class Navigation extends Component {
    render() {
        const { onRouteChange, isSignedIn } = this.props;

        const toggleMenu = () => {
            const menu = document.getElementById('main-nav-mobile');
            menu.classList.toggle('db');
            menu.classList.toggle('dn');
            console.log(menu.classList);
        };
        function MobileMenu() {
            return (
                <nav id="main-nav-mobile" className={`dn absolute tc right-0 w-100 w-40-ns pa2 bg-moon-gray ba top-100`}>
                    <a onClick={() => onRouteChange('CreateEvent')} className="link db dib-l pa2 pv2 color-inherit" href="#" title="CreateEvent">Create Event</a>
                    <a onClick={() => onRouteChange('home')} className="link db dib-l pa2 pv2 color-inherit" href="#" title="PlanningCompanies">Planning Companies </a>
                    <a onClick={() => onRouteChange('ServiceProvider')} className="link db dib-l pa2 pv2 color-inherit" href="#" title="ServiceProviders">Service providers</a>
                    <a onClick={() => onRouteChange('Joinus')} className="link db dib-l pa2 pv2 color-inherit" href="#" title="joinus">Join us</a>
                    <a onClick={() => onRouteChange('UserEvents')} className="link db dib-l pa2 pv2 color-inherit" href="#" title="UserEvents">Your Events</a>
                    <a onClick={() => onRouteChange('Profile')} className="link db dib-l pa2 pv2 color-inherit" href="#" title="Profile">Profile</a>
                    <a onClick={() => onRouteChange('signout')} className="link db dib-l pa2 pv2 color-inherit ba br2" href='#' title="Signout">Sign-out</a>
                </nav>
            );
        }
        if (isSignedIn) {
            return (
                <header className="pv3 ph2 relative bb ">
                    <div id="container" className="flex justify-between items-center">
                        <div id="logo" onClick={() => onRouteChange('home')} className="overflow-hidden" title="Home">
                            <a href="#" className="link color-inherit">Home</a>
                        </div>
                        <a href="#" id="mobile-menu-toggle" className="link color-inherit pa3 dn-l" onClick={toggleMenu}>
                            ☰ Menu
                        </a>
                        <nav id="main-nav" className="dn db-l">
                            <a onClick={() => onRouteChange('CreateEvent')} className="link db dib-l pa2 pv2 color-inherit" href="#" title="CreateEvent">Create Event</a>
                            <a onClick={() => onRouteChange('home')} className="link db dib-l pa2 pv2 color-inherit" href="#" title="PlanningCompanies">Planning Companies </a>
                            <a onClick={() => onRouteChange('ServiceProvider')} className="link db dib-l pa2 pv2 color-inherit" href="#" title="ServiceProviders">Service providers</a>
                            <a onClick={() => onRouteChange('Joinus')} className="link db dib-l pa2 pv2 color-inherit" href="#" title="joinus">Join us</a>
                            <a onClick={() => onRouteChange('UserEvents')} className="link db dib-l pa2 pv2 color-inherit" href="#" title="UserEvents">Your Events</a>
                            <a onClick={() => onRouteChange('Profile')} className="link db dib-l pa2 pv2 color-inherit" href="#" title="Profile">Profile</a>
                            <a onClick={() => onRouteChange('signout')} className="link dib pa2 pv2 color-inherit ba br2" href='#' title="Signout">Sign-out</a>
                        </nav>
                        <MobileMenu />
                    </div>
                </header>
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
}

export default Navigation;

