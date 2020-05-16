import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import ArtEventInfo from './ArtEventInfoComponent';
import { Link } from 'react-router-dom';

function RenderArtDirectoryItem({ artevent }) {
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col">
                    <Card>
                        <CardHeader><Link to={`/artdirectory/${artevent.id}`}><strong>{artevent.name}</strong></Link></CardHeader>
                        <CardBody><em>{artevent.date} -- {artevent.time}</em><br />
                            {artevent.fragment}<br /><br />
                            <Link to="/events">Return to Events</Link>
                        </CardBody>
                    </Card>
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
                    <ArtEventInfo
                        arteventId={props.arts.id}
                        artevent={artevent} />
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
            <div className="row mt-3">
                <div className="col">
                    <h2>Art and Theater Events</h2>
                    <p>Click on any event's title for more information about that event.</p>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                {artdirectory}
            </div>
        </div>
    );
}

export default ArtDirectory;