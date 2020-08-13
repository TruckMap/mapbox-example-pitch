/**
 * @format
 */

import {AppRegistry} from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";
import PointInMapView from './PointInMapView';
import {name as appName} from './app.json';

MapboxGL.setAccessToken('<ACCESS_TOKEN>');

AppRegistry.registerComponent(appName, () => PointInMapView);
