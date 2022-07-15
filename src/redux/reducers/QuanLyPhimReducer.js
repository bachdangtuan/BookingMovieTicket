import { LAY_DANH_SACH_PHIM, SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU, LAY_CHI_TIET_PHIM } from "../types/LayPhimType"

const stateDefautl = {
    arrPhim: [ ],
    // dangChieu: true,
    // sapChieu:true,
    arrPhimDefault: [],
    filmDetail:{}
}

export const QuanLyPhimReducer = (state = stateDefautl, action) =>{
    switch (action.type){

        case LAY_DANH_SACH_PHIM:{
            state.arrPhim = action.arrPhim;


            state.arrPhimDefault = state.arrPhim;
            return {...state}
         
        }

        case SET_PHIM_DANG_CHIEU:{
            state.arrPhim = state.arrPhimDefault.filter(phim => phim.dangChieu === true)
            console.log('Phim Dang Chieu', state.arrPhim);
            return {...state}
        }
        case SET_PHIM_SAP_CHIEU:{
            state.arrPhim = state.arrPhimDefault.filter(phim => phim.sapChieu === true)
            console.log('Phim Sap Chieu', state.arrPhim);
            return {...state}
        }
        
        case LAY_CHI_TIET_PHIM :{
            state.filmDetail = action.filmDetail
            
            return {...state}
        }






        default: return {...state}
    }

}