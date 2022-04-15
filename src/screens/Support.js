import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useSelector} from "react-redux";


const Support = (props) => {

    const {list} = useSelector((state) => state.categorys);
    return (
        <View>
            <Text>Support</Text>
           <Text>{list.name}</Text>
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

export default Support;
