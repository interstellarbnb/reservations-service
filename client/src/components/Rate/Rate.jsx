import React from 'react';
import ReactStars from 'react-stars';

import { StyledRate, FromDiv, FeeDiv, InlineDiv, Small } from '../styles';

const Rate = ({ listing }) => (
  <StyledRate>
    <FromDiv>From</FromDiv>
    <FeeDiv>${listing.fee}</FeeDiv>
    <Small> per night</Small>
    <InlineDiv>
      <ReactStars
        count={5}
        size={9}
        value={listing.avgStars}
        color1="#D8D8D8"
        color2="#008489"
        edit={false}
      />
      <Small>{listing.reviewCount}</Small>
    </InlineDiv>
  </StyledRate>
);

module.exports = Rate;
