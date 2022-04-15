import React, { useEffect } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image, dimensions, useWindowDimensions} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import presentFoto from '../../../assets/presentFoto.png';
import presentFoto2 from '../../../assets/logo2.png';
import { getPersonalyData } from '../../redux/action_creator/mainReducerAC';
import FilterButton from '../common/buttons/FilterButton';
import {withSpring} from "react-native-reanimated";
import {SPRING_CONFIG} from "../../util/SPRING_CONFIG";
import {setChoosedItems, setShowModal} from "../../redux/action_creator/CategoriesAC";

const List = ({setIsActive, runAnimated, OpenModal, ...props}) => {

    const dispatch = useDispatch();
    const {choosedItems} = useSelector((state) => state.categorys);
    const {data} = useSelector((state) => state.search);
    //const {list} = useSelector((state => state.categorys));




     const openPersonallyPage = (item) => {
          dispatch(getPersonalyData(item));
          dispatch(setChoosedItems(item,true));
          runAnimated(item)
          setIsActive(true);
     }

     const ListObject = () => {
         return (
             <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.75} onPress={() => openPersonallyPage(choosedItems)}>
                    <View style={styles.subContainer}>
                        <Image
                             style={styles.image}
                             resizeMode="cover"
                             source={presentFoto2}
                         />
                        <View style={styles.textBlock}>
                            <View style={{width: '80%'}}>
                                <Text style={styles.title}>{choosedItems.name}</Text>
                                <Text style={styles.mainText}>Category</Text>
                                <Text style={styles.mainText}>Mon-Sat 8:00-23:00</Text>
                                <Text style={styles.mainText}>Address, {choosedItems.address}</Text>
                            </View>
                            <View style={{justifyContent: 'space-between'}}>
                                <Text style={styles.mainText}>Open</Text>
                                <Text style={styles.mainText}>0.3 km</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
         )
    }



    return (
        <View style={styles.container}>
            {props.list.name ? <FilterButton OpenModal={OpenModal} {...props} /> : null}
            {choosedItems.length === undefined ? <ListObject /> : <FlatList data={choosedItems} keyExtractor={(item, index) => index.toString()} renderItem={({item,index}) => (
                <TouchableOpacity activeOpacity={0.75} onPress={() => openPersonallyPage(item)}>
                    <View style={styles.subContainer}>
                        <Image
                             style={styles.image}
                             resizeMode="cover"
                             source={presentFoto2}
                         />
                        <View style={styles.textBlock}>
                            <View style={{width: '80%'}}>
                                <Text style={styles.title}>{item.name}</Text>
                                <Text style={styles.mainText}>Category</Text>
                                <Text style={styles.mainText}>Mon-Sat 8:00-23:00</Text>
                                <Text style={styles.mainText}>Address, {item.address}</Text>
                            </View>
                            <View style={{justifyContent: 'space-between'}}>
                                <Text style={styles.mainText}>Open</Text>
                                <Text style={styles.mainText}>0.3 km</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: -15,
    },
    subContainer:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fefefe',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderRadius: 15,
        borderWidth: 0.3,
        borderColor: '#EAEAEA',
        marginVertical: 10,
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2.62,

        elevation: 2,
    },
    title: {
       color: '#35005F',
       fontSize: 14,
   },
    mainText: {
        fontSize: 10,
        color: '#737373',
    },
    image:{
        width: 70,
        height: 70
    },
    textBlock: {
        width:'70%',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})








export default List;

