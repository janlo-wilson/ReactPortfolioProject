import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import SportsEventInfo from './SportsEventInfoComponent';
import { Link } from 'react-router-dom';

function RenderSportsDirectoryItem({ sportsevent }) {
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col">
                    <Card>
                        <CardHeader><Link to={`/sportsdirectory/${sportsevent.id}`}><strong>{sportsevent.name}</strong></Link></CardHeader>
                        <CardBody><em>{sportsevent.date} -- {sportsevent.time}</em><br />
                            {sportsevent.fragment}<br /><br />
                            <Link to="/events">Return to Events</Link>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function SportsDirectory(props) {
    const sportsdirectory = props.sports.map(sportsevent => {
        if (props.wasSelected) {
            return (
                <div key={sportsevent.id} className="col-md-5 m-1">
                    <SportsEventInfo
                        sportseventId={props.sports.id}
                        sportsevent={sportsevent} />
                </div>);
        }
        else {
            return (
                <div key={sportsevent.id} className="col-md-5 m-1">
                    <RenderSportsDirectoryItem sportsevent={sportsevent} />
                </div>);
        }
    });

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col">
                    <h2>Sporting Events</h2>
                    <p>Click on an event for more info.</p>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                {sportsdirectory}
            </div>
        </div>
    );
}

export default SportsDirectory;