import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import HomeReview from '../HomeReview/HomeReview';
import BMW from './BMW.jpg';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviewdata.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    let newReviews = reviews.slice(3);
    // console.log(newReviews)
    const nevigate = useNavigate()

    return (
        <div className='total-body'>
            <div className='home-head'>
                <div className='head-text'>
                    <h1>BMW <span>007</span></h1>
                    <h1>Get The James <span>Bond BMW</span></h1>
                    <p>The acronym BMW stands for Bayerische Motoren Werke GmbH, which roughly translates to the Bavarian Engine Works Company. The name harks back to the company’s origin in the German state of Bavaria. It also indicates BMW's original product range: engines for various applications.</p>
                </div>
                <div className='head-img'>
                    <img className='bmw-img' src={BMW} alt="" />
                </div>
            </div>

            <h1 className='title'><span>Customer Reviews</span></h1>
            <Row className='all-carts '>
                {
                    newReviews.map(review => <HomeReview
                        key={review.id}
                        review={review}
                    >
                    </HomeReview>)
                }

                <button className='btn-review' onClick={() => nevigate('/reviews')}>See All Reviews</button>
            </Row>

        </div>
    );
};

export default Home;