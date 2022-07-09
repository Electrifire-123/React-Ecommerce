import React from "react";

const Button =(props) => {

    const { className = "", type = "", buttonText, onClick } = props;
    return (
      <button
        className={className}
        type={type}
        onClick={() => {
          if (onClick) onClick();
        }}
      >
        {buttonText}
      </button>
    );
  }


export default Button;