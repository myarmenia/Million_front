import * as axios from "axios";



const GET_DATA = 'GET_DATA';
const GET_PERSONALY_DATA = 'GET_PERSONALY_DATA';
const REMOVE_PERSONALY_DATA = 'REMOVE_PERSONALY_DATA';
const REMOVE_DATA = 'REMOVE_DATA';
const SHOW_ON_MAP = 'SHOW_ON_MAP';
const SET_ANIMATED = 'SET_ANIMATED';

let initialState = {
  data: [],
  personalyData: [],
  categorysIcons2: [
        {
            id: Math.random(),
            name: 'to eat',
            img: require('../../assets/categorys/toEat.png'),
            item:['Rest', 'cafe', 'bar']
        },
        {
            id: Math.random(),
            name: 'to live',
            img: require('../../assets/categorys/toLive.png'),
            item:['Hotel', 'Hostel']
        },
        {
            id: Math.random(),
            name: 'Entertainment',
            img: require('../../assets/categorys/entertainment.png'),
            item:['MALL', 'GYM', 'Game place', 'Pool', 'Hookah', 'Museum', 'Cinema', 'Loft']
        },
        {
            id: Math.random(),
            name: 'Medical',
            img: require('../../assets/categorys/medical.png'),
            item:['Hospital', 'Pharmacy', 'Stomatolgy']
        },
        {
            id: Math.random(),
            name: 'Products',
            img: require('../../assets/categorys/products.png'),
            item:['Supermarket', 'Food Market', 'Home goods', 'Specialized goods']
        },
        {
            id: Math.random(),
            name: 'Finance',
            img: require('../../assets/categorys/finance.png'),
            item:['Banks']
        },
        {
            id: Math.random(),
            name: 'Beauty',
            img: require('../../assets/categorys/star1.png'),
            item:['Beauty salon']
        },
        {
            id: Math.random(),
            name: 'Tourism',
            img: require('../../assets/categorys/tourism.png'),
            item:['Tour agency', 'Sightseeing']
        }
    ],
  showOnMap: false,
  animated: true,
  data2: [
    {name: 'medical',
    address: 'dvsdvsd'},
    {name: 'Entertainment',
    address: 'dvsdvsd'},
    {name: 'glasses',
    address: 'dvsdvsd'},
    {name: 'caffee',
    address: 'dvsdvsd'},
    {name: 'cup',
    address: 'dvsdvsd'}
  ]
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:{
              return {
                ...state,
                data: action.data
              };
         }
         case GET_PERSONALY_DATA:{
           return {
             ...state,
             personalyData: action.aboutInfo
           };
         }
         case REMOVE_PERSONALY_DATA: {
           return {
             ...state,
             personalyData: []
           }
         }
         case SHOW_ON_MAP: {
           return {
             ...state,
             showOnMap: action.letShow
           }
         }
         case REMOVE_DATA: {
           return {
             ...state,
             data: []
           }
         }
         case SET_ANIMATED: {
           return {
             ...state,
             animated: action.anim
           }
         }
        default:
            return state;
    }
}




// const getAllData = (data) => ({type: GET_DATA, data});
// export const getPersonalyData = (aboutInfo) => ({type: GET_PERSONALY_DATA, aboutInfo});
// export const removePersonalyData = () => ({type: REMOVE_PERSONALY_DATA});
// export const showOnMap = (letShow) => ({type: SHOW_ON_MAP, letShow});
// export const removeData = () => ({type: REMOVE_DATA});
// export const setAnimated = (anim) => ({type: SET_ANIMATED, anim});


// export const getData = (name) => async (dispatch) => {
//   try {
//     const {data} = await axios.get(`http://apiwebex.fab.nu/?text=${name}&number=${20}`);
//     //console.log(data);
//     dispatch(getAllData(data));
//   }catch(e){
//     console.log(e);
//   }
// }

// export const sendMyPosition = (pin) => async (dispatch) => {
//   try {
//     const response = await axios.post('http://apiwebex.fab.nu/index1.php', pin);
//   }catch(e){
//     console.log(e);
//   }
// }


export default mainReducer;
