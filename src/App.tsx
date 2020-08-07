import React from 'react';
import {Provider} from 'react-redux';
import store from './components/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      hello world
    </div>
    </Provider>
  );
}

export default App;
