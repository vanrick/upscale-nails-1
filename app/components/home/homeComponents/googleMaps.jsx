import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
// import { default as React, Component } from "react";
// import { default as update } from "react-addons-update";
// import { GoogleStaticMap} from "react-google-static-map";

import { default as canUseDOM } from "can-use-dom";
import { default as _ } from "lodash";
import { GoogleStaticMap } from "react-google-static-map";
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";
import { triggerEvent } from "react-google-maps/lib/utils";

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */

 class GoogleMaps extends Component {
   render() {
     return (
         <GoogleStaticMap
             style={styles.map} {...locationProps}
             latitude={'32.064171'}
             longitude={'34.7748068'}
             zoom={13}
             size={{ width: 300, height: 550 }}
         />
     );
   }
 }

//1st section


// export default GoogleApiComponent({
//   apiKey: 'AIzaSyBZ3oga-2wwyjk7IszHEygiTZx3TLn4fIo'
// })(Container)
