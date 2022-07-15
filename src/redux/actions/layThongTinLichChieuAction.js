
import { QLCumRapService } from '../../Service/QuanLyCumRapService';
import { LAY_CHI_TIET_PHIM } from '../types/LayPhimType';


// tạo hàm action có tham số truyền vào là paramester
export const layThongTinLichChieuAction = (id) =>{
  return async (dispatch) =>{
      try {
          const getAPIDetailFilm = await QLCumRapService.layThongTinLichChieu(id);
          
          //Đưa lên store
          dispatch({
                type:LAY_CHI_TIET_PHIM,
                filmDetail: getAPIDetailFilm.data.content
          })


      }
      catch (error) {
          console.log(error);
      }
  }
}
