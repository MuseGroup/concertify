import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export interface EventPageProps {
    eventArray: Object
}

const EventPage: React.SFC<EventPageProps> = () => {
    return (
        <View>
            <Text>
                eventArray
            </Text>
        </View>
     );
}

export default EventPage;
