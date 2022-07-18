import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import './Header.css'
export default function Header() {
    const [dropDown, setDropDown] = useState(true);

    return (
        <div className=" 2xl:mx-auto rounded-lg shadow-md w-full z-50">
            <div className="bg-white page-header rounded py-3 px-2 pl-5 pr-5">
                <nav className="flex justify-between 2xl:container  2xl:mx-auto   ">
                    <div className="flex items-center space-x-3">

                        <NavLink to="/" className="font-bold text-2xl leading-6 text-indigo-800">
                            <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png" alt="CGV Cinemas" className="large" />
                        </NavLink>
                    </div>
                    {/* For medium and plus sized devices */}
                    <div>
                        <ul className="hidden md:flex flex-auto space-x-2">

                            <NavLink className='text-black text-3xl font-bold text-center pr-5 pt-3 uppercase ' to="/home" activeClassName='text-red-600 font-bold'>
                                HOME
                            </NavLink>

                            <NavLink className='text-black text-3xl font-bold text-center pr-5 pt-3 uppercase' to="/news" activeClassName='text-red-600 font-bold'>
                               TIN TỨC</NavLink>

                            <NavLink className='text-black text-3xl font-bold text-center pr-5 pt-3 uppercase' to="/contact" activeClassName='text-red-600 font-bold'>
                                LIÊN HỆ</NavLink>

                        </ul>
                    </div>
                    <div>
                        <ul className="hidden md:flex flex-auto space-x-2">
                            <li className={` text-blue-800 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>
                                <i className="fa-solid fa-right-to-bracket" />
                            </li>
                            <li className={` text-blue-800 border border-white bg-gray-5 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>
                                <i className="fa-regular fa-user" />

                            </li>

                        </ul>
                    </div>
                    <div className="block md:hidden w-50">
                        <div onClick={() => setDropDown(!dropDown)} className="cursor-pointer px-2 py-2 text-white bg-indigo-600 rounded flex justify-between items-center w-full">
                            <div className="flex space-x-2">
                                <h1 className='text-white'> Menu</h1>
                            </div>
                            <svg id="ArrowSVG" className={`${dropDown ? '' : 'rotate-180'} transform duration-100`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className=" relative z-50">
                            <ul id="list" className={`${dropDown ? 'hidden' : 'block'} font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md`}>
                                <li
                                    className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Trang Chủ</li>
                                <li className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Tin Tức</li>
                                <li className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Liên Hệ</li>
                                <li className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Đăng Ký</li>
                                <li className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal">Đăng Nhập</li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* for smaller devcies */}
            </div>
        </div>
    )
}
