import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const SomethingElse = (props) => {
    return (
        <View>
            <Text>Something Else</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#784E9C',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default SomethingElse;
