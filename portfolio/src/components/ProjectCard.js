import React from 'react'
//created react components with bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// images
import game from "../assets/Hardcore-Memory-Game.png";
import JJJ from "../assets/Triple-J-Logo.png";
import profileSnip from "../assets/HTML-Profile-Snip.png"


const ProjectCard = () => {
    return (
        <div>
            <div className='projectCard'>
                {/* Hardcore Memory Game Team Project */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" className='card-header' src={game} alt="Game Snippet" />
                    <Card.Body>
                        <Card.Title>Hardcore Memory Game: Team Project</Card.Title>
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
                    <Card.Img variant="top" className='card-header' src={JJJ} alt="JJJ Logo" />
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
                    <Card.Img variant="top" className='card-header' src={profileSnip} alt="Profile Snippet" />
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
                    <Card.Img variant="top" className='card-header' src="../assets/demosite.png" alt="Old Profile Image" />
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
                    <Card.Img variant="top" className='card-header' src="../assets/flexboxcolumn.png" alt="Purple Box with Glow" />
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
                    <Card.Img variant="top" className='card-header' src="../assets/CLI-Screenshot.png" alt="Command Line Interface" />
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
        </div>
    );
}

export default ProjectCard;
