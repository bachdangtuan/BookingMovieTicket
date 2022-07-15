import React from 'react'
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

export default function Film(props) {
    const { phim } = props;
    return (
        <div className="my-1 p-2 px-1 w-full cursor-pointer">
            <div className=" group bg-black relative justify-center items-center mx-auto content-div  p-0">
                <article className="overflow-hidden group-hover:opacity-10 transition-all duration-700 ease-in-out ">
                    <div className="h-full w-full ">
                        <img alt="Placeholder" className="block max-h-80 w-full test " src={phim.hinhAnh} onError={(e) => {
                            e.target.onerror = null; e.target.src = "https://picsum.photos/75/75"
                        }} />
                    </div>
                </article>
                <div className="absolute opacity-0 fd-sh group-hover:opacity-100 bottom-9 left-2 right-2">
                    <p className="text-md font-bold text-center text-white  tracking-wider leading-relaxed uppercase ">{phim.tenPhim}</p>
                    <div className="text-center grid grid-cols-4 gap-2 grid-flow-row ">
                        <Button type='danger' className="  rounded-sm font-bold  col-start-1 col-end-3">XEM CHI TIẾT</Button>
                        <NavLink to={`/detail/${phim.maPhim}`} type='danger' className=" rounded-sm font-semibold px-1 ">BOOK</NavLink>
                        <Button type='danger' className="  rounded-sm font-semibold ">
                           <i className="fa-solid fa-play" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
