import { Button, Tabs } from 'antd';
import React, { Fragment, useState, useEffect } from 'react';
import './HomeCSS/Home.css'
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { layDanhSachRapAction } from '../../redux/actions/layDanhSachCumRapAction';


const { TabPane } = Tabs;
const App = () => {
  const [tabPosition] = useState('left');


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachRapAction())
  }, [])

  //Kết nối redux lấy dữ liệu
  const { arrRap } = useSelector(state => state.QuanLyCumRapReducer)
  console.log(arrRap);

  // Render Cụm Rạp
  const renderCumRap = () => {
    return arrRap.map((sp, index) => {
      return <TabPane tab={

        <Fragment>
          <img className="rounded-md pb-2" width={50} src={sp.logo}></img>
        </Fragment>

      } key={index}>
        <Tabs tabPosition={tabPosition}>
          {sp.lstCumRap?.splice(0, 5).map((rap, index) => {
            return <TabPane tab={
              <Fragment>
                <div className="flex pb-1" style={{ width: '310px' }}>
                  <img className="rounded-md" width={50} src={rap.hinhAnh}></img>
                  <div className="text-left ml-2">
                    <h2 className="active:text-red-600">
                      {rap.tenCumRap}
                    </h2>
                    <p className="text-black active:text-red-600">Chi Tiết</p>
                  </div>
                </div>
              </Fragment>

            } key={index}>
              {rap?.danhSachPhim.splice(0, 4).map((phim, index) => {
                return <Fragment key={index}>
                  <div className="flex border-b p-3 border-rose-200 " >
                    <img className="rounded-md" style={{
                      width: '60px',
                      height: '80px'
                    }} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => {
                      e.target.onerror = null; e.target.src = "https://picsum.photos/75/75"
                    }}></img>
                    <div>
                      <h2 className="ml-2 text-xl">{phim.tenPhim}</h2>
                      <div className="grid grid-cols-5  gap-3 ml-2">
                        {phim.lstLichChieuTheoPhim?.splice(0, 7).map((lichChieu, index) => {
                          return <NavLink to="/" key={index}>
                            <button class="bg-red-300 focus:outline-none hover:bg-red-600 text-white font-semibold py-1 px-1 border rounded">
                              {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                            </button>

                          </NavLink>
                        })}
                      </div>
                    </div>
                  </div>
                </Fragment>
              })}
            </TabPane>
          })}
        </Tabs>
      </TabPane>
    })
  }

  return (
    <Fragment>
      <div class="gs-special-event-en home-title pb-4">
        <h2></h2>
      </div>
      <Tabs tabPosition={tabPosition} className="p-4 mt-5 shadow-md" style={{
        width: '80%',
        margin: 'auto',
        border: '3px solid',
        borderImage: 'linear-gradient(45deg, rgba(255, 0, 0, 0.822), rgb(25, 25, 26)) 10'
      }}>
        {renderCumRap()}
      </Tabs>
      <div class="gs-special-event-en home-title"> </div>
    </Fragment>
  );
};

export default App;