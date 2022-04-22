import React from 'react';
import '../../style/TimerCompStyle/TimerBox.css';
import styled from 'styled-components'

const TimerStyles = styled.div`
    width: 40px;
    height: 40px;
    border: 3px solid #fff;
    border-radius: 50%;
    line-height: 40px;
    margin: 40px auto auto;
`;

const TimerBox = ({ seconds_text }) => {
    return (
        <TimerStyles>
            { seconds_text }
        </TimerStyles>
    );
};

export default TimerBox;