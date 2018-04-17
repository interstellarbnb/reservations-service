import React, { Component } from 'react';
import axios from 'axios';

import Rate from '../Rate/Rate';
import Line from '../Line/Line';
import Form from '../Form/Form';
import { Container } from '../styles';

class Reservations extends Component {
  constructor() {
    super();
    this.state = {
      listing: {},
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

  async addReservation(startDate, endDate) {
    const { listing: { id } } = this.state;
    const reservationParams = {
      startDate,
      endDate,
    };
    await axios.post(`/listing/${id}`, reservationParams);
  }

  render() {
    const { listing } = this.state;

    return (
      <Container>
        <Rate listing={listing} />
        <Line />
        <Form listing={listing} />
        <Line />
      </Container>
    );
  }
}

module.exports = Reservations;
