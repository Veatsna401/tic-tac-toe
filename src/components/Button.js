import React from 'react';

const Button = ({label, onClick}) => {
  return (
    <button className="reset-btn" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
