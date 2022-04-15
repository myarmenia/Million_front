import React, {useEffect} from "react";
import {ActivityIndicator, Dimensions, Image, StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import SearchIcon from "../../../assets/svg/SearchIcon";
import IconX from "../../../assets/svg/Xicon";
import img from "../../../assets/position.png"
import {useSelector} from "react-redux";

const Input = (props) => {
    const {splash} = useSelector((state) => state.search);
    const {isItem} = useSelector((state) => state.categorys);
// useEffect(()=>{
//     if(isItem){
//         props.onChangeText('')
//     }
// },[isItem])
    //console.log(isItem)
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <SearchIcon color={props.iconColor}/>
            </View>
            <TextInput
                ref={props.inputRef}
                {...props}
                style={styles.input}/>
            <View style={styles.search}>
                {props.value?.length > 0 && <TouchableOpacity onPress={() => {
                    props.onChangeText('')
                    props.inputRef?.current?.clear()
                }}>
                    {splash ? <ActivityIndicator size="small" color="#fff"/>
                        : <View style={styles.clear}><IconX color={props.iconColor} size={"10"}/></View>}
                </TouchableOpacity>}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        width: Dimensions.get('window').width - 50,
        height: 42,
        borderRadius: 15,
        backgroundColor: '#E5E5E5',
        alignItems: "center",
        justifyContent: 'space-between',
        margin: 0,
        paddingHorizontal: 5,
        shadowColor: '#00aaff',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
    },
    input: {
        backgroundColor: "transparent",
        width: "80%",
        fontSize: 18,
        color: '#35005F',
        height: 42,
         lineHeight: 23,
        justifyContent: 'flex-start',
        paddingVertical:4
    },
    search: {
        width: "10%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    clear: {
        alignItems:"center",
        justifyContent:"center",
      backgroundColor:"#eee",
        padding:4,
        borderRadius:15,
        elevation:3,
    },
    placeholderStyle:{
        fontSize:13,
        textAlign:"center"
    }
})

export default Input;
