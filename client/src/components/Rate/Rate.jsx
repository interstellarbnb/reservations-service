import React from 'react';

import Stars from '../Stars/Stars';

const Rate = ({ listing }) => (
  <div className="container">
    <div>From</div>
    <div>{listing.fee}
      <span> per night</span>
    </div>
    <div id="reviews">
      <Stars stars={listing.avgStars} />
      <div>{listing.views}</div>
    </div>
  </div>
);

module.exports = Rate;
