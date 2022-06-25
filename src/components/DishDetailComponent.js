import React, { Component } from 'react'
import {Card,CardBody,CardText,CardImg,CardTitle} from 'reactstrap'

export default class DishDetail extends Component {
    renderComments(comments,Dishname){
        var commentList=comments.map(Comment=>{
            if(Comment.name===Dishname){
            return(
                    <li key={Comment.id}>
                        {Comment.comment}
                        <br/><br/>
                        --{Comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(Comment.date)))}
                        <br /><br />
                    </li>
            )
    }else{
        return(
            <div></div>
        )
    }})
        return(
            <div className='row col-12 col-md-5 m-1'>
            <h4>Comments</h4>
            <ul className='list-unstyled'>
                   <Card>
                   {commentList}
                   </Card>
          </ul>
        </div>
        )

    }
    renderDish(dish){
        return(
        <div className='row col-12 col-md-5 m-1'>
        <Card>
                   <CardImg width='100%' object src={dish.image} alt={dish.name}/>
                   <CardBody>
                   <CardTitle>{dish.name}</CardTitle>
                   <CardText>{dish.description}</CardText>
                   <CardText>{dish.comments}</CardText>
                   </CardBody>
          </Card>

    </div>
    )

    }
  render() {
    return (
        <div className="container">
        <div className="row">
            {this.renderDish(this.props.dish)}
            {this.renderComments(this.props.comments,this.props.dish.name)}
        </div>
        </div>
    )
  }
}
