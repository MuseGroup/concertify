import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import EventPage from './EventPage';
import config from './../config.js'

export interface HomePageProps {
    eventArray: Object
}

export interface HomePageState {
    searched: Boolean,
    searchInput: String,
    eventArray: Object
}

class HomePage extends React.Component<HomePageProps, HomePageState> {
    constructor(props: HomePageProps) {
        super(props);
        this.state = {
            searched: true,
            searchInput: '',
            eventArray: [],
        };
        this.searchEvents = this.searchEvents.bind(this)
    }

    setSearchInput() {
        this.setState({
            // searchInput: event.target.value
        })
    }

    searchEvents() {
        const holdingArr = [];
        fetch(`https://app.ticketmaster.com/discovery/v2/events.json?stateCode=ca&classificationName="Alternative Rock"&apikey=${config.ticketApi}`)
            .then(data => data.json())
            .then(data => data._embedded.events)
            .then(data => {
                for (let i = 0; i < data.length; i += 1) {
                    holdingArr.push(data[i].name)
                }})
            .then(data => this.setState({eventArray: holdingArr}))
            .catch(error => console.log(error))
    }


    render() {
        const eventPage = this.state.searched ? <EventPage eventArray={this.state.eventArray} /> : null;

        return (
            <View>
                <Button title={'Search'} onPress={() => {this.searchEvents()}} />
                <View>{this.state.eventArray}</View>
                { eventPage }
            </View>
        );
    }
}

export default HomePage;
