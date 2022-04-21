import React from 'react';
import Star from './Star';
import '../../style/StarCompStyle/StarBox.css';

const StarBox = ({ length }) => {
    return (
        <div>
            {[...Array(length)].map((x, i) =>
                <Star key={i} />
            )}
        </div>
    );
};

export default StarBox;