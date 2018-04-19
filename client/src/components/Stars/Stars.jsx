import React from 'react';
import ReactStars from 'react-stars';

const Stars = ({ stars }) => (
  <div>
    <ReactStars
      count={5}
      size={18}
      value={3}
      color1="#D8D8D8"
      color2="#008489"
      edit={false}
    />
  </div>
);

export default Stars;
