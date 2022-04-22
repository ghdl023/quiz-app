import React, { createContext } from 'react';
import '../../style/StarCompStyle/StarBox.css';

const StarBoxContext = createContext();

export const StarBox = (props) => {

    const value = {};

    return (
        <StarBoxContext.Provider value={value}>
          <div>{props.children}</div>
        </StarBoxContext.Provider>
    );
};

export default StarBox;