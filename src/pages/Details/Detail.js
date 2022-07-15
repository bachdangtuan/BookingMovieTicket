import { Tabs } from 'antd';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinLichChieuAction } from '../../redux/actions/layThongTinLichChieuAction'
import { useEffect } from 'react';
import moment from 'moment';
import detailStyle from '../../pages/Details/Details.module.css'



export default function Detail(props) {

    console.log(detailStyle);
    const percentage = 66;

    const { filmDetail } = useSelector(state => state.QuanLyPhimReducer)

    console.log(filmDetail);
    const dispatch = useDispatch();

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
        <div>
            <div style={{
                backgroundImage: `url(${filmDetail.hinhAnh})`,
                backgroundSize: '100%',
                backgroundPosition: 'center',
                minHeight: '60vh'
            }}>
                <div className="h-full w-full bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100" style={{ minHeight: '60vh' }}>
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
            }} className="h-full w-full bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100 ">
                <div className='container'>
                    {lichDatChieu()}

                </div>
            </div>
        </div>
    )
}

// Lịch Đặt Chiếu
const lichDatChieu = () => {
    const { TabPane } = Tabs;
    return (
        <div className='container pt-5' style={{
            width: '66.3%',
            margin: 'auto'
        }}>
            <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a href="#tabs-home" className="text-2xl uppercase mr-5" id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab">lịch chiếu</a>
                </li>
                <li className="nav-item mr-2" role="presentation">
                    <a href="#tabs-messages" className="text-2xl uppercase mr-5" id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab" aria-controls="tabs-messages" >THÔNG TIN</a>
                </li>
                <li className="nav-item mr-2" role="presentation">
                    <a href="#tabs-vote" className="text-2xl uppercase" id="tabs-vote-tab" data-bs-toggle="pill" data-bs-target="#tabs-vote" role="tab"  >đánh giá</a>
                </li>
            </ul>

            <div className="tab-content" id="tabs-tabContent">
                <div className="tab-pane fade show active" id="tabs-home" role="tabpanel">
                    <Tabs tabPosition={'left'}>
                        <TabPane tab="Tab 1" key="1">
                            Content of Tab 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            Content of Tab 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of Tab 3
                        </TabPane>
                    </Tabs>
                </div>
                <div className="tab-pane fade" id="tabs-messages" role="tabpanel">
                    Tab 3 content
                </div>
                <div className="tab-pane fade" id="tabs-vote" role="tabpanel">
                        Đánh giá
                </div>
            </div>
        </div>
    );
};
