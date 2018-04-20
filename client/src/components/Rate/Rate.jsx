import React from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import ReactStars from 'react-stars';

// import Stars from '../Stars/Stars';
import { StyledRate, FromDiv, FeeDiv, Small } from './styles';

const Rate = ({ listing }) => (
  <StyledRate>
    <Grid>
      <Row>
        <Col sm={6} md={6}>
          <FromDiv>From</FromDiv>
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={6}>
          <FeeDiv>${listing.fee}</FeeDiv>
          <Small> per night</Small>
        </Col>
      </Row>
      <Row>
        <Col sm={3} md={3}>
          <ReactStars
            count={5}
            size={9}
            value={listing.avgStars}
            color1="#D8D8D8"
            color2="#008489"
            edit={false}
          />
        </Col>
        <Col sm={3} md={3}>
          <Small>{listing.reviewCount}</Small>
        </Col>
      </Row>
    </Grid>
  </StyledRate>
);

module.exports = Rate;
