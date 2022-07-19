import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe"
import { DAT_VE, LAY_CHI_TIET_PHONG_VE } from "../types/quanLyDatVetype"




const stateDefault = {
    chiTietPhongVe: new ThongTinLichChieu(),
    danhSachGheXemPhim: [],
    danhSachGheDangDat: [ ],

}


export const QuanLyDatVeReducer = (state = stateDefault, action) => {
    console.log(state.danhSachGheXemPhim);
    switch (action.type) {
        case LAY_CHI_TIET_PHONG_VE: {

            //Chi Tiết Phòng Vé
            state.chiTietPhongVe = action.chiTietPhongVe.thongTinPhim
            // console.log(action.chiTietPhongVe.danhSachGhe);
            //Set Danh Sách Ghế
            state.danhSachGheXemPhim = action.chiTietPhongVe.danhSachGhe;
            return { ...state }
        }

        case DAT_VE: {

            //Cật nhật danh sách Ghế Đang Đặt
            const danhSachGheCapNhat = [...state.danhSachGheDangDat]

            console.log(action);

            let index = danhSachGheCapNhat.findIndex(gheDD => gheDD.maGhe === action.gheDuocChon.maGhe)

            console.log("index", index);

            if (index != -1) {
                //Nếu tìm thấy ghế được chọn thì trước đó kích vào rồi thì xóa đi
                danhSachGheCapNhat.splice(index, 1)
            } else {
                danhSachGheCapNhat.push(action.gheDuocChon)
            }

            return { ...state, danhSachGheDangDat: danhSachGheCapNhat }
        }
        case 'DAT_VE_HOAN_TAT':{

            state.danhSachGheDangDat=[]

            return{...state}
        }

        default: return { ...state }
    }

}