import React, { Component } from "react";
import Slider from "react-slick";
import Film from "../Phim/Film";
import styleSlick from './MultirowSlick.module.css'

import { SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from "../../redux/types/LayPhimType";
import { useDispatch } from 'react-redux';

import { layDanhSachRapAction } from "../../redux/actions/layDanhSachCumRapAction";




//Custome Arrow
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick['slick-prev']}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const MultipleRows = (props) => {
  const dispatch = useDispatch()

  //Render Danh Sách Phim
  const renderPhim = () => {
    return props.arrPhim?.slice(2,22).map((item, index) => {
      return (<div key={index}>
        <Film phim={item}></Film>
      </div>)
    })
  }

  //Set phim đang chiếu
  const actionPhimDangChieu = () => {
    const action = { type: SET_PHIM_DANG_CHIEU }
    dispatch(action);
    dispatch(layDanhSachRapAction());
  }
  //Set Phim Sắp Chiếu
  const actionPhimSapChieu = () => {
    const action = { type: SET_PHIM_SAP_CHIEU }
    dispatch(action)
    dispatch(layDanhSachRapAction());
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    dot: false,
    slidesPerRow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="2xl:container 2xl:m-auto xl:container md:m-auto md:container sm:m-auto sm-container" style={{
      width: '80%'
    }}>
      <div className="text-center pb-4">
        <button type="button" class="inline-block px-6 py-2.5 mr-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg" onClick={() => {
          actionPhimDangChieu()
        }}> PHIM ĐANG CHIẾU</button>

        <button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg   " onClick={() => {
          actionPhimSapChieu()
        }} > PHIM SẮP CHIẾU</button>

      </div>
      <Slider {...settings} class>
        {renderPhim()}
      </Slider>
    </div>
  );
}


export default MultipleRows;
