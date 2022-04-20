import React from 'react';

const LoadingBox = ({setShowQuiz}) => {
    return (
        <div className="question--item intro">
            <h2>퀴즈를 시작하시겠습니까?</h2>
            <button className="question--btn" onClick={()=>setShowQuiz(true)}>START</button>
        </div>
    );
};

export default LoadingBox;