import React , { useState } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import HomePage from './HomePage';
import { Block, Button, Card, Icon, Input, NavBar, Text } from 'galio-framework';

// import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from './containers/MainContainer';

interface IProps{

}
const App: React.FC = ()=> {

  const[textInput, setTextInput] = useState('');
  const[festivals,setFestivals] = useState([]);

  const handlePress=()=> {
      setFestivals([textInput, ...festivals]);
  };

  const typingHandler = (value) => {
    setTextInput(value);
  }

  return (
    <View style={styles.container}>
      <Text> Codechella: Music Festival News </Text>
      <TextInput
      onChangeText={typingHandler}
      value={textInput}
      style={{borderWidth:1, width:300}} 
      />
      <button title="Festival Press"> Festival Press</button>
      <HomePage />
      
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
//AppRegistry.registerComponent()