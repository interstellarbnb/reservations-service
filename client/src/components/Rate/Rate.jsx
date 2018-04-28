import React from 'react';

import RateView from '../RateView/RateView';
import Loading from '../Loading/Loading';
import { StyledRate } from '../styles';

const Rate = ({ listing }) => (
  <StyledRate>
    {
      listing !== null ? <RateView listing={listing} /> : <Loading />
    }
  </StyledRate>
);

module.exports = Rate;
