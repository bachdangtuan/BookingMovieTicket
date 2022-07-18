

import {quanLyDatVeService} from '../../Service/QuanLyDatVeService'

import { LAY_CHI_TIET_PHONG_VE } from "../types/quanLyDatVetype";



export const getChiTietPhongVe = (thongTinPhongVe) =>{
    return async (dispatch) =>{
        try{
            const result = await quanLyDatVeService.layChiTietPhongVe(thongTinPhongVe)
        
            
            dispatch({
                type: LAY_CHI_TIET_PHONG_VE,
                chiTietPhongVe: result.data.content
            })
            console.log(result);
        }
        catch{
    
        }


    }


}