import React from 'react';
import './Game.css';
import Header from '../Header/Header';
import Stripe from '../Stripe/Stripe';
import Container from '../Container/Container';

const game = () => {
    return(
        <div>
            <Header />
            <Stripe />
            <div className="container">
                <Container />
                <Container />
                <Container />
                <Container />
                <Container />
                <Container />
            </div>
        </div>
    )
}

export default game;