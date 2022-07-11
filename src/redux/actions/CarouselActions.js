
import { QLPhimService } from '../../Service/QuanLyPhimService';
import { SET_CAROUSEL } from '../types/CarouseType';






export const getCarouselAction = async (dispatch) =>{
    try {
        const result = await QLPhimService.layDanhSachBanner();

        // console.log(result);
        dispatch({
          type:SET_CAROUSEL,
          arrImg:result.data.content
        })

    } 

    catch(errors){
      console.log(errors);
    }
  }