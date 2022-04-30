import *  as api from "../api"

import {FETCH_ALL} from "../type"



// Actions Creators 

const getPosts= ()=> async (dispatch)=>{

    try {
        const {data}= await api.fetchPosts() ;
        dispatch([] )

    } catch (error) { 

        
    }
    const action ={type :FETCH_ALL , payload : []}
}