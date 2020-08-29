import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from "./MenuComponent";
import DishDetail from './DishDetailComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Contact from './ContactComponent';
import AboutUs from './AboutComponent';
import {connect} from 'react-redux';

const mapStateToProps = state =>{ 
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {

  render(){
    const HomePage = ()=>{
      return (
        <Home dish={this.props.dishes.filter((dish)=> dish.featured)[0]} leader={this.props.leaders.filter(leader=> leader.featured)[0]} promotion={this.props.promotions.filter(promotion=> promotion.featured)[0]} />
      )
    }

    const DishWithId = ({match})=>{
      const {dishId} = match.params;
      return (
        <DishDetail dish={this.props.dishes.filter(dish=> dish.id === parseInt(dishId, 10))[0]} comments={this.props.comments.filter(comment=> comment.dishId === parseInt(dishId,10))} />
      )
    }

    const About = ()=>{
      return (
        <AboutUs leaders={this.props.leaders} />
      )
    }

    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}/> } />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route path="/aboutus" component={About} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
