import React from 'react';

const ExpCard = props => {
  const { data } = props;

  return (
    <div>
      <div>
        <h2>{data.jobTitle}</h2>
        <p>{data.durationdate}</p>
        <p>{data.state1}</p>
        <p>{data.state2}</p>
        <p>{data.state3}</p>
      </div>
    </div>
  );
};

export default ExpCard;
