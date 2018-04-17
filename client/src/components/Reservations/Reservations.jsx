import React, { Component } from 'react';
import axios from 'axios';

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
    return (
      <div>
        Reservations rendered successfully!
      </div>
    );
  }
}

module.exports = Reservations;
