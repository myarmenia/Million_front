import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Favorites from '../screens/Favorites';
import InterestingPlaces from '../screens/InterestingPlaces';
import MapPage from '../screens/MapPage';
import Promo from '../screens/Promo';
import ReportAProblem from '../screens/ReportAProblem';
import Settings from '../screens/Settings';
import SomethingElse from '../screens/SomethingElse';
import Support from '../screens/Support';
import TermsOfUse from '../screens/TermsOfUse';
import BecomeAPartner from '../screens/BecomeAPartner';
import AboutApp from '../screens/AboutApp';
import {HomeScreen} from "../screens/HomeScreen";


const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#7667F2",
    },
    headerTintColor: "#fff",
    headerBackTitleVisible: false
};



export const StackContent = () => (
    <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name={"Home screen"} component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name={"MapPage"} component={MapPage} options={{headerShown: false}} />
        <Stack.Screen name={"Promo"} component={Promo} />
        <Stack.Screen name={"Settings"} component={Settings} />
        <Stack.Screen name={"Favorites"} component={Favorites} />
        <Stack.Screen name={"Interesting places"} component={InterestingPlaces} />
        <Stack.Screen name={"Report a problem"} component={ReportAProblem} />
        <Stack.Screen name={"Something else"} component={SomethingElse} />
        <Stack.Screen name={"Support"} component={Support} />
        <Stack.Screen name={"About App"} component={AboutApp} />
        <Stack.Screen name={"Terms of use"} component={TermsOfUse} />
        <Stack.Screen name={"Become a partner"} component={BecomeAPartner} />
    </Stack.Navigator>
)




