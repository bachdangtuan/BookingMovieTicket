import React from 'react'

export default function Film(props) {
    const { phim } = props;
    console.log(phim);
    return (
        <div className="my-2 px-2 w-full cursor-pointer">
            <div className="shadow-lg group rounded-md  bg-black relative justify-center items-center  mx-auto content-div p-0">
                <article className="overflow-hidden rounded-lg shadow-lg group-hover:opacity-40">
                    <div className="h-full w-full">
                        <img alt="Placeholder" className="block max-h-80 w-full" src={phim.hinhAnh} />
                    </div>
                </article>
                <div className="absolute  fd-sh opacity-0 group-hover:opacity-100 bottom-14 left-5">
                    <p className="text-md font-bold text-center text-white  tracking-wider leading-relaxed font-sans">{phim.tenPhim}</p>
                    <div className="text-center">
                        <button className="text-center rounded-md p-2 w-20 mr-2 bg-red-600  text-white font-bold"><i className="fa-solid fa-play m-auto text-lg top-0 "></i></button>
                        <button className="text-center rounded-md p-2 w-20 mr-2 bg-red-600  text-white font-bold"><i className="fa-solid fa-play m-auto text-lg top-0 "></i></button>
                          <button className="text-center rounded-md p-2 w-20  bg-red-600  text-white font-bold"><i className="fa-solid fa-play m-auto text-lg top-0 "></i></button>
                    </div>
                </div>
            </div>

        </div>
    )
}
