import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            eventType: '',
            eventDate: '',
            eventTime: '',
            eventWebsite: '',
            agree: false,
            feedback: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false,
                eventWebsite: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate(firstName, lastName, phoneNum, email) {
        const errors = {
            firstName: '',
            lastName: '',
            email: '',
            eventType: '',
            eventWebsite: ''
        };

        if (this.state.touched.firstName) {
            if (firstName.length < 2) {
                errors.firstName = "First name must be at least 2 characters.";
            } else if (firstName.length > 15) {
                errors.firstName = "First name must be 15 or less characters.";
            }
        }

        if (this.state.touched.lastName) {
            if (lastName.length < 2) {
                errors.lastName = "Last name must be at least 2 characters.";
            } else if (lastName.length > 15) {
                errors.lastName = "Last name must be 15 or less characters.";
            }
        }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = "The email address should contain an @.";
        }

        if (this.state.touched.eventWebsite && !eventWebsite.includes('http')) {
            errors.email = 'The email address should contain "http".';
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log("Current state is " + JSON.stringify(this.state));
        alert("Current state is " + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.email, this.state.eventWebsite);

        return (
            <div className="container">

                <div className="row row-content">
                    <div className="col">
                        <p>
                            We'd love to hear from you! You can send questions via email to WhatsUpNC@gmail.com, submit
                            an event via the form below or provide feedback via the form at the bottom of the page.
                        </p>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <h2>Submit an Event</h2>
                        <hr />
                    </div>
                    <div className="col md-10">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="eventType" md={2}>Event Type</Label>
                                <Col md={10}>
                                    <Input type="" id="eventType" name="eventType"
                                        placeholder="Event Type"
                                        value={this.state.eventType}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="eventDate" md={2}>Event Date</Label>
                                <Col md={10}>
                                    <Input type="date" id="eventDate" name="eventDate"
                                        placeholder="Event Date"
                                        value={this.state.eventDate}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="eventTime" md={2}>Event Time</Label>
                                <Col md={10}>
                                    <Input type="time" id="eventTime" name="eventTime"
                                        placeholder="Event Time"
                                        value={this.state.eventTime}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="eventWebsite" md={2}>Event Website</Label>
                                <Col md={10}>
                                    <Input type="url" id="eventWebsite" name="eventWebsite"
                                        placeholder="Event Website"
                                        value={this.state.eventWebsite}
                                        invalid={errors.eventWebsite}
                                        onBlur={this.handleBlur("eventWebsite")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.eventWebsite}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Contact Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        invalid={errors.email}
                                        onBlur={this.handleBlur("email")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="info">
                                        Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <h2>Give Us Your Feedback</h2>
                        <hr />
                    </div>
                    <div className="col md-10">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        value={this.state.firstName}
                                        invalid={errors.firstName}
                                        onBlur={this.handleBlur("firstName")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstName}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastName" name="lastName"
                                        placeholder="Last Name"
                                        value={this.state.lastName}
                                        invalid={errors.lastName}
                                        onBlur={this.handleBlur("lastName")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.lastName}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        invalid={errors.email}
                                        onBlur={this.handleBlur("email")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 4, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <Input type="select" name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange}>
                                        <option>By Phone</option>
                                        <option>By Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="feedback" name="feedback"
                                        rows="10"
                                        value={this.state.feedback}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;