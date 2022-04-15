import React, {useState} from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getData, removeData, showOnMap } from '../../redux/action_creator/mainReducerAC';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { setShowChooseItem } from '../../redux/action_creator/CategoriesAC';
import { ArrowAnimated, InputAnimated } from '../common/animations/Animations';

const SearchBlock = ({searchShow, setSearchShow, color, navigation, changeColorAndShowOutButtons, panel, ...props}) => {

    const [term, setTerm] = useState('');
    const dispatch = useDispatch();
    const {data} = useSelector((state) => state.main);
    const {showChooseItem} = useSelector((state) => state.categorys);
    //Animated

    let filter = async (name) => {
        await setTerm(name);
        dispatch(getData(name));
    }

    let changeColorInput = () => {
        panel.current.show(600);
        changeColorAndShowOutButtons();
        dispatch(setShowChooseItem(true));
    }

    let sendToMap = () => {
        panel.current.hide(-300, 0.2);
        if(data.length > 0){
            dispatch(showOnMap(true));
        }

    }

    let removeAllData = () => {
        dispatch(removeData());
        //empty search map
        setTerm('');
        dispatch(showOnMap(false));
        dispatch(setShowChooseItem(false));
    }





    return (
        <LinearGradient style={{borderTopLeftRadius: 15, borderTopRightRadius: 15}} colors={color ? ['#fff', '#fff'] : ['#7667F2', '#A175EB']} start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <View style={styles.container}>

            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Icon name="navicon" size={30} style={[styles.burger, color ? styles.backgroundColorContainer1 : styles.backgroundColorContainer2]} />
            </TouchableOpacity>

            <View style={{flex: 1}}>
                {props.loading || <ArrowAnimated />}

            {props.loading ? <TextInput
                    placeholder="Search"
                    style={styles.input}
                    value={term}
                    onChangeText={filter}
                    onFocus={changeColorInput}
                    >
            </TextInput> : <InputAnimated />}
            {showChooseItem && <Icon onPress={removeAllData} style={[styles.close, color ? styles.backgroundColorContainer1 : styles.backgroundColorContainer2]} name="close" size={35} />}
            <Icon onPress={sendToMap}   name="search1" size={30} style={[styles.icon, color ? styles.backgroundColorContainer1 : styles.backgroundColorContainer2]}/>
            </View>



        </View>
        </LinearGradient>
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        borderRadius: 30,
    },
    backgroundColorContainer1:{
        color: '#C4C4C4',
    },
    backgroundColorContainer2: {
        color: '#35005F',
    },
    burger: {
        marginRight: 15,
    },
    arrow: {
        position: 'absolute',
        elevation: 5,
        transform: [{rotate: '-90deg'}],
        bottom: '140%',
        right: '20%',
    },
    input: {
        // backgroundColor: '#fff',
        height: 50,
        fontSize: 25,
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#E5E5E5',
    },
    icon: {
        position: 'absolute',
        alignSelf: 'flex-end',
        top: 10,
        right: 5,
    },
    close: {
        position: 'absolute',
        alignSelf: 'flex-end',
        right: 35,
        top: 10,
    }
})

