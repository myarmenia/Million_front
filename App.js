import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import Route from "./src/screens/Route";
import store from "./src/redux/store";


export default function App() {

    return (<PaperProvider>
        <Provider store={store}>
            <StatusBar translucent barStyle='dark-content'  backgroundColor={'#6c5cf10f'}/>
            <Route />
        </Provider>
        </PaperProvider>
    );
}

// let arr = ['armen', 'arman']
// undefined
// let obj = {armen: 'iconka', arman: 'iconca'}
// undefined
// for(let name of arr) {

//     console.log(obj[name]
// }
// VM373:3 Uncaught SyntaxError: missing ) after argument list
// for(let name of arr) {

//     console.log(obj[name])
// }
// VM386:3 iconka
// VM386:3 iconca