import React, { Component } from "react";
import Slider from "react-slick";
import Film from "../Phim/Film";
import styleSlick from './MultirowSlick.module.css'

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

export default class MultipleRows extends Component {


    //Render Danh Sách Phim
    renderPhim = () =>{
        return this.props.arrPhim.map((item,index) =>{
            console.log(item);
            return <div key={index}> 
                <Film phim={item}></Film>
            </div>
        })
    }


    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "50px",
            slidesToShow: 2,
            speed: 500,
            rows: 2,
            dot:false,
            slidesPerRow: 2,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <div>
                <Slider {...settings}>
                    {this.renderPhim()}
                    {this.renderPhim()}
                    {this.renderPhim()}
                    {this.renderPhim()}
                    {this.renderPhim()}
                    {this.renderPhim()}
                    {this.renderPhim()}
                    {this.renderPhim()}
                    {this.renderPhim()}
                    {this.renderPhim()}
                    {this.renderPhim()}
                    {this.renderPhim()}
                    
                </Slider>
            </div>
        );
    }
}