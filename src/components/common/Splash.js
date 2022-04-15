import React from "react";
import {ActivityIndicator, useWindowDimensions, View} from "react-native";

const Splash = () => {

    const {height, width} = useWindowDimensions();

    return(
        <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center', zIndex: 5, position: 'absolute', top: height *0.08, elevation: 20}}>
            <ActivityIndicator size="large" color="#A175EB" />
        </View>
    )
}


export default Splash;
