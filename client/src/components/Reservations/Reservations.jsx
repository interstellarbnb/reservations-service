import React, { Component } from 'react';
import axios from 'axios';

import Rate from '../Rate/Rate';

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
          -------------------
        </div>
        <div className="container">
          Dates Component Goes Here
        </div>
        <div className="container">
          Guests Component Goes Here
        </div>
        <div className="container">
          -------------------
        </div>
        <div className="container">
          Book Component Goes Here
        </div>
        <div className="container">
          Views Component Goes Here
        </div>
      </div>
    );
  }
}

module.exports = Reservations;
