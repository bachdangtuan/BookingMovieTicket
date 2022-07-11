import React from 'react'
import { useSelector } from 'react-redux'
import HomeMenu from './HomeMenu'
import RSlick from '../../components/RSlick/RSlick'
import './HomeCSS/Home.css'

export default function Homepage(props) {


  //Kết nối redux lấy dữ liệu
  const { arrPhim } = useSelector(state => state.QuanLyPhimReducer)


  return (

    <div className='2xl:container 2xl:m-auto'>
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


