import React from 'react';
import { shape, number, array } from 'prop-types';

import Line from '../Line/Line';
import { LeftItem, RightItem, Container, SpaceBetween } from '../styles';

const PriceBreakdown = ({
  listing,
  adults,
  startDate,
  endDate,
}) => {
  const nightsCount = endDate.diff(startDate, 'days');
  const feePerNight = listing.fee + (listing.feeModifier * Math.round(Math.ceil(adults - 2, 0) / 2));
  return (
    <Container>
      <SpaceBetween>
        <LeftItem>${feePerNight} x {nightsCount} {nightsCount > 1 ? 'nights' : 'night'}</LeftItem>
        <RightItem>${feePerNight * nightsCount}</RightItem>
      </SpaceBetween>
      <Line />
      <SpaceBetween>
        <LeftItem>Cleaning Fee</LeftItem>
        <RightItem>$100</RightItem>
      </SpaceBetween>
      <Line />
      <SpaceBetween>
        <LeftItem>Service Fee</LeftItem>
        <RightItem>$95</RightItem>
      </SpaceBetween>
      <Line />
      <SpaceBetween>
        <LeftItem>Total</LeftItem>
        <RightItem>${(feePerNight * nightsCount) + 100 + 95}</RightItem>
      </SpaceBetween>
    </Container>
  );
};

PriceBreakdown.propTypes = {
  listing: shape({
    id: number.isRequired,
    reservations: array.isRequired,
    reviewCount: number.isRequired,
    avgStars: number.isRequired,
    fee: number.isRequired,
    feeModifier: number.isRequired,
    maxGuests: number.isRequired,
  }).isRequired,
  adults: number.isRequired,
};

export default PriceBreakdown;
