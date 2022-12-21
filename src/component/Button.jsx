import React from 'react';

const Button = props => {
  return (
    <button className='text-gray-400 hover:text-primaryColor border border-primaryColor py-2 px-6'>
      {props.text}
    </button>
  );
};

export default Button;
