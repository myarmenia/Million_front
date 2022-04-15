import React, {useEffect} from 'react';
import {Dimensions, LogBox, Platform, StyleSheet, useWindowDimensions, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PersonalyPage from './PersonalyPage';
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring
} from 'react-native-reanimated';
import {PanGestureHandler, ScrollView} from "react-native-gesture-handler";
import {SearchBlock} from "../searchBlock/search";
import Categorys from '../categorys/Categorys';
import {MapSettings} from "../MapsSettings/MapSettings";
import {SPRING_CONFIG} from "../../util/SPRING_CONFIG";


const SlideUp = (props) => {
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])
    const {personalyData} = useSelector((state) => state.main);
    const {data2} = useSelector((state) => state.main);
    const [scrollEnabled, setScrollEnabled] = React.useState(true)
    const [isActive, setIsActive] = React.useState(true)
    let valueForHeightSlideUp = Platform.OS === 'ios' ? 105 : 75;
    const dimensions = useWindowDimensions()
    const top = useSharedValue(dimensions.height);
    
    useEffect(()=>{
        props.setFetchTop(top)
    },[])
    const style = useAnimatedStyle(() => {
        return {top: withSpring(top.value - valueForHeightSlideUp, SPRING_CONFIG)}
    })
    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, context) => {
            context.startTop = top.value;
        },
        onActive(event, context) {
            top.value = context.startTop + event.translationY;

        },
        onEnd() {
            if (top.value > dimensions.height * 2.5 / 3) {
                top.value = dimensions.height
            } else if (top.value > dimensions.height * 4 / 10) {
                top.value = dimensions.height / 2 + 100;
            } else if (dimensions.height * 4 / 10 > top.value) {
                top.value = dimensions.height /5
            }
        }
    })
    const handlerStateChange = (event) => {
        if (top.value === dimensions.height) {
            setIsActive(true)
            props.setShowOutButt(true)
        } else {
            setIsActive(false)
            props.setShowOutButt(false)
        }
    }
    const onScroll = ({nativeEvent}) => {
        if (nativeEvent.contentOffset.y <= 0 && !scrollEnabled) {
            setScrollEnabled(true );
        }
        if (nativeEvent.contentOffset.y > 0 && scrollEnabled) {
            setScrollEnabled(false);
        }
    };
    return (
        <>

            <PanGestureHandler onGestureEvent={gestureHandler}
                               onHandlerStateChange={handlerStateChange}>
                <Animated.View style={[styles.animatedView, style]}>

                        <SearchBlock top={top} isActive={isActive} setIsActive={setIsActive} {...props}/>
                        <ScrollView  onScroll={onScroll}
                                    showsVerticalScrollIndicator={false}>
                            {props.showSettings ? <View >
                                {personalyData.length === 0 ? <View style={[styles.IconsBlock, props.animated || styles.IconsBlock2]}>
                                    <Categorys top={top} setIsActive={setIsActive} setColor={props.setColor} mapRef={props.mapRef} {...props}/>
                                </View> : <PersonalyPage personalyData={personalyData} />}
                            </View> : <View style={{}}>
                                <MapSettings
                                {...props}
                            /></View>}
                        </ScrollView>
                </Animated.View>
            </PanGestureHandler>
        </>
    );

}

const styles = StyleSheet.create({
    animatedView: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 15,
        zIndex: 3,
        justifyContent: 'flex-start',
        // alignItems: 'center'
    },
    liner: {
        width: Dimensions.get('window').width,
        height: 105,
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
    searchBar:{
        backgroundColor: '#E5E5E5',
        elevation: 0,
        height: 40
    },
    content: {
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        height: '100%',
        borderRadius: 15,
    },
    IconsBlock: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        height: '100%',

    },
    IconsBlock2: {
        opacity: 0.5,
        backgroundColor: '#000',
    },
    text: {
        color: '#969696',
        fontSize: 18,
        padding: 20,
    }
});


export default SlideUp;
