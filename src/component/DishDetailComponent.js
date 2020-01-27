import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap'

export default class DishdetailComponent extends Component {
    render() {
        const renderComments = this.props.dish.comments.map((comment) => 
            <ul className="list-unstyled">
            <li>
                {comment.comment}
            </li>
            <li>
                {comment.author + " " + comment.date}
            </li>
            </ul>
        )
        console.log(this.props.dish)
        return (
            <div className="container">
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h2>Comments</h2>
                    {renderComments}
                </div>
                </div>
            </div>
        )
    }
}