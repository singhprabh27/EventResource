import React from 'react';

class CreateEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventname: '',
            eventtype: '',
            eventdate: '',
            totalguests: '',
            location: '',
            cuisinepreferences: '',
            decorationtheme: '',
            entertainmentpreferences: '',
            userid: this.props.userid,
            photographer: '',
            decorator: '',
            caterer: '',
            florist: '',
            baker: '',
            caterer: '',
            formSubmitted: false // Track if the form has been submitted
        }

    }
    handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        this.setState({ [id]: checked ? event.target.value : 'false' });
    }


    onInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    isFormValid = () => {
        const {
            eventname,
            eventtype,
            eventdate,
            location
        } = this.state;

        return eventname.trim() !== '' &&
            eventtype.trim() !== '' &&
            eventdate.trim() !== '' &&
            location.trim() !== '';
    }

    onSubmitCreateEvent = () => {
        fetch('https://eventresourcebackend.onrender.com/CreateEvent', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...this.state
            })
        }).then(response => response.json())
            .then(event => {

                this.setState({ formSubmitted: true });
            })
    }

    render() {
        const { userName, userid } = this.props;
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-80-m w-60-l mw8 shadow-5 center pa3 bg-white-50">
                <main className="pa4 black-80 w-100 w-80-m w-60-l">
                    <div className="measure">
                        <fieldset id="event" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0 center">Event</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="eventname">Event Name</label>
                                <input
                                    required
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="eventname"
                                    id="eventname"
                                    onChange={this.onInputChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="eventtype">Event Type</label>
                                <input
                                    required
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="eventtype"
                                    id="eventtype"
                                    onChange={this.onInputChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="eventdate">Event Date</label>
                                <input
                                    required
                                    className="pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100"
                                    type="date"
                                    name="eventdate"
                                    id="eventdate"
                                    onChange={this.onInputChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="totalguests">Total Guests</label>
                                <input

                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="number"
                                    name="totalguests"
                                    id="totalguests"
                                    onChange={this.onInputChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="location">Location</label>
                                <input
                                    required
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="location"
                                    id="location"
                                    onChange={this.onInputChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="cuisinepreferences">Cuisine Preferences</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="cuisinepreferences"
                                    id="cuisinepreferences"
                                    onChange={this.onInputChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="decorationtheme">Decoration Theme</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="decorationtheme"
                                    id="decorationtheme"
                                    onChange={this.onInputChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="entertainmentpreferences">Entertainment Preferences</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                    name="entertainmentpreferences"
                                    id="entertainmentpreferences"
                                    onChange={this.onInputChange}
                                />
                            </div>
                            <div className="mt3">
                                <legend className="fw7 mb2 center">Select Service Providers</legend>
                                <div className="flex items-center mb2">
                                    <input
                                        className="mr2 h2 w2"
                                        type="checkbox"
                                        id="photographer"
                                        name="serviceProviders"
                                        value="photographer"
                                        onChange={this.handleCheckboxChange}
                                    />
                                    <label htmlFor="photographer" className="lh-copy">Photographer</label>
                                </div>
                                <div className="flex items-center mb2">
                                    <input
                                        className="mr2 h2 w2"
                                        type="checkbox"
                                        id="decorator"
                                        name="serviceProviders"
                                        value="decorator"
                                        onChange={this.handleCheckboxChange}
                                    />
                                    <label htmlFor="decorator" className="lh-copy">Decorator</label>
                                </div>
                                <div className="flex items-center mb2">
                                    <input
                                        className="mr2 h2 w2"
                                        type="checkbox"
                                        id="florist"
                                        name="serviceProviders"
                                        value="florist"
                                        onChange={this.handleCheckboxChange}
                                    />
                                    <label htmlFor="florist" className="lh-copy">Florist</label>
                                </div>
                                <div className="flex items-center mb2">
                                    <input
                                        className="mr2 h2 w2"
                                        type="checkbox"
                                        id="caterer"
                                        name="serviceProviders"
                                        value="caterer"
                                        onChange={this.handleCheckboxChange}
                                    />
                                    <label htmlFor="caterer" className="lh-copy">Caterer</label>
                                </div>
                                <div className="flex items-center mb2">
                                    <input
                                        className="mr2 h2 w2"
                                        type="checkbox"
                                        id="baker"
                                        name="serviceProviders"
                                        value="baker"
                                        onChange={this.handleCheckboxChange}
                                    />
                                    <label htmlFor="baker" className="lh-copy">Baker</label>
                                </div>
                            </div>

                        </fieldset>
                        {this.state.formSubmitted && (
                            <p className="green">Event created successfully!</p>
                        )}
                        <div className="">
                            <input
                                onClick={this.onSubmitCreateEvent}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="button"
                                value="Create Event"
                                disabled={!this.isFormValid()} // Disable button if form is not valid
                            />
                        </div>
                    </div>
                </main>
            </article>


        );
    }
}

export default CreateEvent;