import React from 'react';
import '../../style/StarCompStyle/Star.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Star = () => {
    return (
        <>
            <FontAwesomeIcon icon={faStar} color="yellow"/>
        </>
    );
};

export default Star;