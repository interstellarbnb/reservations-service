import styled from 'styled-components';

const StyledRate = styled.div`
  margin: 0px;
  word-wrap: break-word;
  font-size: 12px;
  padding-top: 0px;
  padding-bottom: 0px;
  color: #484848;
`;

const FromDiv = styled.div`
  font-weight: normal;
  line-height: 16px;
  letter-spacing: 0.2px;
  `;

const FeeDiv = styled.div`
  font-size: 22px;
  line-height: 28px;
  letter-spacing: -0.2px;
  font-weight: 700;
  display: inline;
  `;

const Small = styled.span`
  line-height: 16px;
  letter-spacing: 0.2px;
  display: inline;
`;

module.exports = {
  StyledRate,
  FromDiv,
  FeeDiv,
  Small,
};
