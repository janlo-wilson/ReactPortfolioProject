import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMusicDirectoryItem({ musicevent }) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <Link to={`/musicdirectory/${musicevent.id}`}>
                    <CardTitle>{musicevent.name}</CardTitle>
                    <CardBody>{musicevent.date}, {musicevent.time}</CardBody>
                </Link>
            </Card>
        </div>
    );
}

function MusicEventInfo(props) {
    if (props.musicevent) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>{props.musicevent.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderMusicDirectoryItem campsite={props.musicevent} />
                </div>
            </div>
        )
    }
    return <div />;
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