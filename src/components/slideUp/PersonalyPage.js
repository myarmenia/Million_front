import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Platform, Linking} from 'react-native';
import presentFoto from '../../../assets/presentFoto.png';
import {useDispatch} from 'react-redux';
import {removePersonalyData} from '../../redux/action_creator/mainReducerAC';
import Xicon from "../../../assets/svg/Xicon";
import {openGps} from "../../util/ConnectWithMap";
import goMap from "../../../assets/go_map.png";

const PersonalyPage = ({personalyData}) => {
    const dispatch = useDispatch();
    //console.log(personalyData,"personalyData")
    let outOfPage = () => {
        dispatch(removePersonalyData());
    }
   const phoneArray = personalyData?.phones ? personalyData.phones?.split(','):['There is no record !'];
    const dialCall = (el) => {
       let number = el.replace(/[^0-9]/g, "")
        let phoneNumber = '';
        if (Platform.OS === 'android') { phoneNumber = `tel:+${number}`; }
        else {phoneNumber = `telprompt:+${number}`; }
        Linking.openURL(phoneNumber);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{personalyData.name}</Text>
                <TouchableOpacity onPress={outOfPage}>
                    <Xicon width={'18'} height={'18'} color={'#000'}/>
                </TouchableOpacity>
            </View>
            <ScrollView>

                <View style={styles.content}>
                    <Text style={styles.mainText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                        bibendum eros vel turpis vulputate, aliquet dapibus dolor euismod. Aenean quam tellus.</Text>
                    <Text style={styles.mainText2}>Mon-Sat 8:00-23:00</Text>
                    {personalyData.address === null ?
                        <Text style={styles.mainText}>Unfortunately, there is no address yet</Text> :
                      <View style={styles.address}>
                          <Text >{personalyData.address}</Text>
                          <TouchableOpacity
                              onPress={()=>openGps(personalyData.lat,personalyData.lng)}>
                              <Image source={goMap} style={{width: 30, height: 30}}/>
                          </TouchableOpacity>
                      </View>}
                    <View style={styles.phoneBlock}>
                        {phoneArray.map((el)=><Text onPress={()=>dialCall(el)}
                            style={styles.number}>
                            {el}
                        </Text>)}
                    </View>
                    <Text style={styles.mainText3}>web.adress.am</Text>
                    <View style={styles.photoBlock}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => <Image source={presentFoto}
                                                                        style={styles.imageAbout}/>)}

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 30,
        borderRadius: 20,
        maxHeight: '100%'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50,
    },
    content: {
        paddingBottom: 100,
    },
    title: {
        color: '#35005F',
        fontSize: 19,
        width: '80%',
    },
    mainText: {
        fontSize: 15,
        color: '#737373',
        borderBottomWidth: 0.5,
        paddingBottom: 30,
        paddingHorizontal: 15,
        // paddingTop: 30,
    },
    mainText2: {
        fontSize: 15,
        color: '#737373',
      paddingVertical:15,
        paddingHorizontal: 15,
    },
    mainText3: {
        fontSize: 15,
        color: '#737373',
        paddingTop: 30,
        marginBottom: 30,
        paddingHorizontal: 15,
    },
    address:{
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection: 'row',
        fontSize: 15,
        color: '#737373',
        borderBottomWidth: 0.5,
        borderTopWidth:0.5,
       paddingVertical: 15,
        paddingHorizontal: 15,
        //backgroundColor: 'red'
    },
    phoneBlock: {
        alignItems: 'flex-start',
        marginTop: 20,
        borderBottomWidth: 0.5,
    },
    number: {
        color: '#0095C5',
         paddingBottom: 20,
        paddingHorizontal: 15,
        textAlign:"left"
    },
    photoBlock: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'red',
    },
    imageAbout: {
        width: 90,
        height: 90,
        marginBottom: 10,
        marginHorizontal: 5,
    }
})

export default PersonalyPage;
