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
           <Col className='centered' xs={6} md={4}><code><h4 className='black'>beatrice</h4><img src={img1} height={130} width={125}/><h4 className='blue'>{revw1}</h4></code></Col>
           <Col className='centered' xs={6} md={4}><code><h4 className='black'>gertrude</h4><img src={img2} height={130} width={125}/><h4 className='blue'>{revw2}</h4></code></Col>
           <Col className='centered' xs={6} md={4}><code><h4 className='black'>meridith</h4><img src={img3} height={130} width={125}/><h4 className='blue'>{revw3}</h4></code></Col>
         </Row>
        </Grid>
      </div>
    )
  }
}
