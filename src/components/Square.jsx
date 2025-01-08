import React from 'react'
function Square({ value, onSquareClick }) {
    return (
        <>
            <div className="container">
            <button className="square " onClick={onSquareClick}>
                {value}
            </button>
            </div>
        </>

    );
}


export default Square