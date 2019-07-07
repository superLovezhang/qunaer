import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

import TrainChoose from './pages/trainChoose';
import TrainDate from './pages/trainDate';
import TrainTicket from './pages/trainTicket';
import City from './pages/city';
import TicketDetail from './pages/ticketDetail';
import Pay from './pages/pay';

function App() {
  return (
    <Router>
        <Provider store={store}>
          <Switch>
            <Route path="/" exact component={TrainChoose} />
            <Route path="/train_date" exact component={TrainDate} />
            <Route path="/ticket" exact component={TrainTicket} />
            <Route path="/city/:id" exact component={City} />
            <Route path="/ticket_detail" exact component={TicketDetail} />
            <Route path="/pay" exact component={Pay} />
          </Switch>
        </Provider>
    </Router>
  );
}

export default App;
