// json-server --watch db.json -d 2000 -p 3001 command to run json-server
import React, { Component } from 'react'
import Main from './components/MainComponent'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store=ConfigureStore()
export default class App extends Component {
  render() {    

    return (
      <Provider store={store}>
      <BrowserRouter>
      <div>
          <Main/>
      </div>
      </BrowserRouter>
      </Provider>
    )   
  }
}

