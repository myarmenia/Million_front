import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setChoosedItems, setList, setShowChooseItem } from '../../redux/action_creator/CategoriesAC';
import { getData, showOnMap } from '../../redux/action_creator/mainReducerAC';



//It's create for test for solve bug in ChooseItem.js Component
const HeaderItemView = () => {

    const {data} = useSelector((state) => state.search);
    const {data2} = useSelector((state) => state.main);
    const {list} = useSelector((state) => state.categorys);
    const {showChooseItem} = useSelector((state) => state.categorys);
    const {searchValue} = useSelector((state) => state.search);
    const [name, setName] = useState('');
    let dispatch = useDispatch();

    useEffect(() => {
        setName(searchValue);
        //console.log(searchValue);
    }, [searchValue])

    return(
        <View style={{width: '100%'}} >
           // <TouchableOpacity onPress={() => console.log('click')} activeOpacity={0.5} >
                <Text style={styles.text}>
                    {name}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    itemStyle:{
        backgroundColor:'#fff',
        padding:15,
     },
    text: {
        color: '#969696',
        fontSize: 18,
        padding: 20,
    }
})

export default HeaderItemView;
