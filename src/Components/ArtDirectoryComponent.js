import React from 'react';
import { Card, CardBody, CardTitle, CardFooter, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderArtDirectoryItem({ artevent }) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <Link to={`/artdirectory/${artevent.id}`}>
                    <CardTitle>{artevent.name}</CardTitle>
                    <CardBody>{artevent.date}, {artevent.time}</CardBody>
                    <CardFooter>
                        <Button outline type="submit" color="danger"><i className="fa fa-heart"></i> Favorite</Button>
                    </CardFooter>
                </Link>
            </Card>
        </div>
    );
}

function ArtEventInfo({ artevent }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>{artevent.name}</h3>
                    <h4>{artevent.date}, {artevent.time}, {artevent.location}</h4>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>{artevent.description}</p>
                </div>
            </div>
        </div>
    );
}

function ArtDirectory(props) {
    const artdirectory = props.arts.map(artevent => {
        if (props.wasSelected) {
            return (
                <div key={artevent.id} className="col-md-5 m-1">
                    <ArtEventInfo artevent={artevent} />
                </div>);
        }
        else {
            return (
                <div key={artevent.id} className="col-md-5 m-1">
                    <RenderArtDirectoryItem artevent={artevent} />
                </div>);
        }
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Arts and Theater Events</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {artdirectory}
            </div>
        </div>
    );
}

export default ArtDirectory;