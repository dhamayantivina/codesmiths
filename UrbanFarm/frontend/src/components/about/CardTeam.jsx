import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';

function CardTeam() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const distance = {
        paddingLeft: '10px',
        paddingRight: '10px',
    };


    return (
        <div className='container'>
            <h3 style={{ textAlign: 'center' }}>Our Team</h3>
            <Carousel responsive={responsive} itemClass={distance}>
                <div className='cards'>
                    <Card style={{ width: '15rem', height: '20rem', }}>
                        <Card.Img variant="top" src="./public/tentang kami/image1.png" />
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Putra Ganda Dewata</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>Hustler/PM</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cards'>
                    <Card style={{ width: '15rem', height: '20rem' }}>
                        <Card.Img variant="top" src="./public/tentang kami/image1.png" />
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Sugini Injani</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>Hipster</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cards'>
                    <Card style={{ width: '15rem', height: '20rem' }}>
                        <Card.Img variant="top" src="./public/tentang kami/image1.png" />
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Dewangga Nanda A</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>Scrum Master/Hacker</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cards'>
                    <Card style={{ width: '15rem', height: '20rem' }}>
                        <Card.Img variant="top" src="./public/tentang kami/image1.png" />
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Novia Indah R</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>Hipster</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cards'>
                    <Card style={{ width: '15rem', height: '20rem' }}>
                        <Card.Img variant="top" src="./public/tentang kami/image1.png" />
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Abdul Malik D S</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>Hipster</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cards'>
                    <Card style={{ width: '15rem', height: '20rem' }}>
                        <Card.Img variant="top" src="./public/tentang kami/image1.png" />
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Alexandro Bilvilson D</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>Scrum Mater/Hacker</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cards'>
                    <Card style={{ width: '15rem', height: '20rem' }}>
                        <Card.Img variant="top" src="./public/tentang kami/image1.png" />
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Nabilah Rahmah H</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>Hipster</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cards'>
                    <Card style={{ width: '15rem', height: '20rem' }}>
                        <Card.Img variant="top" src="./public/tentang kami/image1.png" />
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>M Faiz Nurrochman</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>Hacker</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cards'>
                    <Card style={{ width: '15rem', height: '20rem' }}>
                        <Card.Img variant="top" src="./public/tentang kami/image1.png" />
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Vina Dhamayanti</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>Hacker</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='cards'>
                    <Card style={{ width: '15rem', height: '20rem' }}>
                        <Card.Img variant="top" src="./public/tentang kami/image1.png" />
                        <Card.Body>
                            <Card.Title style={{textAlign:"center"}}>Revon Anandiya</Card.Title>
                            <Card.Text style={{textAlign:"center"}}>Hacker</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Carousel>
        </div>
    );
}

export default CardTeam;
