import styled from 'styled-components';


const Container = styled.div`
  margin: 10px;
  position: relative;
`;

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

const InlineDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const SpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SpaceAround = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const SubLine = styled.div`
  border-bottom: 1px solid #DBDBDB !important;
`;

const LeftItem = styled.div`
  width: 100%;
  margin: 0px;
  word-wrap: break-word;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.2px;
  padding-top: 0px;
  padding-bottom: 0px;
  font-weight: 300;
  display: inline;
`;

const RightItem = styled.div`
  display: table-cell;
  vertical-align: middle;
  margin: 0px;
  word-wrap: break-word;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.2px;
  padding-top: 0px;
  padding-bottom: 0px;
  color: #484848;
  font-weight: 300;
  display: inline;
`;

const BookBtn = styled.button`
  cursor: pointer;
  -webkit-transition: background 0.2s, border-color 0.2s;
  -moz-transition: background 0.2s, border-color 0.2s;
  transition: background 0.2s, border-color 0.2s;
  position: relative;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
  width: 100%;
  font-size: 19px;
  line-height: 22px;
  letter-spacing: undefined;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 700;
  border-width: 2px;
  border-style: solid;
  padding-left: 24px;
  padding-right: 24px;
  min-width: 77.66563145999496px;
  background: #FF5A5F;
  border-color: transparent;
  color: white;
`;

const GuestBtn = styled.button`
  background: #ffffff;
  text-align: left;
  border-radius: 2px;
  padding: 8px;
  line-height: normal;
  display: block;
  width: 100%;
  border: 1px solid #DBDBDB;
  border-radius: 4px;
  width: 100%;
  font-size: 17px;
  font-weight: 200;
  color: #484848;
`;

const GuestTypeBtn = styled.button`
  max-width: 20px;
  max-height: 20px;
  color: #008489 !important;
  background-color: white;
  border: 1px solid #008489;
  border-radius: 50%;
  text-align: center;
  > span {
    vertical-align: center;
  }
`;

const Small = styled.small`
  word-wrap: break-word;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #484848;
  >p {
    text-align: center
  }
`;


module.exports = {
  Container,
  StyledRate,
  FromDiv,
  FeeDiv,
  SpaceBetween,
  SpaceAround,
  InlineDiv,
  SubLine,
  LeftItem,
  RightItem,
  BookBtn,
  GuestBtn,
  GuestTypeBtn,
  Small,
};
