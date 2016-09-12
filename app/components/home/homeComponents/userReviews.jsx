import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { table, tbody, tr, Grid, Row, Col, code,img } from 'react-bootstrap';

export default class UserReviews extends Component {
  render(){
    var {pictures, img1, img2, img3, revw1, revw2, revw3} = this.props
    return (
      <div className="reviews-background">
      <Grid>
        <Row>
          <Col className="text-center user-reviews-header" md={12}><h1>User Reviews</h1></Col>
          <Col className="text-center user-review-slogan" md={12}><h3>Stop by our location to see what all the hype is about</h3></Col>

        </Row>
        <br></br>
         <Row>
           <Col className='text-center' xs={6} md={4}><h4>Caitlin</h4><img src={img1} height={170} width={190}/><hr></hr><h4>{revw1}</h4></Col>

           <Col className='text-center' xs={6} md={4}><h4>Samantha</h4><img src={img2} height={170} width={190}/><hr></hr><h4>{revw2}</h4></Col>

           <Col className='text-center' xs={6} md={4}><h4>Avery</h4><img src={img3} height={170} width={190}/><hr></hr><h4>{revw3}</h4></Col>

         </Row>

        </Grid>
      </div>
    )
  }
}
