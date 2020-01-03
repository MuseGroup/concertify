import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView, FlatList, Linking, Image } from "react-native";
import { routes, colors, buttons, placeholders } from "../../shared/constants";
import {
  FlexCentered,
  Button,
  Text,
  TextInput,
  Centered,
  CenteredHome
} from "../../shared/styledComponents";
import Logo from "../Logo";
import config from './../../../config.js'
import Profile from './Profile.js'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventArray: []
    };
  }


  searchEvents() {
    const holdingArr = [];
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?stateCode=ca&classificationName="Alternative Rock"&apikey=${config.ticketApi}`)
        .then(data => data.json())
        .then(data => data._embedded.events)
        .then(data => {
          for (let i = 0; i < data.length; i += 1) {
            holdingArr.push({name: data[i].name, key: ('key' + [i]),venue: data[i]._embedded.venues[0].name, image: data[i].images[8], date: data[i].dates.start.localDate, url: data[i].url})
          }})
        .then(data => this.setState({eventArray: holdingArr}))
        .catch(error => console.log(error))
  }

  render() {
    return (
    <SafeAreaView style={styles.container}>
      {/*<Profile eventArray={this.state.eventArray} />*/}
      <Logo/>
      <CenteredHome style={styles.container}>
        <TextInput placeholder={placeholders.playlist}/>
      <Button onPress={() => {this.searchEvents()}}><Text color={colors.bright}>Get Concerts</Text></Button>
        <FlatList data={this.state.eventArray} renderItem={({ item }) =>
            <View style={styles.event}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemText}>{item.date}</Text>
              <Text style={styles.itemText}>{item.venue}</Text>
              <Button onPress={() => Linking.openURL(item.url)}><Text color={colors.bright} >Get Tickets</Text></Button>
            </View>
        } />
      </CenteredHome>
    </SafeAreaView>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B3B52',
  },
  event: {
    borderStyle: 'solid',
    borderWidth: 5,
    borderColor: '#B8D94F',
    borderRadius: 5,
    backgroundColor: '#2B3B52',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#1b8dde',
  },
  itemText: {
    color: '#B8D94F',
    fontSize: 16,
    textAlign: 'center'
  }
});

export default Home;
