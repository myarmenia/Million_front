import * as axios from "axios";



const GET_DATA = 'GET_DATA';
const GET_PERSONALY_DATA = 'GET_PERSONALY_DATA';
const REMOVE_PERSONALY_DATA = 'REMOVE_PERSONALY_DATA';
const REMOVE_DATA = 'REMOVE_DATA';
const SHOW_ON_MAP = 'SHOW_ON_MAP';
const SET_ANIMATED = 'SET_ANIMATED';

const getAllData = (data) => ({type: GET_DATA, data});
export const getPersonalyData = (aboutInfo) => ({type: GET_PERSONALY_DATA, aboutInfo});
export const removePersonalyData = () => ({type: REMOVE_PERSONALY_DATA});
export const showOnMap = (letShow) => ({type: SHOW_ON_MAP, letShow});
export const removeData = () => ({type: REMOVE_DATA});
export const setAnimated = (anim) => ({type: SET_ANIMATED, anim});


export const getData = (name) => async (dispatch) => {
  try {
    const {data} = await axios.get(`http://apiwebex.fab.nu/?text=${name}&number=${20}`);
    //console.log(data);
    dispatch(getAllData(data));
  }catch(e){
   // console.log(e);
  }
}

export const sendMyPosition = (pin) => async (dispatch) => {
  try {
    const response = await axios.post('http://apiwebex.fab.nu/index1.php', pin);   
  }catch(e){
  //  console.log(e);
  }
}