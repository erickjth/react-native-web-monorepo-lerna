/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import setup from 'monorepo-shared/src/setup';
import App from './src/App';
import { name as appName } from './app.json';

const Root = setup(App);

AppRegistry.registerComponent(appName, () => Root);
