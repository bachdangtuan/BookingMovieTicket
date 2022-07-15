import { GROUPID } from "../util/Settings/config";
import { baseService } from "./baseService";


export class QuanLyCumRapService extends baseService {
    constructor() {
        super();
    }
    //Lấy danh sách cụm rạp
    layDanhSachCumRap = () =>{
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }
    // Lấy thông tin lịch chiếu
    layThongTinLichChieu = (maPhim) =>{
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`)
    }
}


export const QLCumRapService = new QuanLyCumRapService();