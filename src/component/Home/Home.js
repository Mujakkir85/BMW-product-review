import React from 'react';
import BMW from './BMW.jpg';
import './Home.css'

const Home = () => {
    return (
        <div>
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
        </div>
    );
};

export default Home;