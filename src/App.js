// import logo from './logo.svg';
import React, {Component} from 'react'

import Menu from "./components/MenuComponent";
import "./App.css";
import {DISHES} from './shared/dishes'
import {COMMENTS} from './shared/Comments'
import {LEADERS} from './shared/leaders'
import {PROMOTIONS} from './shared/promotions'
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import {BrowserRouter,Routes,Route} from'react-router-dom'
import Home from './components/HomeComponent';
import Contact from './components/ContactComponent';

class App extends Component{
  constructor(props) {
    super(props);

    this.state={
      dishes:DISHES,
      comments:COMMENTS,
      leaders:LEADERS,
      promotions:PROMOTIONS

    }
  }
  render(){
  return (
    <BrowserRouter>
 
     <Header/>

    <Routes>
      <Route path='/menu' element={<Menu dishes={this.state.dishes} comments={this.state.comments}/>}/>
      <Route exact path='/home' element={<Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}leader={this.state.leaders.filter((leader) => leader.featured)[0]} promotion={this.state.promotions.filter((promo) => promo.featured)[0]}/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
    </Routes>
      <Footer/>
    </BrowserRouter>

  )}
}

export default App;
