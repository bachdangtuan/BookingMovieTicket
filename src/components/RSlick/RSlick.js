import React, { Component } from "react";
import Slider from "react-slick";
import Film from "../Phim/Film";
import styleSlick from './MultirowSlick.module.css'
import { Button } from 'antd';
import { SET_PHIM_DANG_CHIEU, SET_PHIM_SAP_CHIEU } from "../../redux/types/LayPhimType";
import { useDispatch, useSelector } from 'react-redux';





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
    return props.arrPhim.map((item, index) => {
      return (<div key={index}>
        <Film phim={item}></Film>
      </div>)
    })
  }

  //Set phim đang chiếu
  const actionPhimDangChieu = () => {
    const action = { type: SET_PHIM_DANG_CHIEU }
    dispatch(action);

  }
  //Set Phim Sắp Chiếu
  const actionPhimSapChieu = () => {
    const action = { type: SET_PHIM_SAP_CHIEU }
    dispatch(action)
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
    <div>
      <div className="text-center pb-4">
        <button className="bg-red-500 p-2 text-white font-semibold rounded-lg mr-2 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300" onClick={() => {
          actionPhimDangChieu()
        }}> PHIM ĐANG CHIẾU</button>
        <button className="bg-red-500 p-2 text-white font-semibold rounded-lg  hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300" onClick={() => {
          actionPhimSapChieu()
        }} > PHIM SẮP CHIẾU</button>

      </div>
      <Slider {...settings}>
        {renderPhim()}

      </Slider>
    </div>
  );
}


export default MultipleRows;
