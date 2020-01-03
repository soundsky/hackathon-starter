import React from 'react';
import { Container, Row, Col, Card, CardImg } from 'react-bootstrap';
import { CardTitle, CardImgOverlay } from 'reactstrap';
import TracksPage from './TracksPage'

const HomePage = () => {
    return (
        <Container>
            <TracksPage/>
            <Row>
                <Col xs="4">
                    <Card inverse>
                        <CardImg width="100%" src="https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap" />
                        <CardImgOverlay>
                            <CardTitle>Melodic</CardTitle>
                        </CardImgOverlay>
                    </Card>
                    <Card inverse>
                        <CardImg width="100%" src="https://images.pexels.com/photos/1337753/pexels-photo-1337753.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap" />
                        <CardImgOverlay>
                            <CardTitle>Melodic</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </Col>
                <Col xs="8">
                    <h1>Welcome to Soundsky</h1>
                </Col>
            </Row>
        </Container>
    )
}


export default HomePage;