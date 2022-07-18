

import { quanLyDatVeService } from '../../Service/QuanLyDatVeService'
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe';

import { LAY_CHI_TIET_PHONG_VE } from "../types/quanLyDatVetype";



export const getChiTietPhongVe = (thongTinPhongVe) => {
    return async (dispatch) => {
        try {
            const result = await quanLyDatVeService.layChiTietPhongVe(thongTinPhongVe)


            dispatch({
                type: LAY_CHI_TIET_PHONG_VE,
                chiTietPhongVe: result.data.content
            })
            console.log(result);
        }
        catch (errors) {
            console.log(errors);
        }

    }

}


export const datVeAction = (thongTinDatVe = new ThongTinDatVe) => {

    return async (dispatch) => {
        try {
            const result = await quanLyDatVeService.datVe(thongTinDatVe)
            console.log('thongTinDatVe',thongTinDatVe);

            console.log(result.data.content);
        }
        catch(error) {

            console.log(error.response?.data);
        }

    }


} 