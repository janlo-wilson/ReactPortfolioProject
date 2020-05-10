import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderVolunteerDirectoryItem({ volunteerevent }) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <Link to={`/volunteerdirectory/${volunteerevent.id}`}>
                    <CardTitle>{volunteerevent.name}</CardTitle>
                    <CardBody>{volunteerevent.date}, {volunteerevent.time}</CardBody>
                </Link>
            </Card>
        </div>
    );
}

function VolunteerEventInfo(props) {
    if (props.volunteerevent) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>{props.volunteerevent.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderVolunteerDirectoryItem campsite={props.volunteerevent} />
                </div>
            </div>
        )
    }
    return <div />;
}

function VolunteerDirectory(props) {
    const volunteerdirectory = props.volunteer.map(volunteerevent => {
        return (
            <div key={volunteerevent.id} className="col-md-5 m-1">
                <RenderVolunteerDirectoryItem volunteerevent={volunteerevent} />
            </div>
        );
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