import { baseService } from "./baseService";


export class QuanLyDatVeService extends baseService {
    constructor() {
        super();
    }
    //Lấy thông tin phòng vé
    layChiTietPhongVe = (maLichChieu) =>{
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }
}


export const quanLyDatVeService = new QuanLyDatVeService();