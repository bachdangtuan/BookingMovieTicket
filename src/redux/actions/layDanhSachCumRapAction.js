
import { QLCumRapService } from '../../Service/QuanLyCumRapService';
import { LAY_CUM_RAP } from '../types/LayCumRap';


export const layDanhSachRapAction = () =>{
  return async (dispatch) =>{
      try {
          const getAPI = await QLCumRapService.layDanhSachCumRap();
          //Đưa lên store
          dispatch({
              type: LAY_CUM_RAP,
              arrRap: getAPI.data.content
          })
      }
      catch (error) {
          console.log(error);
      }
  }
}
