import React from 'react';
import './Stripe.css';

const stripe = () => {
    return(
        <div className="stripe">
            <button className="reset">New Colors</button>
            <span className="message"></span>
            <button className="mode">Easy</button>
            <button className="mode selected">Hard</button>
        </div>
    )
}

export default stripe;