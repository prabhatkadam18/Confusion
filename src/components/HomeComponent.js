import React from "react";
import { Card, CardBody, CardTitle, CardImg, CardSubtitle, CardText } from "reactstrap";

function RenderCard({item}){
  return (
    <Card>
      <CardImg src={item.image} alt={item.name}/>
      <CardBody>
        <CardTitle>
          {item.name}
        </CardTitle>
        {item.designation && <CardSubtitle>{item.designation}</CardSubtitle> }
        <CardText>{item.description}</CardText>
      </CardBody>  
    </Card>
  );
}



function Home(props) {

  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={ props.dish } />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={ props.leader } />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={ props.promotion } />
        </div>
      </div>
    </div>
  );
}

export default Home;