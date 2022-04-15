import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Promo = (props) => {


    // useEffect(() => {
    //     getHistory()
    //     console.log(name,55555555555);
    // }, [])

  // const getHistory = () => {
  //   try{
  //       AsyncStorage.getItem('searchHistory')
  //           .then(value => setName(JSON.parse(value)))
  //           console.log(value);
  //   }catch(e){
  //       console.log(e);
  //   }
  // }

    return (
        <Text>Promo</Text>
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


export default Promo;
