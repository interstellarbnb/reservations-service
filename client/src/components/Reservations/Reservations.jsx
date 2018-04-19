import React, { Component } from 'react';
import axios from 'axios';

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
    return (
      <div className="container">
        <div>
          <Rate listing={listing} />
        </div>
        <div className="container">
          <Line />
        </div>
        <div className="container">
          <Dates />
        </div>
        <div className="container">
          <Guests />
        </div>
        <div className="container">
          <Book />
        </div>
        <div className="container">
          <Line />
        </div>
        <div className="container">
          <Views />
        </div>
      </div>
    );
  }
}

module.exports = Reservations;
