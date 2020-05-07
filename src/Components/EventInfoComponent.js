import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderEvent({ event }) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardTitle top src={event.name} />
                <CardBody>
                    <CardText>
                        {event.date}, {event.time}
                        <h4>Description</h4>
                        {event.description}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function CampsiteInfo(props) {
    if (props.event) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>{props.event.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderEvent campsite={props.event} />
                </div>
            </div>
        )
    }
    return <div />;
}

export default CampsiteInfo;