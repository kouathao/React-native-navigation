/**
 * @format
 */
import 'react-native-gesture-handler';
// add react-native-gesture 1ST
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
