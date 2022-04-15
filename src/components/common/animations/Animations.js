import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { Searchbar } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { setAnimated } from '../../../redux/action_creator/mainReducerAC';


export const ArrowAnimated = () => {



    const arrowAnimation = {
        from: {
          top: -70,
        },
        to: {
          top: 30,
        },
      };


    return (
        <Animatable.View animation={arrowAnimation}
                         iterationCount='infinite'
                         direction="alternate"
                         duration={1000}
                         easing="ease-out">
            {/*<Ionicons name="md-arrow-undo-sharp" style={styles.arrow} size={200} color="#7667F2" />*/}
        </Animatable.View>
    )
}

export const InputAnimated = ({setIsActive}) => {

  let dispatch = useDispatch();

  const stopAnimation = () => {
    dispatch(setAnimated(true));
    //It's doesn't work
    //setIsActive(true);

  }

  return (
    <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite">
      <Searchbar
                    placeholder="Search"
                    style={styles.input}
                    onFocus={stopAnimation} />

    </Animatable.View>

  )
}

const styles = StyleSheet.create({
    arrow: {
        position: 'absolute',
        elevation: 5,
        transform: [{rotate: '-90deg'}],
        bottom: '140%',
        right: '20%',
    },
    input: {
      // backgroundColor: '#fff',
      height: 50,
      fontSize: 25,
      padding: 5,
      borderRadius: 10,
      backgroundColor: '#E5E5E5',
  },
})
