import React, { useEffect, useState } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import { getSubCategories } from '../redux/action_creator/CategoriesAC';


const TabIcons = (props) => {
    const {categorysIcons, allCategories, newArr} = useSelector((state) => state.categorys);

    // data.map((item, i) => {
    //     const parseItem = JSON.parse(item)
    //     newarr.push(parseItem)
    // })
    //     console.log(newarr)

    // useEffect(() => {
    //     const tabs = allCategories.map((item, i) => {
    //         console.log(JSON.parse(allCategories.toString()))
    //     }) 
    // }, [])

    
    //const tabs = JSON.stringify(JSON.parse(allCategories)) 

    //console.log(JSON.parse(allCategories), 'allCategories');


    const dispatch = useDispatch()


    const openSubCategories = async (item) => {
        await props.setList(item)
        await dispatch(getSubCategories(2))
    }

    return (
        <View style={styles.container}>
            <FlatList data={allCategories} numColumns={4}
                      keyExtractor={(item,index) => index.toString()}
                      renderItem={({item,index}) => (
                          <TouchableOpacity key={index} onPress={() => openSubCategories(item)}>
                              <View style={styles.iconBlock}>
                                  <Image source={item.img} style={{width: 40, height: 40}} />
                              </View>
                              <Text style={styles.iconText}>{item.ru}</Text>
                          </TouchableOpacity>)
                      }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    iconBlock: {
        width: 67,
        height: 67,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
        marginTop: 12,
        borderRightColor: 'grey',
        borderRightWidth: 0.2,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.2,
    },
    img: {
        width: '80%',
        height: '80%',
    },
    iconText: {
        color: '#35005F',
        fontSize: 12,
        marginTop: 10,
        textAlign: 'center',
    },
})

export default TabIcons;
