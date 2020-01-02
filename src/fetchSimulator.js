import React from 'react';
import { Button } from 'react-native';

import fetchFestivals from './components/fetchFestivals'

const fetchSimulator = props => {
  return (
    <Button title="Get festival news" onPress = {props.onGetFestivals} /> 
  );
};

export default fetchSimulator;