/* eslint-disable react/prop-types */
import React from 'react';
import {SafeAreaView, FlatList, View, Linking, StyleSheet} from 'react-native'
import {Button, FlexCentered, Text} from '../../shared/styledComponents';

const Profile = (props) => (
    <SafeAreaView style={styles.container}>
        <FlatList data={props.eventArray} renderItem={({ item }) =>
            <View style={styles.event}>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemText}>{item.date}</Text>
                <Text style={styles.itemText}>{item.venue}</Text>
                <Button color='#25aee8' title={'Get Tickets'} onPress={() => Linking.openURL(item.url)}/>
            </View>
        } />
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    event: {
        borderStyle: 'solid',
        borderWidth: 5,
        borderColor: '#1db954',
        borderRadius: 5,
        backgroundColor: '#1c1c1c',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#1b8dde',
    },
    itemText: {
        color: '#ededed',
        fontSize: 16,
        textAlign: 'center'
    }
});

export default Profile;
