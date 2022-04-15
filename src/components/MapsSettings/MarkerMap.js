import React, {memo, useEffect, useRef} from 'react';
import {View, Image} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {Marker} from 'react-native-maps';
import { getData, getName } from '../../redux/action_creator/mainReducerAC';
import markerImage from '../../../assets/marker.png';

const MarkerMap = ({setDestination}) => {

    const {choosedItems} = useSelector((state) => state.categorys);
    useEffect(() => {
        //console.log(choosedItems.length, 'choosedItems');
    }, [choosedItems])
  const markerRef = useRef()
    useEffect(()=>{
        if( markerRef.current){
            markerRef.current.redraw()
        }
    },[choosedItems])
const setMarkLocation = (cord) =>{
    setDestination(cord)
    setTimeout(()=>{
        setDestination({address:'',latitude:null, longitude:null})
    },5000)
}
    return (
        <View>
            {Array.isArray(choosedItems)?  choosedItems?.map((loc, index) => {
                    return (
                    <Marker
                        onPress={(e)=>setMarkLocation({address:loc.address,latitude: Number(loc?.lat), longitude: Number(loc?.lng)})}
                        ref={markerRef}
                        coordinate={{latitude: Number(loc.lat), longitude: Number(loc.lng)}}
                        key={index}
                        title={loc.name}
                        description={loc.address !== null ? loc.address + '' + loc.phones : loc.phones}>
                        <Image style={{width: 15, height: 20}} source={markerImage} />
                    </Marker>
                    )
                }):<Marker ref={markerRef}
                           onPress={(e)=>setDestination({address:choosedItems.address,latitude: Number(choosedItems.lat), longitude: Number(choosedItems.lng)})}

                           coordinate={{latitude: Number(choosedItems.lat), longitude: Number(choosedItems.lng)}}
                title={choosedItems.name}
                description={choosedItems.address !== null ? choosedItems.address + '' + choosedItems.phones : choosedItems.phones}>

                <Image style={{width: 15, height: 20}} source={markerImage} />
            </Marker>}
            {/* {
                list.map((loc, index) => {
                    return (
                    <Marker
                        coordinate={{latitude: Number(loc.lat), longitude: Number(loc.lng)}}
                        key={index}
                        title={loc.name}
                        description={loc.address !== null ? loc.address + '' + loc.phones : loc.phones}>
                        <Image style={{width: 15, height: 20}} source={markerImage} />
                    </Marker>
                    )
                })
            } */}
        </View>
    )
}

export default memo(MarkerMap);
