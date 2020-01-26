import { React,Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Dishdetail extends Component{


constructor(props){

super(props);
this.state={
selectedDish:null
};

}
render(){
    const  dish=this.props.selectedDish.map(dish){
if (dish != null)
      return(
          <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
          </Card>
      );
  else
      return(
          <div></div>
      );
      }

      return (
      <div className="row">
      <div  className="col-12 col-md-5 m-1">
      {dish}
      </div>
    </div>
      );

}


}
export default Dishdetail;