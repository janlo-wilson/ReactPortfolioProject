import React from 'react';
import { Card, CardBody, CardTitle, CardFooter, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderVolunteerDirectoryItem({ volunteerevent }) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <Link to={`/volunteerdirectory/${volunteerevent.id}`}>
                    <CardTitle>{volunteerevent.name}</CardTitle>
                    <CardBody>{volunteerevent.date}, {volunteerevent.time}</CardBody>
                    <CardFooter>
                        <Button outline type="submit" color="danger"><i className="fa fa-heart"></i> Favorite</Button>
                    </CardFooter>
                </Link>
            </Card>
        </div>
    );
}

function VolunteerEventInfo({ volunteerevent }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>{volunteerevent.name}</h3>
                    <h4>{volunteerevent.date}, {volunteerevent.time}, {volunteerevent.location}</h4>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>{volunteerevent.description}</p>
                </div>
            </div>
        </div>
    );
}

function VolunteerDirectory(props) {
    const volunteerdirectory = props.volunteer.map(volunteerevent => {
        if (props.wasSelected) {
            return (
                <div key={volunteerevent.id} className="col-md-5 m-1">
                    <RenderVolunteerDirectoryItem volunteerevent={volunteerevent} />
                </div>);
        }
        else {
            return (
                <div key={volunteerevent.id} className="col-md-5 m-1">
                    <VolunteerEventInfo volunteerevent={volunteerevent} />
                </div>);
        }
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Volunteer Events</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {volunteerdirectory}
            </div>
        </div>
    );
}

export default VolunteerDirectory;