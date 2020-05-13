import React from 'react';
import { Card, CardBody, CardTitle, CardFooter, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderSportsDirectoryItem({ sportsevent }) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <Link to={`/sportsdirectory/${sportsevent.id}`}>
                    <CardTitle>{sportsevent.name}</CardTitle>
                    <CardBody>{sportsevent.date}, {sportsevent.time}</CardBody>
                    <CardFooter>
                        <Button outline type="submit" color="danger"><i className="fa fa-heart"></i> Favorite</Button>
                    </CardFooter>
                </Link>
            </Card>
        </div>
    );
}

function SportsEventInfo({ sportsevent }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>{sportsevent.name}</h3>
                    <h4>{sportsevent.date}, {sportsevent.time}, {sportsevent.location}</h4>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>{sportsevent.description}</p>
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
                    <RenderSportsDirectoryItem sportsevent={sportsevent} />
                </div>);
        }
        else {
            return (
                <div key={sportsevent.id} className="col-md-5 m-1">
                    <SportsEventInfo sportsevent={sportsevent} />
                </div>);
        }
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Sporting Events</h2>
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