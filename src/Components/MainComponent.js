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
import ArtEventInfo from './ArtEventInfoComponent';
import MusicEventInfo from './MusicEventInfoComponent';
import SportsEventInfo from './SportsEventInfoComponent';
import VolunteerEventInfo from './VolunteerEventInfoComponent';
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

        const ArtEventWithId = ({ match }) => {
            return ( 
                    <ArtEventInfo artevent={this.state.arts.filter(artevent => artevent.id ===
                        +match.params.arteventId)[0]} />    
                );
            }

        const MusicEventWithId = ({ match }) => {
            return (
                <MusicEventInfo musicevent={this.state.music.filter(musicevent => musicevent.id ===
                    +match.params.musiceventId)[0]} />
            );
        }

        const SportsEventWithId = ({ match }) => {
            return (
                <SportsEventInfo sportsevent={this.state.sports.filter(sportsevent => sportsevent.id ===
                    +match.params.sportseventId)[0]} />
            );
        }

        const VolunteerEventWithId = ({ match }) => {
            return (
                <VolunteerEventInfo volunteerevent={this.state.volunteer.filter(volunteerevent => volunteerevent.id ===
                    +match.params.volunteereventId)[0]} />
            );
        }


        return (
            <div>
                <Header />
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/events' component={Event} />
                            <Route exact path='/artdirectory' render={() => <ArtDirectory arts={this.state.arts} />} />
                            <Route exact path='/musicdirectory' render={() => <MusicDirectory music={this.state.music} />} />
                            <Route exact path='/sportsdirectory' render={() => <SportsDirectory sports={this.state.sports} />} />
                            <Route exact path='/volunteerdirectory' render={() => <VolunteerDirectory volunteer={this.state.volunteer} />} />
                            <Route path='/artdirectory/:arteventId' component={ArtEventWithId} />
                            <Route path='/musicdirectory/:musiceventId' component={MusicEventWithId} />
                            <Route path='/sportsdirectory/:sportseventId' component={SportsEventWithId} />
                            <Route path='/volunteerdirectory/:volunteereventId' component={VolunteerEventWithId} />
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
