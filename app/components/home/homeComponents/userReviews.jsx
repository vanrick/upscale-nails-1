import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { table, tbody, tr, Grid, Row, Col, code,img } from 'react-bootstrap';

export default class UserReviews extends Component {
  render(){
    var {pictures, img1, img2, img3, revw1, revw2, revw3} = this.props
    return (
      <div>
       <Grid>
         <Row>
           <Col className='text-center' xs={6} md={4}><h4>Caitlin</h4><img src={img1} height={130} width={125}/><h4>{revw1}</h4></Col>
           <Col className='text-center' xs={6} md={4}><h4>Samantha</h4><img src={img2} height={130} width={125}/><h4>{revw2}</h4></Col>
           <Col className='text-center' xs={6} md={4}><h4>Avery</h4><img src={img3} height={130} width={125}/><h4>{revw3}</h4></Col>
         </Row>
        </Grid>
      </div>
    )
  }
}
