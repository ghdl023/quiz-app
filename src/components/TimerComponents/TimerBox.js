import React from 'react';
import '../../style/TimerCompStyle/TimerBox.css';

const TimerBox = ({ seconds_text }) => {
    return (
        <div>
            { seconds_text }
        </div>
    );
};

export default TimerBox;