import React from 'react';
import {Text} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

class PointInMapView extends React.Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
  }

  renderContents = () => {
    const point = {
      "type": "Point",
      "coordinates": [-73.970895, 40.723279]
    };

    return (
      <MapboxGL.ShapeSource
        id={'source'}
        shape={point}
      >
        <MapboxGL.CircleLayer
          id={'circle-big'}
          style={{
            circleRadius: 20,
            circleColor: 'white',
            circleStrokeColor: 'black',
            circleStrokeWidth: 1,
            iconAllowOverlap: true,
            circlePitchScale: 'viewport',
          }}
        />

        <MapboxGL.CircleLayer
          id={'circle-small'}
          style={{
            circleRadius: 10,
            circleColor: 'red',
            iconAllowOverlap: true,
            circleTranslate: [14, -14],
            circleTranslateAnchor: 'viewport',
            circlePitchScale: 'viewport',
          }}
        />

        <MapboxGL.SymbolLayer
          id={'text'}
          style={{
            textAllowOverlap: true,
            textField: '12',
            textSize: 9,
            textColor: 'white',
            textFont: ['Open Sans Bold'],
            textTranslate: [14, -14],
            textTranslateAnchor: 'viewport',
          }}
        />
      </MapboxGL.ShapeSource>
    );
  };

  render() {
    return (
      <MapboxGL.MapView
        ref={(c) => (this._map = c)}
        onPress={this.onPress}
        style={{flex: 1}}>

        <MapboxGL.Camera
          zoomLevel={9}
          centerCoordinate={[-73.970895, 40.723279]}
        />

        {this.renderContents()}
      </MapboxGL.MapView>
    );
  }
}

export default PointInMapView;