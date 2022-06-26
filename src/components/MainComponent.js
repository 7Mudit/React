import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/Comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { Routes, Route, useParams } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,  // lifting the state up
            comments: COMMENTS, 
            leaders: LEADERS, 
            promotions: PROMOTIONS
        };
    }

    render() {

        const DishWithId = () => {
            const {dishId}=useParams()
            return (
                // 10 -> base 10
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(dishId,10))[0]} 
                    comments={this.state.comments.filter((comment) => comment.id === parseInt(dishId,10))}
                />
            );
        }  

        return (
            <div>
                <Header />
                    <Routes> 
                        <Route path='/home' element={ <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}    
                />} />
                        <Route exact path="/menu" element={ <Menu dishes={this.state.dishes} />} />
                        <Route path="/menu/:dishId" element={<DishWithId/>}/>
                        <Route exact path="/contactus" element={<Contact/>} />
                        <Route exact path="/aboutus" element={ <About leaders={this.state.leaders} />} />
                    </Routes>
                <Footer />
            </div>
        );
    }
}

export default Main;
