import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowReviews from '../ShowReviews/ShowReviews';
import './Reviews.css'

const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviewdata.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div >

            <Row className='all-carts'>
                {
                    reviews.map(review => <ShowReviews
                        key={review.id}
                        review={review}>
                    </ShowReviews>)
                }
            </Row>
        </div>
    );
};

export default Reviews;