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
      adults: 1,
      children: 0,
      infants: 0,
    };

    this.incrementAdults = this.incrementAdults.bind(this);
    this.decrementAdults = this.decrementAdults.bind(this);
    this.incrementChildren = this.incrementChildren.bind(this);
    this.decrementChildren = this.decrementChildren.bind(this);
    this.incrementInfants = this.incrementInfants.bind(this);
    this.decrementInfants = this.decrementInfants.bind(this);
  }

  dayIsBlocked(date) {
    const { listing: { reservations } } = this.props;
    const jsDate = date.toDate();
    const result = reservations.map(({ start, end }) => (
      jsDate <= new Date(end) && jsDate >= new Date(start)
    )).reduce((wasTrue, current) => {
      if (wasTrue) return true;
      return current;
    }, false);
    return result;
  }

  incrementAdults() {
    this.setState({
      guests: this.state.adults + this.state.children + 1,
      adults: this.state.adults + 1,
    });
  }

  decrementAdults() {
    if (this.state.guests > 1) (this.setState({
      guests: this.state.guests - 1,
      adults: this.state.adults - 1,
    }));
  }

  incrementChildren() {
    this.setState({ children: this.state.children + 1 });
  }

  decrementChildren() {
    if (this.state.children > 0) this.setState({ children: this.state.children - 1 });
  }

  incrementInfants() {
    this.setState({ infants: this.state.infants + 1 });
  }

  decrementInfants() {
    if (this.state.infants > 0) this.setState({ infants: this.state.infants - 1 });
  }

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
          adults={this.state.adults}
          childs={this.state.children}
          infants={this.state.infants}
          onIncrementAdults={this.incrementAdults}
          onDecrementAdults={this.decrementAdults}
          onIncrementChildren={this.incrementChildren}
          onDecrementChildren={this.decrementChildren}
          onIncrementInfants={this.incrementInfants}
          onDecrementInfants={this.decrementInfants}
        />
        {
          this.state.endDate ?
            <PriceBreakdown
              listing={this.props.listing}
              adults={this.state.adults}
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
