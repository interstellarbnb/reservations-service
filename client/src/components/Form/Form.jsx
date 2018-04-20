import React, { Component } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import Dates from '../Dates/Dates';
import Guests from '../Guests/Guests';
import Book from '../Book/Book';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      guests: 1,
      displayFeeList: false,
    };
  }

  dayIsNotBlocked(date) {
    const { listing: { reservations } } = this.props;
    // TODO: return true if date should be blocked
  }

  render() {
    const dateProps = {
      startDatePlaceholderText: 'Check in',
      endDatePlaceholderText: 'Check out',
      numberOfMonths: 1,
      isDayBlocked: this.dayIsNotBlocked.bind(this),
    };

    return (
      <div>
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
        <Guests />
        {this.state.displayFeeList ? <Book /> : null}
      </div>
    );
  }
}
