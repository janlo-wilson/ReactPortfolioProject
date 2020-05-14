import React from 'react';
import { Button } from 'reactstrap';

function ArtEventInfo({ artevent }) {
    return (
        <div className="container mb-4">
            <div className="row mt-3">
                <div className="col-10">
                    <h3>{artevent.name}</h3>
                    <h4>{artevent.date} - {artevent.time} - {artevent.location}</h4>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>{artevent.description}</p>
                </div>
            </div>
            <Button color="info" href="/artdirectory"><i className="fa fa-arrow-left"></i> Back</Button>
            <Button outline type="submit" color="danger" className="float-right"><i className="fa fa-heart"></i> Favorite</Button>
        </div>
    );
}

export default ArtEventInfo;