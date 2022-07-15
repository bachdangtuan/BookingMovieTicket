import { Tabs } from 'antd';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinLichChieuAction } from '../../redux/actions/layThongTinLichChieuAction'
import { useEffect } from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom'
import detailStyle from '../../pages/Details/Details.module.css'

const { TabPane } = Tabs;

const Detail = (props) => {

    const { filmDetail } = useSelector(state => state.QuanLyPhimReducer)
    const dispatch = useDispatch();

    const heThongRap = filmDetail.heThongRapChieu
    console.log('heThongRap', heThongRap);

    useEffect(() => {
        //lấy theo paramsmeter từ path link, bóc tách phần tử
        let { id } = props.match.params;
        console.log(id);
        //dispatch action 
        dispatch(layThongTinLichChieuAction(id))
        return () => {

        }
    }, [])

    return (
        <div className=''>
            <div style={{
                backgroundImage: `url(${filmDetail.hinhAnh})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                minHeight: '60vh'
            }}>
                <div className="bg-gray-700 bg-opacity-95 shadow-2xl" style={{ minHeight: '60vh' }}>
                    <div className="grid grid-cols-12 z-30 " style={{
                        paddingTop: '5%'
                    }}>
                        <div className='2xl:col-span-4 2xl:col-start-4 md:col-span-4 md:col-start-4 xl:col-span-4 xl:col-start-4'>
                            <div className='grid-cols-2 grid'>
                                <img className={`${detailStyle['box-vien']}`} src={filmDetail.hinhAnh} alt="" />
                                <div className='ml-10 text-white'>
                                    <h1 className="text-2xl text-white uppercase">{filmDetail.tenPhim}</h1>
                                    {filmDetail.moTa}
                                    <div className='pt-4'>
                                        <p className="uppercase">Ngày Chiếu: {moment(filmDetail.ngayKhoiChieu).format('DD - MM - YYYY')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CircularProgressbar className='ml-20' value={filmDetail.danhGia} text={`${filmDetail.danhGia}/100`} />
                    </div>
                </div>
            </div>
            <div style={{
                minHeight: '40vh'
            }} className=" bg-opacity-30">
                <div className='2xl:container md:container md:m-auto lg:container lg:m-auto 2xl:m-auto py-10'>
                    <div className="m-auto p-4 test" style={{
                        width: '66.3%',
                        border: '3px solid',
                        borderImage: 'linear-gradient(45deg, rgba(255, 0, 0, 0.822), rgb(25, 25, 26)) 10',
                        boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)'
                    }}>
                        <Tabs defaultActiveKey="1" centered>
                            <TabPane tab={
                                <div className="uppercase font-semibold text-lg">
                                   Lịch Chiếu
                                </div>
                            } key="1">
                                <Tabs tabPosition='left'>
                                    {filmDetail.heThongRapChieu?.map((htr, index) => {
                                        return <TabPane tab={<div> <img src={htr.logo} alt="logo" width={50} style={{
                                            height:'80px',
                                            width:'80px'
                                        }} /> </div>} key={index}>
                                            {htr?.cumRapChieu.map((cumRap, index) => {
                                                return <div key={index} className='flex flex-row  p-3 border-b border-rose-100' >
                                                    <img src={cumRap.hinhAnh} alt="logo" height={20} className='mr-2' style={{
                                                        height:'90px'
                                                    }} />
                                                    <div>
                                                        <h1>{cumRap.tenCumRap}</h1>
                                                        <p>{cumRap.diaChi}</p>
                                                        <div className='grid grid-cols-7'>
                                                            {cumRap.lichChieuPhim?.splice(0, 5).map((lichChieu, index) => {
                                                                return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className='col-span-1 mr-3'>
                                                                    <button class="bg-red-300 focus:outline-none hover:bg-red-600 text-white font-semibold py-1 px-1 border rounded">

                                                                     {moment(lichChieu.ngayChieuGioChieu).format('HH:MM A')}
                                                                    </button>
                                                                </NavLink>
                                                            })}

                                                        </div>
                                                    </div>

                                                </div>
                                            })}
                                        </TabPane>
                                    })}

                                </Tabs>
                            </TabPane>
                            <TabPane tab={
                                <div className="uppercase font-semibold text-lg">
                                    Thông Tin Phim
                                </div>

                            } key="2">
                                {console.log(filmDetail)}
                                <p>{filmDetail.moTa}</p>
                            </TabPane>

                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Detail;