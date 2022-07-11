
import { QLPhimService } from '../../Service/QuanLyPhimService';
import { LAY_DANH_SACH_PHIM } from '../types/LayPhimType';




export const layDanhSachPhim = async (dispatch) =>{
    try {
        const result = await QLPhimService.layDanhSachPhim();

        console.log(result);
        dispatch({
          type:LAY_DANH_SACH_PHIM,
          arrPhim:result.data.content
        })

    } 

    catch(errors){
      console.log(errors);
    }
  }