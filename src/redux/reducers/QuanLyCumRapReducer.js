import { LAY_CUM_RAP } from "../types/LayCumRap"


const stateDefault = {
    arrRap: [],
    lstCumRap:[]
}

export const QuanLyCumRapReducer = (state = stateDefault, action) =>{
    switch (action.type){
        case LAY_CUM_RAP:{
            state.arrRap = action.arrRap
            


            return{...state}
        }

        default: return {...state}
    }
}