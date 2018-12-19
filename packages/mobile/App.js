import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import Text from 'shared/src/components/primitives/Text';
import Heading from 'shared/src/components/primitives/Heading';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Heading variant='h1' textAlign='center' m={10} fontSize={20}>Welcome to React Native!</Heading>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
