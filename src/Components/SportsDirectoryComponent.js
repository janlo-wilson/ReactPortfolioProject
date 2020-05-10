import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderSportsDirectoryItem({ sportsevent }) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <Link to={`/sportsdirectory/${sportsevent.id}`}>
                    <CardTitle>{sportsevent.name}</CardTitle>
                    <CardBody>{sportsevent.date}, {sportsevent.time}</CardBody>
                </Link>
            </Card>
        </div>
    );
}

function SportsEventInfo(props) {
    if (props.sportsevent) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>{props.sportsevent.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderSportsDirectoryItem campsite={props.sportsevent} />
                </div>
            </div>
        )
    }
    return <div />;
}

function SportsDirectory(props) {
    const sportsdirectory = props.sports.map(sportsevent => {
        return (
            <div key={sportsevent.id} className="col-md-5 m-1">
                <RenderSportsDirectoryItem sportsevent={sportsevent} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Sports Events</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {sportsdirectory}
            </div>
        </div>
    );
}

export default SportsDirectory;