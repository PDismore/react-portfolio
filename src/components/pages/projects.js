import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import datenight from '../images/datenight.gif';
import jate from '../images/JATE.png';
import PokeNect from '../images/Pokenect.png';
import CuttingEdge from '../images/CuttingEdgePro.png'

function Projects() {
    return (
        <div className='mt-3 mb-3'>
            <CardGroup className="my-3 mx-3">
                <Card className=" mx-3 " >
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Cutting Edge Pro</Card.Title>
                        <Card.Text>
                            This is a react app that I designed along with 3 classmates. It uses GraphQL and React to create a storefront for a laser cutting business.
                        </Card.Text>
                        <Card.Link href="https://github.com/MichaelZimm20/cutting-edge-pro">Github</Card.Link>
                        <Card.Link href="https://dry-wildwood-44635.herokuapp.com/">Deployed Link</Card.Link>
                    </Card.Body>

                </Card>
                <Card className=" mx-3 " >
                    <Card.Img variant="top" src={PokeNect} />
                    <Card.Body>
                        <Card.Title>PokeNect</Card.Title>
                        <Card.Text>
                            This app is a social media site based around Pokemon, with users being able to create profiles and posts, follow others and see posts made by other users.
                        </Card.Text>
                        <Card.Link href="https://github.com/PDismore/PokeNect">Github</Card.Link>
                        <Card.Link href="https://dry-wildwood-44635.herokuapp.com/">Deployed Link</Card.Link>
                    </Card.Body>

                </Card>

                <Card className=" mx-3 " >
                    <Card.Img variant="top" src={datenight} />
                    <Card.Body>
                        <Card.Title>Movie Night Selector</Card.Title>
                        <Card.Text>
                            This app uses the Watchmode API to search a movie or show title, and tells the user which streaming service has the title, as well as links to the streaming services webpage.
                        </Card.Text>
                        <Card.Link href="https://github.com/PDismore/Date-Night-Streaming-Generator">Github</Card.Link>
                        <Card.Link href="https://pdismore.github.io/Date-Night-Streaming-Generator/">Deployed Link</Card.Link>
                    </Card.Body>

                </Card>


            </CardGroup>
            <CardGroup className="my-3 mx-3">

                <Card className=" mx-3 " >
                    <Card.Img variant="top" src={CuttingEdge} />
                    <Card.Body>
                        <Card.Title>Cutting Edge Pro</Card.Title>
                        <Card.Text>
                            An e-commerece React app that uses GraphQL for the backend and allows users to upload an image to be used.
                        </Card.Text>
                        <Card.Link href="https://github.com/MichaelZimm20/cutting-edge-pro">Github</Card.Link>
                        <Card.Link href="https://cutting-edge-pro-max.herokuapp.com/ ">Deployed Link</Card.Link>
                    </Card.Body>

                </Card>

                <Card className=" mx-3 " >
                    <Card.Img variant="top"  src={jate} />
                    <Card.Body>
                        <Card.Title>J.A.T.E</Card.Title>
                        <Card.Text>
                            This is a Progressive Web Application that is a web based text editor that can be used either offline or installed on a device.
                        </Card.Text>
                        <Card.Link href="https://github.com/PDismore/Just-Another-Text-Editor">Github</Card.Link>
                        <Card.Link href="https://shielded-beach-53213.herokuapp.com/ ">Deployed Link</Card.Link>
                    </Card.Body>

                </Card>


                <Card className=" mx-3 " >
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Your Project here!</Card.Title>
                        <Card.Text>
                            I am always looking for new projects!
                        </Card.Text>
                    </Card.Body>

                </Card>

            </CardGroup>
        </div>

    );
}

export default Projects;