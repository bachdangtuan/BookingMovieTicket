

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

            dispatch({
                type: 'DISPLAY_LOADING'
            })
            const result = await quanLyDatVeService.datVe(thongTinDatVe)

            //Đặt vé thành công gọi lại API load lại phòng vé
            await dispatch(getChiTietPhongVe(thongTinDatVe.maLichChieu))
            console.log("result",result);

             dispatch({
                type: 'HIDE_LOADING'
            })
             dispatch({
                type: 'DAT_VE_HOAN_TAT'
            })
        }
        catch (error) {
            dispatch({
                type: 'HIDE_LOADING'
            })
            console.log(error.response?.data);
        }

    }


} 