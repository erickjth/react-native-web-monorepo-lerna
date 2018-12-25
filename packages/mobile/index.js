/** @format */
import { AppRegistry } from 'react-native';
import setup from 'shared/src/setup';
import App from './App';
import { name as appName } from './app.json';

const Root = setup(App);

AppRegistry.registerComponent(appName, () => Root);
