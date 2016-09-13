import React from "react";
import ReactDOM from 'react-dom';
import {
  GoogleMapLoader,
  GoogleMap,
  Marker,
} from "react-google-maps";

const SimpleMap = props => (
  <section style={{ height: `100%` }}>
    <GoogleMapLoader
      containerElement={
        <div
          {...props.containerElementProps}
          style={{
            height: `100%`,
          }}
        />
      }
      googleMapElement={
        <GoogleMap
          ref={(map) => console.log(map)}
          defaultZoom={11}
          options={{ scrollwheel: false}}
          defaultCenter={{ lat: 26.5144029, lng: -81.9014407 }}
          onClick={props.onMapClick}

        >

          {props.markers.map((marker, index) => (
            <Marker
              {...marker}
              onRightclick={() => props.onMarkerRightclick(index)}
            />
          ))}
        </GoogleMap>
      }
    />
  </section>
);

export default SimpleMap;
