import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import MusicEventInfo from './MusicEventInfoComponent';
import { Link } from 'react-router-dom';

function RenderMusicDirectoryItem({ musicevent }) {
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col">
                    <Card>
                        <CardHeader><Link to={`/musicdirectory/${musicevent.id}`}><strong>{musicevent.name}</strong></Link></CardHeader>
                        <CardBody><em>{musicevent.date} -- {musicevent.time}</em><br />
                            {musicevent.fragment}<br /><br />
                            <Link to="/events">Return to Events</Link>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function MusicDirectory(props) {
    const musicdirectory = props.music.map(musicevent => {
        if (props.wasSelected) {
            return (
                <div key={musicevent.id} className="col-md-5 m-1">
                    <MusicEventInfo
                        musiceventId={props.music.id}
                        musicevent={musicevent} />
                </div>);
        }
        else {
            return (
                <div key={musicevent.id} className="col-md-5 m-1">
                    <RenderMusicDirectoryItem musicevent={musicevent} />
                </div>);
        }
    });

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col">
                    <h2>Music Events</h2>
                    <p>Click on any event's title for more information about that event.</p>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                {musicdirectory}
            </div>
        </div>
    );
}

export default MusicDirectory;