import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import EventInfo from './EventInfoComponent'

function RenderMusicDirectoryItem({ musicevent }) {
    return (
        <Card>
            <Link to={`/musicdirectory/${musicevent.id}`}>
                <CardTitle>{musicevent.name}</CardTitle>
                <CardBody>{musicevent.date}, {musicevent.time}</CardBody>
            </Link>
        </Card>
    );
}

function MusicDirectory(props) {
    const musicdirectory = props.music.map(musicevent => {
        return (
            <div key={musicevent.id} className="col-md-5 m-1">
                <RenderMusicDirectoryItem musicevent={musicevent} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Music Events</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {musicdirectory}
            </div>
        </div>
    );
}

export default MusicDirectory;