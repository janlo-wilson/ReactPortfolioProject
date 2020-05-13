import React from 'react';
import { Card, CardBody, CardTitle, CardFooter, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMusicDirectoryItem({ musicevent }) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <Link to={`/musicdirectory/${musicevent.id}`}>
                    <CardTitle>{musicevent.name}</CardTitle>
                    <CardBody>{musicevent.date}, {musicevent.time}</CardBody>
                    <CardFooter>
                        <Button outline type="submit" color="danger"><i className="fa fa-heart"></i> Favorite</Button>
                    </CardFooter>
                </Link>
            </Card>
        </div>
    );
}

function MusicEventInfo({ musicevent }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>{musicevent.name}</h3>
                    <h4>{musicevent.date}, {musicevent.time}, {musicevent.location}</h4>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>{musicevent.description}</p>
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
                    <RenderMusicDirectoryItem musicevent={musicevent} />
                </div>);
        }
        else {
            return (
                <div key={musicevent.id} className="col-md-5 m-1">
                    <MusicEventInfo musicevent={musicevent} />
                </div>);
        }
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