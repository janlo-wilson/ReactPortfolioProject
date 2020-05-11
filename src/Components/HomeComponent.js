import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Col } from 'reactstrap';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
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
        alert("Thank you for your submission!");
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col">
                        <div className="media">
                            <div className="media-body align-self-center">
                                <h3>Our Mission</h3>
                                <p class="order-sm-first">
                                    At <em>What's Up North County</em> we strive to bring all of North San Diego County's hottest
                            events to you on one simple, easy-to-use website. You can search for a particular event via
                            the search bar, browse the different event types on the events page, or get an overview of
                            what's happening via our calendar. Either way, you don't have to keep searching the internet
                            for something to do - you can find it all right here!
                        </p>
                            </div>
                            <img className="ml-4 img-thumbnail d-none d-sm-block" src={require("../images/Beautiful_Ocean.png")} alt="Beach Sunset" />
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <img className="mr-5 img-thumbnail d-none d-lg-block" src={require("../images/Flower_Fields.png")} alt="Carlsbad Flower Fields" />
                    <div className="col-sm-8">
                        <div className="card-body">
                            <h4 className="card-title text-center mt-2" id="popularTitle">This Week's Most Popular Event</h4>
                            <div className="form-group row">
                                <div class="col text-center">
                                    <h5>Meading at the Garden</h5>
                                    <p className="card-text">The largest mead festival on the west coast, Meading at the Garden features over 35 meaderies,
                                    cideries, and breweries.</p>
                                    <a className="btn btn-outline-info btn-sm" role="button">More info</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <div className="row row-content">
            <div className="col-sm-6">
                <h3>Submit an Event</h3>
            </div>
            <div className="col-sm-6">
                <p>Are you a local business or organization? Do you want to see your event listed on our site?
                    Just click the "Add Event" button!
                </p>
                <Button className="btn btn-info btn-lg text-white" onClick={this.toggleModal}> Add Event</Button>
            </div>
        </div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit an Event</ModalHeader>
                        <ModalBody>
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
                                            onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" md={2}>Contact Email</Label>
                                    <Col md={10}>
                                        <Input type="email" id="email" name="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                            </Form>
                            <Button type="submit" value="submit" color="info">Submit</Button>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        );
    }
}

/*function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard item={props.campsite} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.partner} />
                </div>
            </div>
        </div>
    );
}*/

export default Home;