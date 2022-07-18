import { quanLyNguoiDungService } from "../../Service/QuanLyNguoiDungService";
import { DANG_NHAP } from "../types/QuanLyNguoiDungType";
import {history} from '../../App'

export const dangNhapAction = (thongTinDangNhap) => {

    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layThongTinNguoiDung(thongTinDangNhap);
            console.log('result', result);

            dispatch({
                type: DANG_NHAP,
                userLogin: result.data.content
            })
            history.goBack(); //chuuyển hướng đăng nhập về trang trước đó
        }
        catch (errors) {
            console.log(errors);
        }
    }
}