/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Suppliers from './src/samples/customHook/Suppliers';



AppRegistry.registerComponent(appName, () => Suppliers);
