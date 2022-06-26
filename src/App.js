// import logo from './logo.svg';
import React, {Component} from 'react'

import Menu from "./components/MenuComponent";
import "./App.css";
import {DISHES} from './shared/dishes'
import {COMMENTS} from './shared/Comments'
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import {BrowserRouter,Routes,Route} from'react-router-dom'
import Home from './components/HomeComponent';

class App extends Component{
  constructor(props) {
    super(props);

    this.state={
      dishes:DISHES,
      comments:COMMENTS
    }
  }
  render(){
  return (
    <BrowserRouter>
 
     <Header/>

    <Routes>
      <Route path='/menu' element={<Menu dishes={this.state.dishes} comments={this.state.comments}/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
      <Footer/>
    </BrowserRouter>

  )}
}

export default App;
