import React from 'react';

import Line from '../Line/Line';
import { LeftItem, RightItem, Container, SpaceBetween } from '../styles';

const PriceBreakdown = ({
  listing,
  startDate,
  endDate,
}) => {
  const nightsCount = endDate.diff(startDate, 'days');
  return (
    <Container>
      <SpaceBetween>
        <LeftItem>${listing.fee} x {nightsCount} {nightsCount > 1 ? 'nights' : 'night'}</LeftItem>
        <RightItem>${listing.fee * nightsCount}</RightItem>
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
        <RightItem>${(listing.fee * nightsCount) + 100 + 95}</RightItem>
      </SpaceBetween>
    </Container>
  );
};

export default PriceBreakdown;
