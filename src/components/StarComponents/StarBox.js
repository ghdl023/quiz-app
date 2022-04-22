import React from 'react';
import Star from './Star';
import '../../style/StarCompStyle/StarBox.css';

const StarBox = ({ length }) => {
    return (
        <div className="star-box">
            {[...Array(length)].map((x, i) =>
                <Star key={i} />
            )}
        </div>
    );
};

export default StarBox;