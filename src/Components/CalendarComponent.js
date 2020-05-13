import React, { Component } from 'react';

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCalendarClicked: false
        };
    }
    render() {
        return(
            <div className="mt-3">
                <h2>Calendar of Events</h2>
            </div>
        );
    }
}

export default Calendar;