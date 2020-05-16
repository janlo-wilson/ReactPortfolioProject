import React from 'react';
import { Button } from 'reactstrap';

function SportsEventInfo({ sportsevent }) {
    return (
        <div className="container mb-4">
            <div className="row mt-3">
                <div className="col-10">
                    <h3>{sportsevent.name}</h3>
                    <h4>{sportsevent.date} - {sportsevent.time} - {sportsevent.location}</h4>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>{sportsevent.description} <a href={sportsevent.url} target="_blank" rel="noopener noreferrer">More info</a></p>
                </div>
            </div>
            <Button color="info" href="/sportsdirectory"><i className="fa fa-arrow-left"></i> Back</Button>
            <Button outline type="submit" color="danger" className="float-right"><i className="fa fa-heart"></i> Favorite</Button>
        </div>
    );
}

export default SportsEventInfo;