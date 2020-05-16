import React, { Component } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ARTS } from '../Shared/Arts';
import { MUSIC } from '../Shared/Music';
import { SPORTS } from '../Shared/Sports';
import { VOLUNTEER } from '../Shared/Volunteer';

class Calendar extends Component {
  state = {
    calendarEvents: [],
    arts: ARTS,
    music: MUSIC,
    sports: SPORTS,
    volunteer: VOLUNTEER
  }

  CalendarData() {
    if (this.state.calendarEvents.length > 0) {
      return;
    }
    for (let i = 0; i < this.state.arts.length; ++i) {
      let data = { title: this.state.arts[i].name, start: this.state.arts[i].start };
      this.state.calendarEvents.push(data);
    }
    for (let i = 0; i < this.state.music.length; ++i) {
      let data = { title: this.state.music[i].name, start: this.state.music[i].start };
      this.state.calendarEvents.push(data);
    }
    for (let i = 0; i < this.state.sports.length; ++i) {
      let data = { title: this.state.sports[i].name, start: this.state.sports[i].start };
      this.state.calendarEvents.push(data);
    }
    for (let i = 0; i < this.state.volunteer.length; ++i) {
      let data = { title: this.state.volunteer[i].name, start: this.state.volunteer[i].start };
      this.state.calendarEvents.push(data);
    }
  }

  render() {
    this.CalendarData();

    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <h3><strong>Calendar of Events</strong></h3>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} events={this.state.calendarEvents}
              eventColor='#00bfff' />
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar;