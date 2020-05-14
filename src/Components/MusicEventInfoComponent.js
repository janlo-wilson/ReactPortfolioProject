import React from 'react';
import { Button } from 'reactstrap';

function MusicEventInfo({ musicevent }) {
    return (
        <div className="container mb-4">
            <div className="row mt-3">
                <div className="col-10">
                    <h3>{musicevent.name}</h3>
                    <h4>{musicevent.date} - {musicevent.time} - {musicevent.location}</h4>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>{musicevent.description}</p>
                </div>
            </div>
            <Button color="info" href="/musicdirectory"><i className="fa fa-arrow-left"></i> Back</Button>
            <Button outline type="submit" color="danger" className="float-right"><i className="fa fa-heart"></i> Favorite</Button>
        </div>
    );
}

export default MusicEventInfo;