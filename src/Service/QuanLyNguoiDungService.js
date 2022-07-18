import { baseService } from "./baseService";


export class QuanLyNguoiDungService extends baseService {
    constructor() {
        super();
    }
    //Lấy danh sách cụm rạp
    layThongTinNguoiDung = (thongTinDangNhap) =>{ //{taiKhoan, matKhau}
        return this.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap)
    }
}


export const quanLyNguoiDungService = new QuanLyNguoiDungService();