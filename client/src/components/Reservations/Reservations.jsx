import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Rate from '../Rate/Rate';
import Line from '../Line/Line';
import Dates from '../Dates/Dates';
import Guests from '../Guests/Guests';
import Book from '../Book/Book';
import Views from '../Views/Views';

class Reservations extends Component {
  constructor() {
    super();
    this.state = {
      listing: [],
    };
  }

  componentDidMount() {
    this.getListing(1);
  }

  async getListing(id) {
    try {
      const { data } = await axios.get(`/listing/${id}`);
      const listing = data;
      this.setState({
        listing,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { listing } = this.state;

    const Container = styled.div`
    `;

    return (
      <Container>
        <Rate listing={listing} />
        <Line />
        <Dates listing={listing} />
        <Guests listing={listing} />
        <Book listing={listing} />
        <Line />
        <Views listing={listing} />
      </Container>
    );
  }
}

module.exports = Reservations;
