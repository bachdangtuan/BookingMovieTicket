import { baseService } from "./baseService";
import {GROUPID} from '../util/Settings/config'
export class QuanLyPhimService extends baseService {
    constructor() {
        super();
    }
    //Lấy danh sách banner
    layDanhSachBanner = () =>{
        return this.get(`/api/QuanLyPhim/LayDanhSachBanner`)
    }
    //Lấy danh sách phim
    layDanhSachPhim = () =>{
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }



}


export const QLPhimService = new QuanLyPhimService();