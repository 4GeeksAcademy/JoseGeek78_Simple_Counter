import React from 'react';

const Number = ({ num, sixDigits }) => (
    // <div className={`number ${sixDigits ? 'number-six-digits' : ''}`}>{num}</div>
    <div className="number number-six-digits">{num}</div>
);

export default Number;