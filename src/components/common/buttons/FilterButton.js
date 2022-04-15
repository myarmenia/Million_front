import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setList, setShowModal } from '../../../redux/action_creator/CategoriesAC';

const FilterButton = (props) => {

    let dispatch = useDispatch();
    //const {list} = useSelector((state => state.categorys));


    return (
            <TouchableOpacity onPress={() => props.setList(props.list)} style={styles.btn} >
                <Text style={styles.text}>{props.list.name}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 34,
        borderRadius: 6,
        paddingHorizontal: 15,
        marginHorizontal: 7,
        shadowOffset: {
            width: 0,
            height: 10,
          },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 1,
        borderWidth: 0.3,
   },
    text: {
        textTransform: 'capitalize',
        color: '#000',
        fontSize: 14,
        textAlign: 'center',
    },

})

export default FilterButton;
