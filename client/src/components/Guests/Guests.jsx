import React, { Component } from 'react';
import { number, func } from 'prop-types';

import GuestsDisplay from '../GuestsDisplay/GuestsDisplay';
import { Container, GuestBtn, Small } from '../styles';

export default class Guests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayGuests: false,
    };

    this.setDisplayGuests = this.setDisplayGuests.bind(this);
  }

  setDisplayGuests() {
    this.setState({ displayGuests: !this.state.displayGuests });
  }

  renderGuestsString() {
    return this.props.guests > 1 ? `${this.props.guests} guests` : '1 guest';
  }

  renderGuestsDisplay() {
    if (this.state.displayGuests) {
      return (<GuestsDisplay
        adults={this.props.adults}
        childs={this.props.childs}
        infants={this.props.infants}
        onIncrementAdults={this.props.onIncrementAdults}
        onDecrementAdults={this.props.onDecrementAdults}
        onIncrementChildren={this.props.onIncrementChildren}
        onDecrementChildren={this.props.onDecrementChildren}
        onIncrementInfants={this.props.onIncrementInfants}
        onDecrementInfants={this.props.onDecrementInfants}
      />);
    }
  }

  render() {
    return (
      <Container>
        <Small>Guests</Small>
        <GuestBtn onClick={this.setDisplayGuests}>
          { this.renderGuestsString() }
        </GuestBtn>
        { this.renderGuestsDisplay() }
      </Container>
    );
  }
}

Guests.propTypes = {
  guests: number.isRequired,
  adults: number.isRequired,
  childs: number.isRequired,
  infants: number.isRequired,
  onIncrementAdults: func.isRequired,
  onDecrementAdults: func.isRequired,
  onIncrementChildren: func.isRequired,
  onDecrementChildren: func.isRequired,
  onIncrementInfants: func.isRequired,
  onDecrementInfants: func.isRequired,
};
