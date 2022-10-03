import { myApi } from "./initialApi";

export const myinitialApi = [];

export const ApiSlice = (state = [], { type, payload }) => {
    switch (type) {
        case 'ShowApi': return payload
        case 'Change': 
      
        return payload.inp1/payload.api[payload.currency1]*payload.api[payload.currency2]
       
        default: return state
    }
}

export const getState = (state) => {
    return state.myApi
}
export const getApi = () => {
    return (dispatch) => {
        myApi().then(api => {
            dispatch({
                type: 'ShowApi',
                payload: api
            })
        }).catch(error => {
            throw error;
        })
    }
}


export const changeApi1 = (val1, val2,inp1) => {
  return (dispatch)=>{
    myApi().then(res=>(
        dispatch({
            type:'Change',
    payload:{
        currency1:val1,
        currency2:val2,
        inp1:inp1,
        api:res.rates
     }   

        })
    ))
  }}
  
  
