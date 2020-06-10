import React from 'react';

const Square = ({value, onClick}) => {
  console.log({value});
  return (
    <button className="square" onClick={onClick}>
      <div className="face">
        {value && <img src={value} width="130" height="130" />}
      </div>
    </button>
  );
}

export default Square;
