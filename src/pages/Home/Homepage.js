import React, { useEffect } from 'react';
import HomeMenu from './HomeMenu'
import RSlick from '../../components/RSlick/RSlick'
import './HomeCSS/Home.css'
import { useSelector, useDispatch } from 'react-redux';
import { layDanhSachPhim } from '../../redux/actions/layDanhSachPhimAction';


export default function Homepage(props) {
  const dispatch = useDispatch();

  const { arrPhim } = useSelector(state => state.QuanLyPhimReducer)
  //Lấy danh sách phim và danh sách cụm rạp
  useEffect(() => {
    const action = layDanhSachPhim;
    dispatch(action);

  }, [])


  return (

    <div className='2xl:container md:container md:m-auto lg:container lg:m-auto 2xl:m-auto'>
      <div className=" my-12 mx-auto px-4 md:px-12">
        <div class="home-movie-selection">
          <div class="home-title">
            <h2></h2>
          </div>
        </div>
        <RSlick arrPhim={arrPhim} ></RSlick>
      </div>
      <HomeMenu></HomeMenu>
    </div>
  )
}


