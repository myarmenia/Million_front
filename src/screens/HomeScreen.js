import React, {useEffect} from "react";
import {ActivityIndicator, ImageBackground, View, Image} from "react-native";
import { useDispatch } from "react-redux";
import { getAllCategories } from "../redux/action_creator/CategoriesAC";

export const HomeScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    useEffect( async () => {
       // console.log('start');
        await dispatch(getAllCategories())
      //  console.log('end');
        navigation.replace('MapPage')
    }, [])


    return (
        <View style={{ flex: 1 }}>

                <ImageBackground source={require('../../assets/homeImg.png')} resizeMode="contain" style={{
                    flex: 1,
                    justifyContent: "center"
                }}>
                <ActivityIndicator style={{marginTop: 80}} size="large" color="#7667F2" />
                </ImageBackground>

        </View>
    );

};
