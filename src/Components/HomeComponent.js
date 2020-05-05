import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit(this);
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
        console.log("Current state is " + JSON.stringify(this.state));
        alert("Current state is " + JSON.stringify(this.state));
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
                    <img className="ml-4 img-thumbnail d-none d-sm-block" src="../Beautiful_Ocean" alt="Beach Sunset" />
                </div>
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
        );
    }
}

function RenderCard({ item }) {
    return (
        <Card className="h-100">
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
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
}

export default Home;