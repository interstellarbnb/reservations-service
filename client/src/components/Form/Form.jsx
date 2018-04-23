import React, { Component } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import Guests from '../Guests/Guests';
import Book from '../Book/Book';
import PriceBreakdown from '../PriceBreakdown/PriceBreakdown';
import { Container, Small } from '../styles';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      guests: 1,
    };

    this.incrementGuests = this.incrementGuests.bind(this);
    this.decrementGuests = this.decrementGuests.bind(this);
  }

  dayIsBlocked(date) {
    const { listing: { reservations } } = this.props;
    const jsDate = date.toDate();

    return reservations.map(({ start, end }) => (
      jsDate <= new Date(end.$date) && jsDate >= new Date(start.$date)
    )).reduce((wasTrue, current) => {
      if (wasTrue) return true;
      return current;
    }, false);
  }

  incrementGuests() { this.setState({ guests: this.state.guests + 1 }); }

  decrementGuests() { this.setState({ guests: this.state.guests - 1 }); }

  render() {
    const dateProps = {
      startDatePlaceholderText: 'Check in',
      endDatePlaceholderText: 'Check out',
      numberOfMonths: 1,
      isDayBlocked: this.dayIsBlocked.bind(this),
    };

    return (
      <div>
        <Container>
          <div>
            <Small>Dates</Small>
          </div>
          <DateRangePicker
            {...dateProps}
            startDateId="startDate"
            endDateId="endDate"
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }); }}
            focusedInput={this.state.focusedInput}
            onFocusChange={(focusedInput) => { this.setState({ focusedInput }); }}
          />
        </Container>
        <Guests
          guests={this.state.guests}
          onIncrement={this.incrementGuests}
          onDecrement={this.decrementGuests}
        />
        {
          this.state.endDate ?
            <PriceBreakdown
              listing={this.props.listing}
              guests={this.state.guests}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
            />
            : null
        }
        <Book />
        <Small><p>You won’t be charged yet</p></Small>
      </div>
    );
  }
}
