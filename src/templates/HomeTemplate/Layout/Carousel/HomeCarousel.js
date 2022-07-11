import { Carousel } from 'antd';
import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { getCarouselAction } from '../../../../redux/actions/CarouselActions';



const App = (props) => {


  //Get API khi component render
  const { arrImg } = useSelector(state => state.CarouselReducer);

  const dispatch = useDispatch();
  // useEffect(async () => {
  //   try {
  //     const result = await Axios({
  //       url: 'http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner',
  //       method: 'GET'
  //     });
  //     //Đưa lên reducer
  //     console.log('result', result);
  //     dispatch({
  //       type: 'SET_CAROUSEL',
  //       arrImg: result.data.content
  //     })
  //   } catch (errors) {
  //     console.log('errors', errors);
  //   }
  // }, []);

  useEffect(()=>{
    const action = getCarouselAction;
    dispatch(action)
  },[])
  

  //RenderCarousel
  const renderCarousel = () => {
    return arrImg.map((item, index) => {
      const contentStyle = {
        height: '490px',
        color: '#fff',
        lineHeight: '490px',
        textAlign: 'center',
        // backgroundImage: "url(" + "https://i.pinimg.com/originals/ab/44/7e/ab447e2e37d61d4c68c4a00721c9e2e0.jpg" + ")",
        // backgroundPosition: 'center',
        // backgroundSize: 'cover'

      };
      return <div key={index}>
        <div style={contentStyle} className="sm:h-10 pt-0" >
          <img src={item.hinhAnh} alt="123" className="w-75 h-full m-auto rounded-2xl border" />
        </div>
      </div>
    })
  }



  return (

    <Carousel autoplay className="2xl:container 2xl:mx-auto rounded-lg ">

      {renderCarousel()}
    </Carousel>
  )
};

export default App;