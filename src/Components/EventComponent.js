import React from 'react';
import { Link } from 'react-router-dom';


function Event(props) {
    return (
        <div className="container">
            <div className="row row-content align-items-center">
                <div className="col-sm-3 my-auto">
                    <h3><Link to='/artdirectory'>Arts and Theater</Link></h3>
                </div>
                <div className="col-sm-5  my-auto">
                    <p>Live theater (plays/musicals), art festivals, museum exhibition openings, and lectures.</p>
                </div>
                <img className="ml-5 img-thumbnail d-none d-md-block" src={require("../images/Arts_Playbill.png")} id="artsImage" alt="Performance Playbill" />
            </div>

            <div className="row row-content align-items-center">
                <div className="col-sm-3  my-auto">
                    <h3><Link to='/musicdirectory'>Music</Link></h3>
                </div>
                <div className="col-sm-5 my-auto">
                    <p>Concerts, open mic nights, symphonies, and festivals.</p>
                </div>
                <img className="ml-5 img-thumbnail d-none d-md-block" src={require("../images/Music_Apocalyptica.png")} alt="Apocalyptica Band" />
            </div>

            <div className="row row-content">
                <div className="col-sm-3 my-auto">
                    <h3><Link to='/sportsdirectory'>Sports</Link></h3>
                </div>
                <div class="col-sm-5 my-auto">
                    <p>Local minor league sports, surfing competitions, roller derby, and guided hikes.</p>
                </div>
                <img className="ml-5 img-thumbnail d-none d-md-block" src={require("../images/Viking_Shoot.png")} alt="Archery Practice" />
            </div>

            <div className="row row-content">
                <div className="col-sm-3 my-auto">
                    <h3><Link to='/volunteerdirectory'>Volunteer</Link></h3>
                </div>
                <div className="col-sm-5 my-auto">
                    <p>Looking for a way to help out your community this weekend? Find it here!</p>
                </div>
                <img className="ml-5 img-thumbnail d-none d-md-block" src={require("../images/Volunteer_Mural.png")} alt="Mural painted by volunteer" />
            </div>
        </div>

    );
}

export default Event;