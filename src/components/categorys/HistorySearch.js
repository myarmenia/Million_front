import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setChoosedItems, setShowChooseItem } from '../../redux/action_creator/CategoriesAC';
import { removeHistory } from '../../redux/action_creator/SearchHistoryAC';
import { getSearchDataByValue } from '../../redux/action_creator/SearchAC';


const HistorySearch = (props) => {

    const [nameArray, setNameArray] = useState([]);
    const {data} = useSelector((state) => state.search);
    let dispatch = useDispatch();
    const {history} = useSelector((state) => state.searchHistory);

    useEffect(() => {
        (async () => {
            getHistory()
            //console.log(nameArray,555555);
        })
        //console.log(nameArray,888888);
    }, [data])

  const getHistory = () => {
    try{
        AsyncStorage.getItem('searchHistory')
            .then(value => setNameArray(JSON.parse(value)))
            //console.log(value);
    }catch(e){
        //console.log(e);
    }
  }

  let sendResponse = async (item) => {
    await dispatch(getSearchDataByValue(item));
    await dispatch(setChoosedItems(data));
    dispatch(setShowChooseItem(false));
    dispatch(showOnMap(true));
}

let remove = () => {
    dispatch(removeHistory());
}

  const historyItemView = ({item}) => {
    return(
    <View style={{width: '100%'}}>
        <TouchableOpacity onPress={() => sendResponse(item)} activeOpacity={0.5} style={styles.item}>
            <Text style={styles.text}>
                {item}
            </Text>
        </TouchableOpacity>
        </View>
    )
}

const RemoveButton = ({item}) => {
    return(<View style={{width: '100%'}} >
        <TouchableOpacity onPress={remove} activeOpacity={0.5} style={styles.button}>
            <Text style={styles.removeLabel}>Remove history</Text>
        </TouchableOpacity>
        </View>
    )
}

const historyItemSeparatorView = () => {
    return(
        <View
            style={{height:0.5, width:'100%', backgroundColor:'#c8c8c8'}}/>
    )
}

const Empty = () => {
    return(
        <Text style={styles.emptyLabel}>Empty</Text>
    )
}




    return (
        <View style={styles.container}>
            {/* <HeaderItemView /> */}
                    <FlatList data={history}
                              keyExtractor={(item,index)=>index.toString()}
                              ItemSeparatorComponent={historyItemSeparatorView}
                              renderItem={historyItemView}
                              ListFooterComponent={RemoveButton}
                              ListEmptyComponent={Empty}
                              />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        width: '100%',
        marginTop: 40,
    },
    flatList:{
        backgroundColor: '#fff',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-115,
    },
    itemStyle:{
        backgroundColor:'#fff',
        padding:15,
     },
    text: {
        color: '#969696',
        fontSize: 18,
        padding: 20,
    },
    button: {
        textAlign: 'center',
        alignSelf: 'center',
    },
    removeLabel: {
        color: '#427DEB',
        fontSize: 16,
    },
    emptyLabel: {
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 20,
        marginBottom: 10,
    },
})


export default HistorySearch;
