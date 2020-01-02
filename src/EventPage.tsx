import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import cheerio from 'cheerio';
import fetch from 'node-fetch';





export interface EventPageProps {
    
}



 
const EventPage: React.SFC<EventPageProps> = () => {
    return ( 
        <View>
            <Text>
                Show Events Here
            </Text>
        </View>
     );
}
 
export default EventPage;