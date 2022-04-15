import React, {useEffect, useState} from 'react';
import {StyleSheet, useWindowDimensions, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ChooseItem from './ChooseItem';
import List from './List';
import {withSpring} from "react-native-reanimated";
import {SPRING_CONFIG} from "../../util/SPRING_CONFIG";
import {mapRef} from "../MapsSettings/MapView";
import ModalCategorys from "./ModalCategorys";
import TabIcons from "../../blocks/TabIcons";


const Categorys = ({setIsActive, top, setColor, mapRef, ...props}) => {
    const dimensions = useWindowDimensions()
    const {showModal} = useSelector((state) => state.categorys);
    const {data} = useSelector((state) => state.search);
    const {showChooseItem} = useSelector((state) => state.categorys);
    const cord = {
        latitude: 40.2862004973,
        longitude: 44.9473915019
    }
    const runAnimated = (item) => {
        top.value = withSpring(dimensions.height / 2 + 110, SPRING_CONFIG);
        mapRef.current.animateCamera({
            center: {
                latitude: item.lat ? item.lat : cord.latitude,
                longitude: item.lng ? item.lng : cord.longitude,
            },
            zoom: item.lat ? 15 : 8,
        }, {duration: 1500},);
        setColor('#3f51b514')
    }
    //console.log(choosedItems);


    useEffect(() => {
        //console.log(showChooseItem);
    }, [showChooseItem, 'showChooseItem'])

    return (
        <View style={styles.container}>
            {showChooseItem ?
                <ChooseItem setIsActive={setIsActive} runAnimated={runAnimated}/> : data && data.length !== 0 ?
                    <List setIsActive={setIsActive} runAnimated={runAnimated} {...props} /> : <TabIcons {...props} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginTop: 20,
    },

})

export default Categorys;
