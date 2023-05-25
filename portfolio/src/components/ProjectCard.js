import React from 'react'
//created react components with bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// images
import game from '../assets/225 hardcorememorygame.png';
import JJJ from '../assets/Triple-J-Logo.png';
import profileSnip from '../assets/225 profilepagehtml.png';
import demoSiteImg from '../assets/225 demosite.png';
import flexboxImg from '../assets/225 Flexboxcolumn.png';
import cliImg from '../assets/225 CLI.png';
import jjrBooks from '../assets/jjr-bookstore.png';

const ProjectCard = () => {
    return (
        <div>
            <div className='projectCard'>
                {/* Hardcore Memory Game Team Project */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" className='card-img-top' src={game} alt="Game Snippet" />
                    <Card.Body>
                        <Card.Title className='card-header'>Hardcore Memory Game: Team Project</Card.Title>
                        <Card.Text>
                            HTML, Primer CSS, API Calls, Javascript
                        </Card.Text>
                        <Button className='btn btn-dark' variant="primary" href="https://jengle-dev.github.io/Hardcore-Memory-Game-2023/" target='_blank'>Visit Project</Button>
                    </Card.Body>
                </Card>
            </div>
            {/* Triple J Team Project */}
            <div className='projectCard'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" className='card-img-top' src={JJJ} alt="JJJ Logo" />
                    <Card.Body>
                        <Card.Title>Triple J Event Venue: Team Project</Card.Title>
                        <Card.Text>
                            Node, Tailwind CSS, Javascript, Express, Adobe Illustrator, MVC
                        </Card.Text>
                        <Button className='btn btn-dark' variant="primary" href="https://triple-j-venues.herokuapp.com/" target='_blank'>Visit Project</Button>
                    </Card.Body>
                </Card>
            </div>
            {/* HTML Profile Page */}
            <div className='projectCard'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" className='card-img-top' src={profileSnip} alt="Profile Snippet" />
                    <Card.Body>
                        <Card.Title>My HTML Profile Page</Card.Title>
                        <Card.Text>
                            Node, Bootstrap CSS, Javascript, Express, Adobe Illustrator, MVC
                        </Card.Text>
                        <Button className='btn btn-dark' variant="primary" href="https://jengle-dev.github.io/Personal-Profile-Page/" target='_blank'>Visit Project</Button>
                    </Card.Body>
                </Card>
            </div>
            {/* Demo Site */}
            <div className='projectCard'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" className='card-img-top' src={demoSiteImg} alt="Old Profile Image" />
                    <Card.Body>
                        <Card.Title>Demo Profile Page</Card.Title>
                        <Card.Text>
                            Vanilla HTML & CSS Project
                        </Card.Text>
                        <Button className='btn btn-dark' variant="primary" href="https://jengle-dev.github.io/Demo-Personal-Profile-HTML-CSS/" target='_blank'>Visit Project</Button>
                    </Card.Body>
                </Card>
            </div>
            {/* FlexBox Project */}
            <div className='projectCard'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" className='card-img-top' src={flexboxImg} alt="Purple Box with Glow" />
                    <Card.Body>
                        <Card.Title>Flexbox Project</Card.Title>
                        <Card.Text>
                        Vanilla HTML & CSS
                        </Card.Text>
                        <Button className='btn btn-dark' variant="primary" href="https://jengle-dev.github.io/module-2-mini-project-redo/" target='_blank'>Visit Project</Button>
                    </Card.Body>
                </Card>
            </div>
            {/* CLI Content Management */}
            <div className='projectCard'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" className='card-img-top' src={cliImg} alt="Command Line Interface" />
                    <Card.Body>
                        <Card.Title>CLI: Content Management</Card.Title>
                        <Card.Text>
                            Node.js, dotenv, Express.js, MySQL, Inquirer

                            <p>This is not an html page. This is a command line interface project.</p>
                        </Card.Text>
                        <Button className='btn btn-dark' variant="primary" href="https://drive.google.com/file/d/1KmyHf6bsI5JnXZKTgV4-F2bCP4WvDR1C/view" target='_blank'>Visit Project Recording</Button>
                        <Button className='btn btn-dark' variant="primary" href="https://github.com/jengle-dev/CLI-Content-Management-System" target='_blank'>Visit GitHub Repo</Button>
                    </Card.Body>
                </Card>
            </div>
            {/* JJR Bookstore MERN */}
            <div className='projectCard'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" className='card-img-top' src={jjrBooks} alt="app layout" />
                    <Card.Body>
                        <Card.Title>JJR Bookstore Application</Card.Title>
                        <Card.Text>
                            MERN Stack, MongoDB, Express, React, Node.js, Chakra UI, Javascript, Heroku, TypeScript
                        </Card.Text>
                        <Button className='btn btn-dark' variant="primary" href="https://drive.google.com/file/d/1XEdTHEoxPKQC2t7ERcHkHQNyDmdBnl5s/view" target='_blank'>Visit Project Recording</Button>
                        <Button className='btn btn-dark' variant="primary" href="https://github.com/jengle-dev/JJR-Bookstore" target='_blank'>Visit GitHub Repo</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default ProjectCard;
