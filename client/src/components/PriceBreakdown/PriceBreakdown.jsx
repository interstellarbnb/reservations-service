import React from 'react';

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

export default PriceBreakdown;
