/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import setup from 'shared/src/setup';
import {name as appName} from './app.json';

const Root = setup(App);

AppRegistry.registerComponent(appName, () => Root);
