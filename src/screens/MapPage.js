import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
    Dimensions,
    Image,
    Linking,
    Platform,
    StyleSheet,
    TouchableOpacity,
    useWindowDimensions,
    View
} from 'react-native';
import SlideUp from '../components/slideUp/SlideUp';
import {useDispatch, useSelector} from 'react-redux';
import OutButtons from '../components/categorys/OutButtons';
import ModalCategorys from "../components/categorys/ModalCategorys";
import {GetLocationClojure} from "../util/GetLocation";
import MapView from "../components/MapsSettings/MapView";
import SettingsIcon from "../../assets/svg/SettingsIcon";
import {withSpring} from "react-native-reanimated";
import IconX from "../../assets/svg/Xicon";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import GeolocationIcon from "../../assets/svg/GeolocationIcon";
import goMap from "../../assets/go_map.png"
import {openGps} from "../util/ConnectWithMap";
import {setList, setShowModal} from "../redux/action_creator/CategoriesAC";
const MapPage = (props) => {
    const mapRef = useRef(null);
    const {width, height} = Dimensions.get('window')
    const [forceLocation, setForceLocation] = useState(true);
    const [highAccuracy, setHighAccuracy] = useState(true);
    const [locationDialog, setLocationDialog] = useState(true);
    const [significantChanges, setSignificantChanges] = useState(false);
    const [observing, setObserving] = useState(false);
    const [foregroundService, setForegroundService] = useState(false);
    const [useLocationManager, setUseLocationManager] = useState(false);
    const [location, setLocation] = useState(null);
    const [color, setColor] = useState("#3f51b552");
    const watchId = useRef(null);
    const {removeLocationUpdates,getLocation,getLocationUpdates} = GetLocationClojure(watchId,setObserving,setLocation,forceLocation,useLocationManager,locationDialog,significantChanges,highAccuracy,foregroundService)
    useEffect(() => {
        return () => {
            removeLocationUpdates();
        };
    }, [removeLocationUpdates]);


    const dispatch = useDispatch();
    const {showOnMap} = useSelector((state) => state.main);
    const {showModal} = useSelector((state) => state.categorys);
    const {animated} = useSelector((state) => state.main);
    const {splash} = useSelector((state) => state.search);

    //test
    const [list, setList] = useState([]);
    const [list2, setList2] = useState([]);
    const [test, setTest] = useState(false);

    const dimensions = useWindowDimensions()
    const [showOutButt, setShowOutButt] = useState(true)
    const [showSettings, setShowSettings] = useState(true)
    const [fetchTop, setFetchTop] = useState()
    const[ destination,setDestination] = useState({address:'',latitude: null, longitude: null})
       const showSettingsTab = () => {
           fetchTop.value = withSpring(dimensions.height / 2.8)
           setShowSettings(!showSettings)
       }

    // useEffect(() => {
    //     console.log(list2, 'list')
    // }, [list, list2])

    // if (splash) {
    //     return <Splash/>c
    // }
    return (
        <View style={styles.container}>
            {/*<View style={styles.hamburgButton}>*/}
                {list.length !== 0 && <ModalCategorys list={list} setList={setList} />}
            {/*</View>*/}
            <View style={styles.mapContainer}>
                <MapView mapRef={mapRef} coords={location?.coords || null} color={color}
                          destination={destination} setDestination={setDestination}/>
                    </View>
            {showSettings && <View style={{position: "absolute",bottom:0, width: width, height: height/4}}>

            </View>}
            <TouchableOpacity style={{zIndex:99, position:"absolute", left:5,top:50}} onPress={() => props.navigation.toggleDrawer()}>
                <BurgerIcon color={'#230b36de'}/>
            </TouchableOpacity>
            <View style={[styles.locationView, {opacity: animated ? 1 : 0.6}]}>
                <TouchableOpacity
                                  onPress={()=>{getLocation()
                                      setColor('#3f51b514')}}>
                    {/*<Image source={require('../../assets/aim.png')} style={{width: 30, height: 30}}/>*/}
                    <GeolocationIcon/>
                </TouchableOpacity>
            </View>
            <View style={styles.settingsButton}>
                <TouchableOpacity style={styles.button}
                                  onPress={showSettingsTab}>
                    {showSettings?<SettingsIcon/>:<IconX color={"#000"} size={"20"}/>}
                </TouchableOpacity>
            </View>
            {destination.latitude && <View style={styles.goMap}>
                <TouchableOpacity style={styles.button}
                                  onPress={()=>openGps(destination.latitude,destination.longitude)}>
                    <Image source={goMap} style={{width: 30, height: 30}}/>
                </TouchableOpacity>
            </View>}
            {showOutButt && <View style={styles.OutButtons}>
                <OutButtons setList={setList} />
            </View>}
            <SlideUp   setHighAccuracy={setHighAccuracy}
                       showSettings={showSettings}
                       setFetchTop={setFetchTop} setColor={setColor} mapRef={mapRef}
                                        highAccuracy={{highAccuracy}}
                                        setSignificantChanges={setSignificantChanges}
                                        significantChanges={significantChanges}
                                        setLocationDialog={setLocationDialog}
                                        locationDialog={locationDialog}
                                        setForceLocation={setForceLocation}
                                        forceLocation={forceLocation}
                                        setUseLocationManager={setUseLocationManager}
                                        useLocationManager={useLocationManager}
                                        setForegroundService={setForegroundService}
                                        foregroundService={foregroundService}
                                        getLocation={getLocation}
                                        getLocationUpdates={getLocationUpdates}
                                        observing={observing}
                       list={list}
                       setList={setList}
                                        removeLocationUpdates={removeLocationUpdates}
                                        location={location} setShowOutButt={setShowOutButt} animated={animated} {...props}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 1,
        // backgroundColor: '#000',
    },
    mapContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        zIndex: 1,
    },
    locationView: {
        position: 'absolute',
        top: 5,
        right: '5%',
        zIndex: 1, //TODO

    },
    settingsButton: {
        position: 'absolute',
        top: 90,
        right: '5%',
        zIndex: 1, //TODO

    },
    goMap:{
        position: 'absolute',
        top: 140,
        right: '5%',
        zIndex: 1, //TODO
    },
    button: {
        width: 40,
        height: 40,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        backgroundColor: '#fff',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 3,
        elevation: 5
    },
    hamburgButton:{
        // zIndex:3,
        // elevation: 5,
        // position:"absolute",
        // left:5,
        // top:50,
        position: 'absolute',
        flex: 1,
        elevation:15,
        zIndex: 4
    },

    OutButtons: {
        bottom: Platform.OS === 'ios' ? '20%' : '17%', //TODO
        width: '100%',
        zIndex: 1, //TODO
        elevation: 1, // TODO problem with mapssettings
    },
});


export default MapPage;
