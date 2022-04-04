import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ShowReviews.css'

const ShowReviews = (props) => {

    const { name, comment, picture, raiting } = props.review;
    return (
        <Col sm={12} md={4}>
            <Card style={{ width: '23rem', marginBottom: '30px ' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title className='title' > {name}</Card.Title>
                    <Card.Text>{comment}</Card.Text>
                    <Card.Text> <span className='rating'> Rating: </span> {raiting} / 5</Card.Text>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default ShowReviews;