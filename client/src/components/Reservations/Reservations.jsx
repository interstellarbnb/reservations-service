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
      listing: null,
    };
  }

  componentDidMount() {
    this.getListing();
  }

  async getListing() {
    const id = window.location.pathname.split('/')[1];
    try {
      const { data } = await axios.get(`http://ec2-34-227-30-66.compute-1.amazonaws.com/${id}/listing`);
      // const { data } = await axios.get(`http://localhost:3004/${id}/listing`);
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
      </Container>
    );
  }
}

export default Reservations;
