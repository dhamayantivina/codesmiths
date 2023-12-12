import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';

function Footer() {
    return (
        <Container fluid="md-0">
        <CardGroup style={{ marginTop: '2rem', border: '0'}}>
            <Card style={{ backgroundColor: '#334B35', alignItems: 'center', paddingTop: '1rem', border: '0' }}>
                <Card.Body>
                    <img
                        src='./public/logo/mylogo.png'
                        width="100"
                        height="100"
                        className="d-inline-block align-center"
                        alt="UrbanFarm Logo"
                    />
                </Card.Body>
            </Card>
            <Card style={{ backgroundColor: '#334B35', alignItems: 'center', paddingTop: '1rem', border: '0' }}>
                <Card.Body>
                    <Card.Text style={{ color: '#fff' }}>
                        Website yang menyediakan panduan
                        berkebun untuk ruang terbatas (Urban Farming)
                        dan juga menghubungkan langsung ke
                        marketplace untuk alat, bahan, dan bibit berkebun{' '}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ backgroundColor: '#334B35', alignItems: 'center', paddingTop: '1rem', border: '0' }}>
                <Card.Body>
                    <Card.Title style={{ color: '#fff' }}>Contact</Card.Title>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff", marginLeft: '5px' }}/>
                        <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff", marginLeft: '5px' }}/>
                        <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#ffffff", marginLeft: '5px' }}/>
                    </div>
                    

                    <Card.Title style={{ color: '#fff', marginTop: '1rem' }}>Follow Us</Card.Title>
                    <div>
                        <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff", marginLeft: '5px' }} />
                        <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff", marginLeft: '5px' }} />
                        <FontAwesomeIcon icon={faYoutube} style={{ color: "#ffffff", marginLeft: '5px' }} />
                    </div>
                </Card.Body>
            </Card>
        </CardGroup>
        </Container>
    );
}

export default Footer;
