import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { Button, container, row, Carousel} from 'react-bootstrap';

export default class SplashPage extends Component {
  render(){
    return (
      <div>
        <Carousel >
          <Carousel.Item>
            <Carousel.Caption>
              <h1 className="carousel-header-styling">Upscale Nails and Spa</h1>
            </Carousel.Caption>
            <img width={1445} height={500}  src="https://hd.unsplash.com/photo-1449179391249-52328aae1c16"/>
            <Carousel.Caption>
              <h3 className="carousel-picture-text-header">Healthy Skin</h3>
              <p>Our skin services will make you feel younger and rejuvinated.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h1 className="carousel-header-styling">Upscale Nails and Spa</h1>
            </Carousel.Caption>
            <img width={1445} height={500}  src="https://hd.unsplash.com/photo-1467015806515-b6effeb01f5f"/>
            <Carousel.Caption>
              <h3 className="carousel-picture-text-header">Nails</h3>
              <p>With a wide selection of services we can accomodate all needs.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h1 className="carousel-header-styling">Upscale Nails and Spa</h1>
            </Carousel.Caption>
            <img width={1445} height={500} alt="900x500" src="https://hd.unsplash.com/photo-1452794441448-9a21ecfff6e3"/>
          <Carousel.Caption>
            <h3 className="carousel-picture-text-header">Pedicures</h3>
            <p>Your feet will thank you after getting one of our pedicures.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h1 className="carousel-header-styling">Upscale Nails and Spa</h1>
          </Carousel.Caption>
          <img width={1445} height={500} alt="900x500" src="https://hd.unsplash.com/photo-1459164648438-af647b154e96"/>
        <Carousel.Caption>
          <h3 className="carousel-picture-text-header">Special Designs</h3>
          <p>Our technicians will create any design for the occassion to make your nails look stunning.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </div>
    )
  }
}
