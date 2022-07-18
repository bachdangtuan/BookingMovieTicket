import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
import { baseService } from "./baseService";


export class QuanLyDatVeService extends baseService {
    constructor() {
        super();
    }
    //Lấy thông tin phòng vé
    layChiTietPhongVe = (maLichChieu) =>{
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }

    //Quản Lý Đặt Vé

    datVe = (thongTinDatVe = new ThongTinDatVe) =>{ //Gửi 
        return this.post(`/api/QuanLyDatVe/DatVe`,thongTinDatVe)
    }
}


export const quanLyDatVeService = new QuanLyDatVeService();