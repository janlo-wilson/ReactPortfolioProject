import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import VolunteerEventInfo from './VolunteerEventInfoComponent';
import { Link } from 'react-router-dom';

function RenderVolunteerDirectoryItem({ volunteerevent }) {
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col">
                    <Card>
                        <CardHeader><Link to={`/volunteerdirectory/${volunteerevent.id}`}>{volunteerevent.name}</Link></CardHeader>
                        <CardBody><em>{volunteerevent.date} -- {volunteerevent.time}</em><br />
                        {volunteerevent.fragment}<br /><br />
                        <Link to="/events">Return to Events</Link>
                        </CardBody>
                    </Card>
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
                    <VolunteerEventInfo 
                    volunteereventId={props.volunteer.id}
                    volunteerevent={volunteerevent} />
                </div>);
        }
        else {
            return (
                <div key={volunteerevent.id} className="col-md-5 m-1">
                    <RenderVolunteerDirectoryItem volunteerevent={volunteerevent} />
                </div>);
        }
    });

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col">
                    <h2>Volunteer Events</h2>
                    <p>Click on an event for more info.</p>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                {volunteerdirectory}
            </div>
        </div>
    );
}

export default VolunteerDirectory;