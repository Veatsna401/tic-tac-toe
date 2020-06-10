import React from 'react';

const Square = ({value, onClick}) => {
  return (
    <button className="square" onClick={onClick}>
      <div>
        {value && <img src={value} alt="babies" width="130" height="130" />}
      </div>
    </button>
  );
}

export default Square;
