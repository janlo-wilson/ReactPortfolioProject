import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Calendar from './CalendarComponent';
import Event from './EventComponent';
import ArtDirectory from './ArtDirectoryComponent';
import MusicDirectory from './MusicDirectoryComponent';
import SportsDirectory from './SportsDirectoryComponent';
import VolunteerDirectory from './VolunteerDirectoryComponent';
import { ARTS } from '../Shared/Arts';
import { MUSIC } from '../Shared/Music';
import { SPORTS } from '../Shared/Sports';
import { VOLUNTEER } from '../Shared/Volunteer';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arts: ARTS,
            music: MUSIC,
            sports: SPORTS,
            volunteer: VOLUNTEER
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home

                />
            );
        }

        const EventWithId = ({ match }) => {
            return (
                <>
                    <ArtDirectory.ArtEventInfo artevent={this.state.arts.filter(artevent => artevent.id ===
                        +match.params.arteventId)[0]} />
                    <MusicDirectory.MusicEventInfo musicevent={this.state.music.filter(musicevent => musicevent.id ===
                        +match.params.musiceventId)[0]} />
                    <SportsDirectory.SportsEventInfo sportsevent={this.state.sports.filter(sportsevent => sportsevent.id ===
                        +match.params.sportseventId)[0]} />
                    <VolunteerDirectory.VolunteerEventInfo volunteerevent={this.state.volunteer.filter(volunteerevent => volunteerevent.id ===
                        +match.params.volunteereventId)[0]} />
                </>
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/events' component={Event} />
                    <Route exact path='/artdirectory' render={() => <ArtDirectory artevent={this.props.arts} />} />
                    <Route exact path='/musicdirectory' render={() => <MusicDirectory musicevent={this.props.music} />} />
                    <Route exact path='/sportsdirectory' render={() => <SportsDirectory sportsevent={this.props.sports} />} />
                    <Route exact path='/volunteerdirectory' render={() => <VolunteerDirectory volunteerevent={this.props.volunteer} />} />
                    <Route path='/artdirectory/:arteventId' component={EventWithId} />
                    <Route path='/musicdirectory/:musiceventId' component={EventWithId} />
                    <Route path='/sportsdirectory/:sportseventId' component={EventWithId} />
                    <Route path='/volunteerdirectory/:volunteereventId' component={EventWithId} />
                    <Route path='/contactus' component={Contact} />
                    <Route path='/calendar' component={Calendar} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
