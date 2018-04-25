import React, { Component } from 'react';
import axios from 'axios';

import Rate from '../Rate/Rate';
import Line from '../Line/Line';
import Form from '../Form/Form';
import { Container } from '../styles';
import { SERVER_URL } from '../../index';

class Reservations extends Component {
  constructor() {
    super();
    this.state = {
      listing: {},
    };
  }

  componentDidMount() {
    this.getListing();
  }

  async getListing() {
    console.log(SERVER_URL);
    const id = window.location.pathname.split('/')[1];
    try {
      console.log(id);
      const { data } = await axios.get(`http://localhost:3004/listing/${id}`);
      const listing = data;
      this.setState({
        listing,
      });
    } catch (error) {
      console.log(error);
    }
  }

  addReservation(startDate, endDate) {
    const { listing: { id } } = this.state;
    const reservation = {
      startDate,
      endDate,
    };
    return axios.post(`/reservations/${id}`, reservation);
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
