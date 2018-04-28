import React from 'react';
import styled from 'styled-components';
import { number, func } from 'prop-types';

import { SpaceBetween, SpaceAround } from '../styles';

const Display = styled.div`
  background: #ffffff;
  position: absolute;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.07);
  border-radius: 3px;
  width: 100%;
  min-width: 280px;
  text-align: left;
  padding: 0 16px;
  margin-bottom: 16px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 2;
  left: 0px;
`;

const SubContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const Toggle = styled.div`
  display: flex;
  flex-direction: row;
  vertical-align: middle;
`;

const Label = styled.div`
  width: 100% !important;
  vertical-align: middle !important;
  text-align: left !important;
`;

const GuestsDisplay = ({ adults,
  childs,
  infants,
  onIncrementAdults,
  onDecrementAdults,
  onIncrementChildren,
  onDecrementChildren,
  onIncrementInfants,
  onDecrementInfants,
}) => (
  <Display>
    <SubContainer>
      <SpaceBetween>
        <Label>
          Adults
        </Label>
        <Toggle>
          <button onClick={onDecrementAdults}>-</button>
          {adults}
          <button onClick={onIncrementAdults}>+</button>
        </Toggle>
      </SpaceBetween>
    </SubContainer>
    <SubContainer>
      <SpaceBetween>
        <Label>
          Children
        </Label>
        <Toggle>
          <button onClick={onDecrementChildren}>-</button>
          {childs}
          <button onClick={onIncrementChildren}>+</button>
        </Toggle>
      </SpaceBetween>
    </SubContainer>
    <SubContainer>
      <SpaceBetween>
        <Label>
          Infants
        </Label>
        <Toggle>
          <button onClick={onDecrementInfants}>-</button>
          {infants}
          <button onClick={onIncrementInfants}>+</button>
        </Toggle>
      </SpaceBetween>
    </SubContainer>
  </Display>
);

GuestsDisplay.propTypes = {
  adults: number.isRequired,
  childs: number.isRequired,
  infants: number.isRequired,
  onIncrementAdults: func.isRequired,
  onDecrementAdults: func.isRequired,
  onIncrementChildren: func.isRequired,
  onDecrementChildren: func.isRequired,
  onIncrementInfants: func.isRequired,
  onDecrementInfants: func.isRequired,
}

export default GuestsDisplay;
