import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import MainView from './components/MainView';
import reducers from './reducers';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const element = document.getElementById('root');
if (!element) {
  throw new Error("couldn't find element with id root")
}
render(
    <Provider store={store}>
      <MainView />
    </Provider>,
    element
);