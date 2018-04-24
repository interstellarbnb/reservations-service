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

<<<<<<< HEAD
  async getListing(id) {
    console.log(SERVER_URL);
    try {
      console.log(id)
      const { data } = await axios.get(`http://localhost:3004/listing/${id}`);
      const listing = data;
=======
  async getListing() {
    const id = window.location.pathname.split('/')[1];
    try {
      const result = await axios.get(`/listing/${id}`);
      const listing = result.data;
>>>>>>> newReservations
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
