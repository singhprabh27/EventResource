import React, { Component } from 'react';

class Joinus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userType: '',
            name: '',
            email: '',
            phone: '',
            website: '',
            city: '',
            description: '',
            image_url: '',
            servicetype: '',
            skills: '',
            rating: 4.1,
            experience: '',
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {
            userType,
            name,
            email,
            phone,
            website,
            city,
            description,
            image_url,
            servicetype,
            skills,
            rating,
            experience,
        } = this.state;

        // Send a POST request to your backend server based on the selected user type
        let endpoint = '';
        let formData = {};
        if (userType === 'company') {
            endpoint = 'https://eventresourcebackend.onrender.com/Joinus/Company';
            formData = { name, email, phone, website, city, description, image_url };
        } else if (userType === 'serviceProvider') {
            endpoint = 'https://eventresourcebackend.onrender.com/Joinus/ServiceProvider';
            formData = { name, email, phone, servicetype, description, skills, rating, experience, image_url, city };
        }

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Clear form fields after successful submission
                this.setState({
                    userType: '',
                    name: '',
                    email: '',
                    phone: '',
                    website: '',
                    city: '',
                    description: '',
                    image_url: '',
                    servicetype: '',
                    skills: '',
                    rating: '',
                    experience: '',
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    render() {
        const {
            userType,
            name,
            email,
            phone,
            website,
            city,
            description,
            image_url,
            servicetype,
            skills,
            rating,
            experience,
        } = this.state;

        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-80-m w-60-l mw8 shadow-5 center pa3 bg-white-50">
                <main className="pa4 black-80 w-100 w-80-m w-60-l">
                    <div className="measure">
                        <fieldset id="userType" className="ba b--transparent ph0 mh0">
                            <h2 className="f2 fw6 ph0 mh0 center"> Choose User Type </h2>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="userType">User Type</label>
                                <select
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    value={userType}
                                    onChange={(e) => this.setState({ userType: e.target.value })}
                                >
                                    <option value="">Select User Type</option>
                                    <option value="company">Event Planning Company</option>
                                    <option value="serviceProvider">Individual Service Provider</option>
                                </select>
                            </div>
                        </fieldset>
                        {userType === 'company' && (
                            <fieldset id="organizer" className="ba b--transparent ph0 mh0">
                                <h2 className="f2 fw6 ph0 mh0 center"> Event Planning Company <br />Registration Form </h2>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={name}
                                        onChange={(e) => this.setState({ name: e.target.value })}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => this.setState({ email: e.target.value })}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="phone">Phone</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        value={phone}
                                        onChange={(e) => this.setState({ phone: e.target.value })}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="website">Website</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        name="website"
                                        id="website"
                                        value={website}
                                        onChange={(e) => this.setState({ website: e.target.value })}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="city">City</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        name="city"
                                        id="city"
                                        value={city}
                                        onChange={(e) => this.setState({ city: e.target.value })}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="description">Description</label>
                                    <textarea
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        name="description"
                                        id="description"
                                        value={description}
                                        onChange={(e) => this.setState({ description: e.target.value })}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="image_url">Image URL</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        name="image_url"
                                        id="image_url"
                                        value={image_url}
                                        onChange={(e) => this.setState({ image_url: e.target.value })}
                                    />
                                </div>
                                <div className="mt3">
                                    <input
                                        onClick={this.handleSubmit}
                                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                        type="submit"
                                        value="Become Organizer"
                                    />
                                </div>
                            </fieldset>
                        )}
                        {userType === 'serviceProvider' && (
                            <fieldset id="serviceProvider" className="ba b--transparent ph0 mh0">
                                <h2 className="f2 fw6 ph0 mh0 center">Service Provider Registration Form</h2>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={name}
                                        onChange={(e) => this.setState({ name: e.target.value })}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => this.setState({ email: e.target.value })}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="phone">Phone</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        value={phone}
                                        onChange={(e) => this.setState({ phone: e.target.value })}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="servicetype">Service Type</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        name="servicetype"
                                        id="servicetype"
                                        value={servicetype}
                                        onChange={(e) => this.setState({ servicetype: e.target.value })}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="city">City</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        name="city"
                                        id="city"
                                        value={city}
                                        onChange={(e) => this.setState({ city: e.target.value })}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="description">Description</label>
                                    <textarea
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        name="description"
                                        id="description"
                                        value={description}
                                        onChange={(e) => this.setState({ description: e.target.value })}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="skills">Skills</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        name="skills"
                                        id="skills"
                                        value={skills}
                                        onChange={(e) => this.setState({ skills: e.target.value })}
                                    />
                                </div>
                                
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="experience">Experience</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        name="experience"
                                        id="experience"
                                        value={experience}
                                        onChange={(e) => this.setState({ experience: e.target.value })}
                                    />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="image_url">Image URL</label>
                                    <input
                                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="text"
                                        name="image_url"
                                        id="image_url"
                                        value={image_url}
                                        onChange={(e) => this.setState({ image_url: e.target.value })}
                                    />
                                </div>
                                <div className="mt3">
                                    <input
                                        onClick={this.handleSubmit}
                                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                        type="submit"
                                        value="Register as Service Provider"
                                    />
                                </div>
                            </fieldset>
                        )}

                    </div>
                </main>
            </article>
        );
    }
}

export default Joinus;
