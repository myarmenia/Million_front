import React from 'react';
import {Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
// import { EvilIcons } from '@expo/vector-icons';
import {useDispatch, useSelector} from 'react-redux';
import {showOnMap} from '../../redux/action_creator/mainReducerAC';
import {setChoosedItems, setShowChooseItem, setShowModal} from '../../redux/action_creator/CategoriesAC';
import {getSearchDataByValue} from '../../redux/action_creator/SearchAC';
import IconX from "../../../assets/svg/Xicon";

export const ModalCategorys = (props) => {
    let dispatch = useDispatch();
    const {choosedItems} = useSelector((state) => state.categorys);
    //const {list} = useSelector((state) => state.categorys);
    const {data} = useSelector((state) => state.search);



    let filterResponse = async (item) => {
        //console.log(item)
        await dispatch(getSearchDataByValue(item));
        await dispatch(setChoosedItems(data));
        await dispatch(setShowChooseItem(false));
        await dispatch(showOnMap(true));
        await dispatch(setShowModal(false));
        await props.setList([])
    }

    let closeModal = () => {
        //dispatch(setShowModal(false));
        props.setList([])
    }

    // useEffect(() => {
    //     return props.setList([])
    // }, [])

    return (
        <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.container} >
            {/* <Modal onBackdropPress={closeModal} backdropColor='#000000b8' isVisible={true} transparent={true}> */}
            <View style={styles.modalContainer}>
                <View style={styles.modalHeader}>
                    <Text style={styles.headerText}>{props.list.name}</Text>
                        <TouchableOpacity style={{width: 50, height: 50, alignItems: 'center'}} onPress={closeModal}>
                            <IconX  color="#CFCFCF" size={"20"}/>
                        </TouchableOpacity>
                </View>
                <View style={styles.modalContnent}>
                <FlatList numColumns={4} keyExtractor={(item, index) => index.toString()} data={props.list.item}
                          renderItem={({item, index}) => (
                            <TouchableOpacity onPress={() => filterResponse(item)}>
                            <View style={styles.subCategorys}>
                                <View style={styles.subCategorysIcon}></View>
                                <Text numberOfLines={1} ellipsizeMode='middle' style={styles.subCategorysText}>{item}</Text>
                            </View>
                        </TouchableOpacity>
                          )} />
                </View>
            </View>
            {/* </Modal> */}

        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor:'#000000b8',
       // zIndex:15,
        elevation:15,

        position: 'absolute',
        zIndex: 4
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '94%',
        marginVertical: Dimensions.get('window').height/5,
        marginHorizontal:'1%',
        alignSelf: 'center',
        padding: 12,
        borderRadius: 10,
        elevation: 5,
        height: 500,

    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        flex: 1,
        zIndex: 1,
        alignItems: 'flex-start',
    },
    headerText: {
        color: '#35005F',
        fontSize: 28,
    },
    modalContnent: {
        flex: 5,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    subCategorys: {
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    subCategorysText: {
        color: '#35005F',
        marginTop: -5,
        fontSize: 10,
        flex: 1,

    },
    subCategorysIcon: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#C4C4C4',
        borderRadius: 5,
    }

})

export default ModalCategorys;
