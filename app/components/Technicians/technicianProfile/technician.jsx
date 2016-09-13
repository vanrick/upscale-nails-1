import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import { a, i, A, p, br, dt, dd, dl, table, tbody, tr, Grid, Row, Col, code, img, Button, thead } from 'react-bootstrap';

export default class TechnicianProfile extends Component {
  render(){
    var { name, img } = this.props
    return (
        <div className="container userBody">
          <div className='row'>
            <div className='toppad pull-right'>
              <Col md={12} mdOffset={0}>
              <Button className='userBlue spcRight' href="#">Edit Profile</Button>
              <Button className='userRed'href="#">Log Out</Button>
              <br/>
              <p className="text-infto ">May 26,2016 03:00 pm </p>
              </Col>
            </div>
             <div className="toppad" >
               <Col xsOffset={0} smOffset={0} mdOffset={2} lgOffset={2} xs={5} sm={12} md={6} lg={8}>
               <div className="panel panel-info">
                 <div className='panel-heading'>
                   <h3 className="panel-title">Thanh Nguyen</h3>
                 </div>
                 <div className='panel-body'>
                  <div className='row'>
                  <div>
                    <Col md={3} lg={3} >
                    <img src={img} className="img-circle img-responsive techSmImg"/>
                    </Col>
                  </div>
                  <div>
                    <Col md={9} lg={9} >

                    <div className='agenda'>
                    <div className='table-responsive'>
                    <table className='table table-condensed table-bordered'>
                      <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Customer</th>
                    </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="agenda-date active" rowSpan="1">
                            <div className="dayofmonth">26</div>
                            <div className="dayofweek">Friday</div>
                            <div className="shortdate text-muted">May, 2016</div>
                        </td>
                        <td className="agenda-time">
                         5:15 PM - 6:00 PM
                        </td>
                        <td className="agenda-events">
                      <div className="agenda-event">
                      <i className="glyphicon glyphicon-repeat text-muted" title="Repeating event">2wks</i> 
                         Jennifer
                       </div>
                         </td>
                        </tr>

                        <tr>
            <td className="agenda-date active" rowSpan="3">
                <div className="dayofmonth">27</div>
                <div className="dayofweek">Saturday</div>
                <div className="shortdate text-muted">May, 2016</div>
            </td>
            <td className="agenda-time">
                9:15 - 10:30 AM
            </td>
            <td className="agenda-events">
                <div className="agenda-event">
                    Mertile
                </div>
            </td>
        </tr>
        <tr>
            <td className="agenda-time">
                10:45 AM - 12:00 PM
            </td>
            <td className="agenda-events">
                <div className="agenda-event">
                    Bernadette
                </div>
            </td>
        </tr>
        <tr>
            <td className="agenda-time">
                1:30 PM - 2:15 PM
            </td>
            <td className="agenda-events">
                <div className="agenda-event">
                    Michael Olson
                </div>
            </td>
        </tr>
    </tbody>
</table>


                    </div>
                    </div>

                    <table className="table table-user-information">
                      <tbody>

                        <tr>
                          <td>Licensed Services:</td>
                          <td>Manicurest, Drill, Waxing, Facials</td>
                        </tr>
                        <tr>
                          <td>Email:</td>
                          <td><Link to='#'>Thanh@support.com</Link></td>
                        </tr>
                        <tr>
                          <td>Phone Number:</td>
                          <td>123-4567-8900(Mobile)</td>
                        </tr>

                      </tbody>
                    </table>
                  <Link to="/user"><Button className='userBlue btn btn-primary'>Customer Notes</Button></Link>
                  </Col>
                  </div>
                  </div>
                 </div>

                 <div className='panel-footer'>
                  <a href='#' type="button" className="userBlue btn btn-lg btn-primary"><i className="glyphicon glyphicon-phone"></i></a>
                  <span className='pull-right'>
                  <a href='#' type="button" className="userBlue btn btn-lg btn-warning spcRight"><i className="glyphicon glyphicon-flash">FACEBOOK</i></a>
                  <a href='#' type="button" className="btn btn-lg btn-warning"><i className="glyphicon glyphicon-star-empty">SPECIALS</i></a>


                  </span>
                 </div>

               </div>
             </Col>
             </div>
          </div>
        </div>
    )
  }
}
