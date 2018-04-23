import React from 'react';
import styled from 'styled-components';

import { SpaceBetween } from '../styles';

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

const Toggle = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Label = styled.div`
  width: 100% !important;
  vertical-align: middle !important;
  text-align: left !important;
`;

const GuestsDisplay = ({ guests, onIncrement, onDecrement }) => (
  <Display>
    <SpaceBetween>
      <Label>
        Adults
      </Label>
      <Toggle>
        <button onClick={onIncrement}>^</button>
        {guests}
        <button onClick={onDecrement}>v</button>
      </Toggle>
    </SpaceBetween>
  </Display>
);

export default GuestsDisplay;
