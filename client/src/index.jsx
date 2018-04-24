import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import Reservations from './components/Reservations/Reservations';

injectGlobal`
  body {
    font-family: Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.43;
    color: #484848;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <Reservations />,
  document.getElementById('reservations'),
);

const SERVER_URL = 'http://localhost:3004';

module.exports = {
  SERVER_URL,
};

// export default SERVER_URL;
