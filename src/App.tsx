import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from './containers/MainContainer';
const App: React.FC = ()=> {
  return (
    <View style={styles.container}>
      <HomePage />
      <MainContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
