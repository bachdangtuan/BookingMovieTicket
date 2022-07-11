import React from 'react'

export default function Film(props) {
    const { phim } = props;
    return (
        <div className="my-2 px-2 w-full cursor-pointer">
            <div className="shadow-lg group rounded-md  bg-black relative justify-center items-center  mx-auto content-div p-0">
                <article className="overflow-hidden rounded-lg shadow-lg group-hover:opacity-40">
                    <div className="h-full w-full">
                        <img alt="Placeholder" className="block max-h-80 w-full" src={phim.hinhAnh} />
                    </div>
                </article>
                <div className="absolute opacity-0 fd-sh group-hover:opacity-100 bottom-9 left-5">
                    <p className="text-md font-bold text-center text-white  tracking-wider leading-relaxed font-sans">{phim.tenPhim}</p>
                    <div className="text-center grid grid-cols-4 gap-2 grid-flow-row ">
                        <div class=" bg-white col-start-1 col-end-3">Xem Chi Tiết</div>
                        <div class=" bg-white">Đặt Vé</div>
                        <div class=" bg-white">Trailer</div>
                   
                    </div>
                </div>
            </div>

        </div>
    )
}
