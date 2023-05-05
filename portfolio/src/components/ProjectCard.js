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
            {/* Hardcore Memory Game Team Project */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ game } alt="Game Snippet" />
                <Card.Body>
                    <Card.Title>Hardcore Memory Game: Team Project</Card.Title>
                    <Card.Text>
                        HTML, Primer CSS, API Calls, Javascript
                    </Card.Text>
                    <Button variant="primary" href="https://jengle-dev.github.io/Hardcore-Memory-Game-2023/" target='_blank'>Visit Project</Button>
                </Card.Body>
            </Card>
            {/* Triple J Team Project */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ JJJ } alt="JJJ Logo" />
                <Card.Body>
                    <Card.Title>Triple J Event Venue: Team Project</Card.Title>
                    <Card.Text>
                    Node, Tailwind CSS, Javascript, Express, Adobe Illustrator, MVC
                    </Card.Text>
                    <Button variant="primary" href="https://triple-j-venues.herokuapp.com/" target='_blank'>Visit Project</Button>
                </Card.Body>
            </Card>
            {/* HTML Profile Page */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ profileSnip } alt="Profile Snippet" />
                <Card.Body>
                    <Card.Title>My HTML Profile Page</Card.Title>
                    <Card.Text>
                    Node, Bootstrap CSS, Javascript, Express, Adobe Illustrator, MVC
                    </Card.Text>
                    <Button variant="primary" href="https://jengle-dev.github.io/Personal-Profile-Page/" target='_blank'>Visit Project</Button>
                </Card.Body>
            </Card>
            {/* Demo Site */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../assets/demosite.png" alt="Old Profile Image" />
                <Card.Body>
                    <Card.Title>Demo Profile Page</Card.Title>
                    <Card.Text>
                    Vanilla HTML & CSS Project
                    </Card.Text>
                    <Button variant="primary" href="https://jengle-dev.github.io/Demo-Personal-Profile-HTML-CSS/">Visit Project</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProjectCard;
