import React, { Component } from 'react';

import GuestsDisplay from '../GuestsDisplay/GuestsDisplay';
import { Container, GuestBtn, Small } from '../styles';

class Guests extends Component {
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

  render() {
    const { displayGuests } = this.state;
    return (
      <Container>
        <Small>Guests</Small>
        <GuestBtn onClick={this.setDisplayGuests}>
          {this.props.guests > 1 ? `${this.props.guests} guests` : '1 guest'}
        </GuestBtn>
        {
          displayGuests ?
            <GuestsDisplay
              guests={this.props.guests}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
            />
            : null
        }
      </Container>
    );
  }
}

export default Guests;
