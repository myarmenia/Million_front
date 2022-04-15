import React from "react";
import { Alert } from "react-native";
import {Dimensions, SafeAreaView, StyleSheet, Text, View, FlatList, ScrollView, Image, TouchableOpacity} from "react-native";
import { useSelector } from "react-redux";

const SearchBox = (props) => {
    const {data} = useSelector((state) => state.main);
    //console.log(data,'cdjsvnjdsnvjdnjj')

    

    return(
        <View>
            
            {/* <FlatList
                data={data}
                renderItem={({item}) => {
                return (
                    <TouchableOpacity activeOpacity={0.5} >
                        <View style={styles.container}>
                             <View style={styles.text}>
                                <Text style={styles.name}>{item.lat}</Text>
                                <Text style={styles.name}>{item.lng}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
            );
            }}
            keyExtractor={(item, index)=>index.toString()}
      /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#fefefe',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding:10,
        borderRadius:15,
        borderWidth:0,
        marginTop:10,
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
   name:{
      color:'#000',
       fontSize: 18,

   },
    address:{
        fontSize:16,
        color: '#646464'
    },
    image:{
        width:60,
        height:60
    },
    imageIcon:{
        width:30,
        height:30
    },
    divider:{
        marginLeft: 10,
        marginRight:10
    },
    text:{
        width:'60%',
        marginBottom:10
    }
})

export default SearchBox;