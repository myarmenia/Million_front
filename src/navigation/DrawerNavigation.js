import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';

const Drawer =  createDrawerNavigator();

const windowHeight = Dimensions.get('window').height;

const DrawerContent = (props) => {
    return (
         <LinearGradient
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    colors={['#7667F2', '#A175EB', '#7667F2']}
                    style={styles.background}>
                    <DrawerContentScrollView showsVerticalScrollIndicator={false}  style={styles.container} {...props}>

                            <View style={{paddingLeft: 30, marginTop: 50,
                                 borderTopWidth: 0.3, borderTopColor: '#FFFFFF'}}>
                            <DrawerItem label={'Promo'}
                                        labelStyle={styles.label}
                                        onPress={()=>props.navigation.navigate('Promo')}>

                            </DrawerItem>
                            <DrawerItem label={'Interesting places'}
                                        labelStyle={styles.label}
                                        onPress={()=>props.navigation.navigate('Interesting places')}>

                            </DrawerItem >
                            <DrawerItem label={'Favorites'}
                                        labelStyle={styles.label}
                                        onPress={()=>props.navigation.navigate('Favorites')}>
                            </DrawerItem>
                            <DrawerItem label={'Support'}
                                        labelStyle={styles.label}
                                        onPress={()=>props.navigation.navigate('Support')}>

                            </DrawerItem>
                            <DrawerItem label={'Report a Problem'}
                                        labelStyle={styles.label}
                                        onPress={()=>props.navigation.navigate('Report a problem')}>

                            </DrawerItem >
                            <DrawerItem label={'About app'}
                                        labelStyle={styles.label}
                                        onPress={()=>props.navigation.navigate('About App')}>
                            </DrawerItem>
                            <DrawerItem label={'Settings'}
                                        labelStyle={styles.label}
                                        onPress={()=>props.navigation.navigate('Settings')}>

                            </DrawerItem >
                            <DrawerItem label={'Something else'}
                                        labelStyle={styles.label}
                                        onPress={()=>props.navigation.navigate('Something else')}>
                            </DrawerItem>
                            </View>
                    </DrawerContentScrollView>
                        <View style={{paddingLeft: 30, borderTopWidth: 0.3, borderTopColor: '#FFFFFF'}}>
                            <DrawerItem label={'Terms of use'}
                                        labelStyle={styles.footerLabel}
                                        onPress={()=>props.navigation.navigate('Terms of use')}>

                            </DrawerItem >
                            <DrawerItem label={'Become a partner'}
                                        labelStyle={styles.footerLabel}
                                        onPress={()=>props.navigation.navigate('Become a partner')}>
                            </DrawerItem>
                        </View>
                </LinearGradient>
          )
}


const styles = StyleSheet.create({
    background:{
        flex:1,
    },
    container:{
        flex: 1,
        flexDirection: 'column',
    },
    label:{
        color: '#fff',
        fontSize: 20,
        fontWeight: '400',
        marginBottom: 5,
    },
    footerLabel: {
        fontSize: 15,
        color: '#fff',
        marginTop: 5,
    }
})


export default DrawerContent;
