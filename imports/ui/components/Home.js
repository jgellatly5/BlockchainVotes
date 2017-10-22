import React, { Component } from 'react';
import {Grid, Row, Col, Panel, Jumbotron, Button, Modal, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

class Home extends Component{
    render() {
        return (
            <div>
                <div className="greywrap">
                    <Jumbotron bsClass="description">
                        <h1>A powerful tool for incorporating advertisments into augmented reality apps!</h1>
                        <p>
                            <LinkContainer to="/learnMore">
                                <Button bsStyle="danger" className="hvr-grow">
                                    Learn More
                                </Button>
                            </LinkContainer>
                        </p>
                    </Jumbotron>
                  </div>
                <footer className="footer-distributed">
                <hr/>
        			{/*<div className="footer-right">
        				<a href="#" className="hvr-grow"><i className="fa fa-facebook"></i></a>
        				<a href="#" className="hvr-grow"><i className="fa fa-twitter"></i></a>
        				<a href="#" className="hvr-grow"><i className="fa fa-linkedin"></i></a>
        				<a href="#" className="hvr-grow"><i className="fa fa-github"></i></a>
        			</div>*/}
        			<div className="footer-left">
        				<p className="footer-links">
        					<a href="/" className="hvr-underline-from-left-white">Home</a>
        					|
                            <a href="/learnMore" className="hvr-underline-from-left-white">FAQ</a>
        					|
        					<a href="/getStarted" className="hvr-underline-from-left-white">Get Started</a>
        					{/*|
        					<a href="#" className="hvr-underline-from-left">API Docs</a>*/}
        					|
        					<a href="/contact" className="hvr-underline-from-left-white">Contact</a>
        				</p>
        				<p>Excursion &copy; 2017</p>
        			</div>
                </footer>
            </div>
        );
    }
};

export default Home;
