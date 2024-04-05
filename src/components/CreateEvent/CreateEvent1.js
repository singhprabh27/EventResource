import React from 'react';

class CreateEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventname: '',
            eventtype: '',
            userid: this.props.userid
        }
    }

    oneventtypeChange = (event) => {
        this.setState({ eventtype: event.target.value })
    }

    oneventnameChange = (event) => {
        this.setState({ eventname: event.target.value })
    }

    onSubmitCreateEvent = () => {
        fetch('http://localhost:3000/CreateEvent', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                eventname: this.state.eventname,
                eventtype: this.state.eventtype,
                userid: this.state.userid
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    // this.props.onRouteChange('home');
                }
            })
    }

    render() {
        const { userName, userid } = this.props;
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80 ">
                    <div className="measure ">
                        <fieldset id="event" className="ba b--transparent ph0 mh0 ">
                            <legend className="f1 fw6 ph0 mh0 center">Event</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="event name">Event Name</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={this.oneventnameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="event type">Event type</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    onChange={this.oneventtypeChange}
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="user id">{userid}</label>

                            </div>
                        </fieldset>
                        <div className="">
                            <input
                                onClick={this.onSubmitCreateEvent}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib "
                                type="submit"
                                value="Create Event"
                            />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default CreateEvent;