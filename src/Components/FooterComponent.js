import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row row-content">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/events'>Events</Link></li>
                            <li><Link to='/calendar'>Calendar</Link></li>
                            <li><Link to='/contactus'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <SocialIcon url="http://instagram.com/" />{' '}
                        <SocialIcon url="http://facebook.com/" />{' '}
                        <SocialIcon url="http://twitter.com/" />{' '}
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="mailto:WhatsUpNC@gmail.com"><i className="fa fa-envelope-o" /> WhatsUpNC@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;