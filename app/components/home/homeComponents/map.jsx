import { default as React, Component } from "react";

import { GoogleMap } from "react-google-maps";
/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class SimpleMap extends Component {
  /*
   * 1. Create a component that wraps all your map sub-components.
   */
  render() {

    return (
      <GoogleMap
        containerProps={{
        this.props,
          style: {
            height: `100%`,
          },
        }}
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      />
    );
  }
}
