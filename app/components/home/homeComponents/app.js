import {
  default as React,
  Component,
} from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import update from "react-addons-update";
import SimpleMap from "./SimpleMap";

export default class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    markers: [{
      position: {
        lat: 26.5144029,
        lng: -81.9014407,
      },
      key: `Fort Myers`,
      defaultAnimation: 2,
    }],
  };
}


  componentDidMount() {
    setTimeout(() => {
      let { markers } = this.state;
      markers = update(markers, {
        $push: [
          {
            position: {
              lat: 25.99,
              lng: 122.9,
            },
            defaultAnimation: 2,
            key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
          },
        ],
      });
      this.setState({ markers });
    }, 2000);
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick(event) {
    let { markers } = this.state;
    markers = update(markers, {
      $push: [
        {
          position: event.latLng,
          defaultAnimation: 2,
          key: Date.now(),
        },
      ],
    });
    this.setState({ markers });
  }

  handleMarkerRightclick(index, event) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    let { markers } = this.state;
    markers = update(markers, {
      $splice: [
        [index, 1],
      ],
    });
    this.setState({ markers });
  }

  render() {

    var handleMapClick = this.handleMapClick.bind(this);
    var handleMarkerRightclick = this.handleMarkerRightclick.bind(this);
    return (
        <SimpleMap
          markers={this.state.markers}
          onMapClick={this.handleMapClick}
          onMarkerRightclick={this.handleMarkerRightclick}
        />
    );
  }
}
