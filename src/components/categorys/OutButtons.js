import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Platform} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setList, setShowModal } from '../../redux/action_creator/CategoriesAC';

const OutButtons = (props) => {

    const {categorysIcons} = useSelector((state) => state.categorys);
    const {showModal} = useSelector((state) => state.categorys);
    const [categorys, setCategorys] = useState([
        {
            id: Math.random(),
            name: 'to eat',
            img: require('../../../assets/categorys/toEat.png'),
            item:['Rest', 'cafe', 'bar']
        },
        {
            id: Math.random(),
            name: 'to live',
            img: require('../../../assets/categorys/toLive.png'),
            item:['Hotel', 'Hostel']
        },
        {
            id: Math.random(),
            name: 'Entertainment',
            img: require('../../../assets/categorys/entertainment.png'),
            item:['MALL', 'GYM', 'Game place', 'Pool', 'Hookah', 'Museum', 'Cinema', 'Loft']
        },
        {
            id: Math.random(),
            name: 'Medical',
            img: require('../../../assets/categorys/medical.png'),
            item:['Hospital', 'Pharmacy', 'Stomatolgy']
        },
        {
            id: Math.random(),
            name: 'Products',
            img: require('../../../assets/categorys/products.png'),
            item:['Supermarket', 'Food Market', 'Home goods', 'Specialized goods']
        },
        {
            id: Math.random(),
            name: 'Finance',
            img: require('../../../assets/categorys/finance.png'),
            item:['Banks']
        },
        {
            id: Math.random(),
            name: 'Beauty',
            img: require('../../../assets/categorys/star1.png'),
            item:['Beauty salon']
        },
        {
            id: Math.random(),
            name: 'Tourism',
            img: require('../../../assets/categorys/tourism.png'),
            item:['Tour agency', 'Sightseeing']
        }
    ]);
    let dispatch = useDispatch();


    return (
        <View>
            <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
                      data={categorysIcons}
                      keyExtractor={(item, index) => index.toString()}
    renderItem={({item,index}) => <TouchableOpacity onPress={() => props.setList(item)} style={styles.btn} >
                                        <Text style={styles.text}>{item.name}</Text>
                                   </TouchableOpacity>}  />
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        height: 34,
        borderRadius: 6,
        paddingHorizontal: 15,
        marginHorizontal: 7,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: Platform.OS === 'ios' ? 0 : 0.53, //TODO
        shadowRadius: Platform.OS === 'ios' ? 0 : 13.97, //TODO
        elevation: 1,
    },
    text: {
        textTransform: 'capitalize',
        color: '#000',
        fontSize: 14,
        textAlign: 'center',
    },
})

export default OutButtons;
