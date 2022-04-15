import React, { useEffect, useRef } from "react";
import LinearGradient from 'react-native-linear-gradient';
import {withSpring} from "react-native-reanimated";
import {Dimensions, StyleSheet, TouchableOpacity, useWindowDimensions, View} from "react-native";
import {Searchbar} from "react-native-paper";
import {removePersonalyData, setLoading, showOnMap} from "../../redux/action_creator/mainReducerAC";
import {useDispatch} from "react-redux";
import {getSearchDataByValue, getSearchValue} from "../../redux/action_creator/SearchAC";
import { useSelector } from "react-redux";
import { ArrowAnimated, InputAnimated } from "../common/animations/Animations";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { removeChoosedItems, removeList, setChoosedItems, setShowChooseItem } from "../../redux/action_creator/CategoriesAC";
import { setShowHistorySearch } from "../../redux/action_creator/SearchHistoryAC";
import BurgerIcon from "../../../assets/svg/BurgerIcon";
import DashIcon from "../../../assets/svg/DashIcon";
import SearchIcon from "../../../assets/svg/SearchIcon";
import Input from "./Input"
import {SPRING_CONFIG} from "../../util/SPRING_CONFIG";

export const SearchBlock = (props) => {
    const dispatch = useDispatch();
    const dimensions = useWindowDimensions()
    const [search, setSearch] = React.useState()
   // console.log(search,'search')
    const {animated} = useSelector((state) => state.main);
    const searchRef = useRef();
    //const {list} = useSelector((state => state.categorys));

    useEffect(() => {
        if(!props.isActive){
            searchRef.current?.blur();
            dispatch(setShowHistorySearch(false));
        }
    }, [props.isActive])

    useEffect(() =>{
        if(props.list.length > 0){
            changeTop()
        }
    }, [props.list])

    const changeTop = () => {
        props.top.value = withSpring(dimensions.height / 1, SPRING_CONFIG);
    }


    const searchData = (value) => {
        dispatch(getSearchDataByValue(value))
        setSearch(value)
        if(!value){
            //dispatch(removeChoosedItems());
            //Switch on Icons.js Component
             dispatch(setShowChooseItem(false));
            dispatch(showOnMap(false));
        }else{
            //Switch off Icons.js Component
             dispatch(setShowChooseItem(true));
             dispatch(showOnMap(true));
        }
    }



    return(
        <LinearGradient
            start={{x: 0.3, y: 0}}
            end={{x: 1, y: 0.7}}
            colors={props.isActive ? ['#f7f7f7', '#f7f7f7'] : ['#7667F2', '#8e6feb']}
            // colors={['#7667F2', '#8e6feb']}
            style={styles.liner}>
            <TouchableOpacity onPress={() =>  props.top.value = withSpring(dimensions.height / 2 + 110,SPRING_CONFIG)}>
            <DashIcon color={props.isActive ?'#C4C4C4':'#35005F'}/>
            </TouchableOpacity>
            <View>
                <View style={{flex: 1}}>
                    {animated || <ArrowAnimated />}
                    {animated ?  <Input
                        placeholder="Search"
                        placeholderTextColor='#35005F'
                        onChangeText={searchData}
                        value={search}
                        setSearch={setSearch}
                        inputRef={searchRef}
                        //onIconPress={() => props.setIsActive(false)}
                        onIconPress={() => searchData(search)}
                        iconColor='#35005F'
                        onFocus={() => {
                            props.top.value = withSpring(dimensions.height / 5, SPRING_CONFIG);
                            //Switch off Icons.js Component
                            //dispatch(setShowChooseItem(true))
                            props.setIsActive(true);
                            dispatch(showOnMap(false));
                            dispatch(setShowHistorySearch(true));
                            dispatch(removeChoosedItems());
                            props.setList([])
                            //dispatch(removeList());
                            //removeList()
                            dispatch(removePersonalyData());
                            //dispatch(setLoading(true))
                        }}
                    /> : <InputAnimated
                    //It's doesn't work
                    //setIsActive={props.setIsActive}
                    style={styles.searchBar}
                    placeholder="Search"
                    placeholderTextColor='#35005F'
                    iconColor='#35005F' />}
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({

    liner: {
        width: Dimensions.get('window').width,
        height: 100,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        zIndex: 3,
    },
    minus: {
         marginBottom: 10,
         marginTop:-15
    },
    searchBar:{
        backgroundColor: '#E5E5E5',
         // height: 42,
        width: Dimensions.get('window').width -20,
        // borderRadius: 20,
        fontSize: 18,
        color: '#35005F',
        opacity: 0.9,
        shadowColor: '#00aaff',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        //elevation: 9,
    }
});
