import React from 'react';

const Square = ({value, onClick}) => {
  return (
    <button className="square" onClick={onClick}>
      <div className="babies">
        {value && <img src={value} alt="babies" />}
      </div>
    </button>
  );
}

export default Square;
