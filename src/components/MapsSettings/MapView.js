import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Dimensions, useWindowDimensions, Platform} from 'react-native';
import RNMapView, {Circle, Geojson, Marker,AnimatedRegion,PROVIDER_GOOGLE} from 'react-native-maps';
import {myPlace} from "../../util/geojson";
import {useSelector} from "react-redux";
import MarkerMap from "./MarkerMap";
import MapViewDirections from 'react-native-maps-directions';
const MapView = ({ coords, color ,animated,mapRef,setDestination, destination}) => {
    const {height,width} = useWindowDimensions()
    const {showOnMap} = useSelector((state) => state.main);
    const {choosedItems} = useSelector((state) => state.categorys);
    const ASPECT_RATIO = width/height;
    const LATITUDE_DELTA = 0.9222;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
    const GOOGLE_MAPS_APIKEY = "AIzaSyCcVkOfcLJ4yTfkpdhRHRGpimW0P_kkMwU";
    const markerRef = useRef()

    const [road, setRoad] = useState({
        curLoc:{
            latitude:coords? coords.latitude:40.2862004973,
            longitude:coords? coords.longitude :44.9473915019,
        },
        destinationCords:{},
        isLoading:false,
        coordinate: new AnimatedRegion({
            latitude:coords? coords.latitude:40.2862004973,
            longitude:coords? coords.longitude :44.9473915019,
            latitudeDelta:LATITUDE_DELTA,
            longitudeDelta:LONGITUDE_DELTA
        })
    })

    useEffect(() => {
        //console.log(choosedItems, 'choosedItems')
    }, [choosedItems])

    useEffect(() => {
        if (!!coords && mapRef.current) {
            mapRef.current.animateCamera({
                center: {
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                },
                pitch: 0,
                heading: 0,
                altitude: 1000,
                zoom: 16,
            });
        }
        animate(coords?.latitude,coords?.longitude)
    }, [coords]);

    const animate = (lat, long) =>{
        const newCoordinate = {lat, long};
        if(Platform.OS === "android"){
            if(markerRef.current){
                markerRef.current.animateMarkerToCoordinate(newCoordinate, 7000);
            }
        }else {
            road.coordinate.timing(newCoordinate).start();
        }
    }

    return (
        <View style={styles.container}>
            <RNMapView
                style={[styles.mapContainer, {opacity: !animated ? 1 : 0.2}]}
                ref={mapRef}
                 provider={PROVIDER_GOOGLE}
                // initialCamera={{
                //     altitude: 15000,
                //     center: {
                //         latitude: 40.2862004973,
                //         longitude: 44.9473915019
                //     },
                //     heading: 0,
                //     pitch: 0,
                //     zoom: 11,
                // }}
                initialRegion={{
                    latitude: 40.2862004973,
                    longitude: 44.9473915019,
                    latitudeDelta: 4,
                    longitudeDelta: 4

                }}
                loadingEnabled
                loadingBackgroundColor="white"
                rotateEnabled={false}
            >
                <Geojson geojson={myPlace} fillColor={color} strokeWidth={0}/>
                {!!coords && (
                    <>
                        <Marker
                            ref={markerRef}
                            anchor={{ x: 0.5, y: 0.6 }}
                            coordinate={{
                                latitude: coords.latitude,
                                longitude: coords.longitude,
                            }}
                            flat
                            style={{
                                ...(coords.heading !== -1 && {
                                    transform: [
                                        {
                                            rotate: `${coords.heading}deg`,
                                        },
                                    ],
                                }),
                            }}
                        >
                            <View style={styles.dotContainer}>
                                <View style={[styles.arrow]} />
                                <View style={styles.dot} />
                            </View>
                        </Marker>
                            {/*<MapViewDirections*/}
                            {/*    origin={{*/}
                            {/*        latitude: coords?.latitude,*/}
                            {/*        longitude: coords?.longitude*/}
                            {/*    }}*/}
                            {/*    destination={destination}*/}
                            {/*    apikey={GOOGLE_MAPS_APIKEY}*/}
                            {/*/>*/}
                        <MapViewDirections
                            origin={{
                                latitude: coords?.latitude,
                                longitude: coords?.longitude
                            }}
                            destination={destination}
                            apikey={GOOGLE_MAPS_APIKEY}
                            strokeWidth={3}
                            strokeColor="hotpink"
                        />
                        <Circle
                            center={{
                                latitude: coords.latitude,
                                longitude: coords.longitude,
                            }}
                            radius={coords.accuracy}
                            strokeColor="rgba(0, 150, 255, 0.5)"
                            fillColor="rgba(0, 150, 255, 0.5)"
                        />
                    </>
                )}
                {showOnMap && <MarkerMap setDestination={setDestination}/>}
            </RNMapView>
        </View>
    );
};

export default MapView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mapContainer: {
        ...StyleSheet.absoluteFillObject,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        zIndex: 10,
    },
    dotContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        backgroundColor: 'rgb(0, 120, 255)',
        width: 24,
        height: 24,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 12,
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 1.5,
        elevation: 4,
    },
    arrow: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'rgb(0, 120, 255)',
    },
});
