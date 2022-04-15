import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setChoosedItems, setShowChooseItem } from '../../redux/action_creator/CategoriesAC';
import {getData, getPersonalyData, showOnMap} from '../../redux/action_creator/mainReducerAC';
import OutButtons from './OutButtons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { sendHistory } from '../../redux/action_creator/SearchHistoryAC';



const ChooseItem = ({runAnimated, setIsActive}) => {

    let dispatch = useDispatch();
    const {data} = useSelector((state) => state.search);
    const {searchValue} = useSelector((state) => state.search);
    const {history} = useSelector((state) => state.searchHistory);
    const [historyArray, setHistoryArray] = useState([]);

    useEffect(() => {

            // dispatch(sendHistory(historyArray))
    }, [])

    // const setSearchHistory = async () => {
    //     try{
    //         await AsyncStorage.setItem('searchHistory', JSON.stringify(history))
    //     }catch(e){
    //         console.log(e);
    //     }
    // }




    let sendResponse = async (item) => {
        dispatch(getPersonalyData(item));
        runAnimated(item)
        setIsActive(true);
         await dispatch(setChoosedItems(item,true));
        // dispatch(setShowChooseItem(false));
        // //  dispatch(sendHistory(item.name))
        // //setSearchHistory();
        // //setSearchHistory(item.name)
         dispatch(showOnMap(true));
    }

    let sendResponseAll = async () => {
        await dispatch(setChoosedItems(data));
        dispatch(setShowChooseItem(false));
        dispatch(sendHistory(searchValue))
        //setSearchHistory();
        //setSearchHistory(searchValue)
        dispatch(showOnMap(true));
    }

    const ItemView = ({item}) => {
        return(
        <View style={{width: '100%'}}>
            <TouchableOpacity onPress={() => sendResponse(item)} style={styles.item}>
                <Text style={styles.text}>
                    {item.name}
                </Text>
            </TouchableOpacity>
            </View>
        )
    }

    const HeaderItemView = ({item}) => {
        return(<View style={{width: '100%'}} >
            <TouchableOpacity onPress={sendResponseAll} activeOpacity={0.5} style={styles.item}>
                <Text style={styles.text}>{searchValue}</Text>
                <View style={{height:0.5,width:'100%',backgroundColor:'#c8c8c8'}}/>
            </TouchableOpacity>
            </View>
        )
    }

    const ItemSeparatorView = () => {
        return(
            <View
                style={{height:0.5,width:'100%',backgroundColor:'#c8c8c8'}}/>
        )
    }




    return (
        <View style={styles.container}>
            {/* <HeaderItemView /> */}
                    <FlatList data={data}
                              keyExtractor={(item,index)=>index.toString()}
                              ItemSeparatorComponent={ItemSeparatorView}
                              renderItem={ItemView}
                              ListHeaderComponent={HeaderItemView}
                              />




        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    flatList:{
        backgroundColor: '#fff',
        width: Dimensions.get('window').width,
        height:Dimensions.get('window').height-115,
    },
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

export default ChooseItem;


