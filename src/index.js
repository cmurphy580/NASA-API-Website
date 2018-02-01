import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import App from './components/App';
import ImageModal from './containers/ImageModal';
import MissionModal from './components/MissionModal';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/mission/:identifier" component={MissionModal} />
          <Route path="/image/:id" component={ImageModal} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
