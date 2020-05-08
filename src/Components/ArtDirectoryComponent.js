import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import EventInfo from './EventInfoComponent';

function RenderArtDirectoryItem({ artevent }) {
    return (
        <Card>
            <Link to={`/artdirectory/${artevent.id}`}>
                <CardTitle>{artevent.name}</CardTitle>
                <CardBody>{artevent.date}, {artevent.time}</CardBody>
            </Link>
        </Card>
    );
}

function ArtDirectory(props) {
    const artdirectory = props.arts.map(artevent => {
        return (
            <div key={artevent.id} className="col-md-5 m-1">
                <RenderArtDirectoryItem artevent={artevent} />
            </div>
        );
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