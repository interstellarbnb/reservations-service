import React from 'react';
import { shape, number, array } from 'prop-types';

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

Rate.propTypes = {
  listing: shape({
    id: number.isRequired,
    reservations: array.isRequired,
    reviewCount: number.isRequired,
    avgStars: number.isRequired,
    fee: number.isRequired,
    feeModifier: number.isRequired,
    maxGuests: number.isRequired,
  }),
};

export default Rate;
