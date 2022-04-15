import React, { useEffect, useState } from 'react';
import { StyleSheet, StatusBar, Text } from 'react-native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import DrawerContent from "../navigation/DrawerNavigation";
import {StackContent} from "../navigation/StackNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useDispatch} from "react-redux";
import {setAnimated} from "../redux/action_creator/mainReducerAC";
import { getAllCategories } from '../redux/action_creator/CategoriesAC';




const Drawer = createDrawerNavigator();




const Route = () => {

    let dispatch = useDispatch();

    const checkForFirstTimeLoaded = async () => {
        let result = await AsyncStorage.getItem('isFirstTimeOpened');
        if (result){
            //console.log('inq@ ka')
            dispatch(setAnimated(true))
        }else if(result !== 'alreadyOpen'){
           // console.log('inq@ chka, dir')
            AsyncStorage.setItem('isFirstTimeOpened', 'alreadyOpen')
            dispatch(setAnimated(false))
            setTimeout(() => {
                dispatch(setAnimated(true))
            }, 3000)
        }
    }



    useEffect(() => {
        checkForFirstTimeLoaded();
    }, [])



    return (
            <NavigationContainer>
                <Drawer.Navigator screenOptions={{headerShown: false}} drawerContent={props => <DrawerContent {...props} />} >
                    <Drawer.Screen name={'Home'} component={StackContent}/>
                </Drawer.Navigator>
            </NavigationContainer>
    );
}

const styles = StyleSheet.create({


});

export default Route;
