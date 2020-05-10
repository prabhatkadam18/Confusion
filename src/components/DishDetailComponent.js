import React, { Component } from 'react';
import {CardText, CardImg, Card, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component{


  renderDish(dish){
    if(dish){
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardBody>
              <CardImg width="100%" src = {dish.image} alt={dish.name}/>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderComments(dish){
    if(dish){
      return(
        <div className="col-12 col-md-5 m-1">
          <div>
            <h4>Comments</h4>
          </div>
          <div>
            {dish.comments.map((comment)=>{
              if(comment!=null)
                return (
                  <ul  key={comment.id} className="list-unstyled">
                    <li>{comment.comment}</li>
                    <li>--{comment.author} , {new Intl.DateTimeFormat('en-US',{ year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(comment.date))}</li>
                  </ul>
                );
              else 
                return <div></div>;
            })}
          </div>
             
        </div>
      )
    } else {
      return <div></div>;
    }
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          {this.renderDish(this.props.dish)}
          {this.renderComments(this.props.dish)}
        </div>
      </div>
    );
  }
}

export default DishDetail;