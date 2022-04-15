import axios from "axios";

const instance = axios.create({
    baseURL: 'http://millioninfo.webex.website/api/',
    headers: {
        'Content-Type' : 'application/json',
        //'Access-Control-Allow-Origin' : '*',
        //'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
})



export const apiSubjects = {
    //get all categories
    allCategories(){
        return instance.get(`Categories`)
            .then(res => {
            //  console.log(res.data)
                let temp = res.data.map(el => JSON.parse(el))
                console.log(temp)
                return res.data

            })
            .catch((e)=>{
                //console.log(e, 'error-error-error');
            })
    },
    
    //get sub categegories by id
    getSubCategories(id){
        return instance.get(`subcategorys/${id}`)
            .then(res => {
                //console.log(res, 'allCategories');
                return res
            })
            .catch((e)=>{
                //console.log(e, id, 'sub_categories_error');
            })
    },

    //get list by name of sub categories
    listOfSubCategories(name){
        return instance.get(`show_company_name/${name}`)
            .then(res => {
               // console.log(res, 'name');
                return res
            })
            .catch((e)=>{
                //console.log(e, name, 'list error');
            })
    },

    //get closely info about item of list
    showSingleInfoById(id){
        return instance.get(`show_single_company/${id}`)
            .then(res => {
               // console.log(res, 'name');
                return res
            })
            .catch((e)=>{
               // console.log(e, id, 'single error');
            })
    },

    //get data by search
    getSearchData(name){
        return instance.get(`category/${name}`)
            .then(res => {
               // console.log(res, 'search block');
                return res
            })
            .catch((e)=>{
              //  console.log(e, name, 'search error');
            })
    },
}

