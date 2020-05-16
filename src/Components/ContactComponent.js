import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import ReactTooltip from 'react-tooltip';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            eventDate: '',
            eventTime: '',
            eventWebsite: '',
            firstName: '',
            lastName: '',
            email: '',
            email2: '',
            feedback: '',
            agree: false,
            touched: {
                eventDate: false,
                eventTime: false,
                eventWebsite: false,
                firstName: false,
                lastName: false,
                email: false,
                email2: false,
                feedback: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFeedback = this.handleFeedback.bind(this);
    }

    validate(eventDate, eventTime, eventWebsite, firstName, lastName, email, email2, feedback) {
        const errors = {
            eventDate: '',
            eventTime: '',
            eventWebsite: '',
            firstName: '',
            lastName: '',
            email: '',
            email2: '',
            feedback: ''
        };

        if (this.state.touched.eventDate) {
            if (eventDate.length < 10) {
                errors.eventDate = "Must provide a valid date.";
            } else if (eventDate.length > 15) {
                errors.eventDate = "Must provide a valid date.";
            }
        }

        if (this.state.touched.eventTime && !eventTime.includes(':')) {
            errors.eventTime = "Must be a valid time.";
        }

        if (this.state.touched.eventWebsite && !eventWebsite.includes('/')) {
            errors.eventWebsite = 'Must be a valid web address.';
        }

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
            errors.email = "Must be a valid email address.";
        }

        if (this.state.touched.email2 && !email2.includes('@')) {
            errors.email2 = "Must be a valid email address.";
        }

        if (this.state.touched.feedback) {
            if (feedback.length < 10) {
                errors.feedback = "This field must be filled in.";
            } else if (feedback.length > 200) {
                errors.feedback = "Character limit exceeded."
            }
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
        alert("Thanks for your submission!");
        event.preventDefault();
    }

    handleFeedback(event) {
        alert("Thank you for your feedback!");
        event.preventDefault();
    }

    render() {
        const errors = this.validate(this.state.eventDate, this.state.eventTime, this.state.eventWebsite, this.state.firstName, this.state.lastName, this.state.email, this.state.email2, this.state.feedback);

        return (
            <div className="container">

                <div className="row mt-2">
                    <h3>Contact Us</h3>
                    <p>
                        We'd love to hear from you! You can send questions via email to <a href="mailto:WhatsUPNC@gmail.com">WhatsUpNC@gmail.com</a>.
                        You may also submit an event or provide feedback via the forms.
                    </p>
                    <div className="col-12 mt-3">
                        <h2>Submit an Event</h2>
                        <hr />
                    </div>
                    <div id="eventForm" className="col md-10">
                        <Form onSubmit={this.handleSubmit} className="mt-3">
                            <FormGroup row>
                                <Label htmlFor="eventType" md={2}>Event Type</Label>
                                <Col md={10}>
                                    <Input type="select" id="eventType" name="eventType"
                                        placeholder="Event Type"
                                        value={this.state.eventType}
                                        onChange={this.handleInputChange}>
                                        <option>Arts</option>
                                        <option>Music</option>
                                        <option>Sports</option>
                                        <option>Volunteer</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="eventDate" md={2}>Event Date</Label>
                                <Col md={10}>
                                    <Input type="date" id="eventDate" name="eventDate"
                                        placeholder="Event Date"
                                        value={this.state.eventDate}
                                        invalid={errors.eventDate}
                                        onBlur={this.handleBlur("eventDate")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.eventDate}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="eventTime" md={2}>Event Time</Label>
                                <Col md={10}>
                                    <Input type="time" id="eventTime" name="eventTime"
                                        placeholder="Event Time"
                                        value={this.state.eventTime}
                                        invalid={errors.eventTime}
                                        onBlur={this.handleBlur("eventTime")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.eventTime}</FormFeedback>
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
                                    <Button type="submit" color="info" data-tip="We may contact you for more information!">
                                        Submit
                                        <ReactTooltip />
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
                    <div id="feedbackForm" className="col md-10">
                        <Form onSubmit={this.handleFeedback} className="mt-3">
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
                                <Label htmlFor="email2" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email2" name="email2"
                                        placeholder="Email"
                                        value={this.state.email2}
                                        invalid={errors.email2}
                                        onBlur={this.handleBlur("email2")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.email2}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 4, offset: 2 }}>
                                    <div className="form-check">
                                        <Label check>
                                            <Input type="checkbox" id="agree" name="agree" /> {' '}
                                            <strong>Click here if we may contact you.</strong>
                                        </Label>
                                    </div>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="feedback" name="feedback"
                                        rows="10"
                                        value={this.state.feedback}
                                        invalid={errors.feedback}
                                        onBlur={this.handleBlur("feedback")}
                                        onChange={this.handleInputChange}></Input>
                                    <FormFeedback>{errors.feedback}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="info">
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