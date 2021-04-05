import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles.scss';

import Home from './components/pages/Home';
import About from './components/pages/About';

import ItemState from './context/item/ItemState';

const App = () => {
  return (
    <ItemState>
      <Router>
        <Fragment>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ItemState>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
