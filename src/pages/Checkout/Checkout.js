import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { USER_LOGIN } from '../../util/Settings/config'
import _ from 'lodash'
import { datVeAction, getChiTietPhongVe } from '../../redux/actions/quanLyDatVeAction'
import { CloseSquareOutlined, UserOutlined, CheckOutlined } from '@ant-design/icons'
import style from './Checkout.module.css'
import './Checkout.css'
import { DAT_VE } from '../../redux/types/quanLyDatVetype'
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe'
import { Tabs } from 'antd';

// Đặt vé
function Checkout(props) {

  const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

  const { chiTietPhongVe } = useSelector(state => state.QuanLyDatVeReducer)


  //Danh Sách Ghế 
  const { danhSachGheXemPhim } = useSelector(state => state.QuanLyDatVeReducer)
  //Danh Sách Ghế đang đặt
  const { danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducer)

  console.log('danhSachGheDangDat', danhSachGheDangDat);

  const dispatch = useDispatch();

  useEffect(() => {


    const action = getChiTietPhongVe(props.match.params.id)

    dispatch(action)

    return () => {

    }
  }, [])

  //Tính Tổng Tiền Ghế
  const tongTien = danhSachGheDangDat.reduce((tongTien, ghe, index) => {
    return tongTien += ghe.giaVe;
  }, 0)


  //Render Danh Sách Ghế
  const renderDanhSachGhe = () => {
    return danhSachGheXemPhim.map((ghe, index) => {

      const classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
      const classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
      let classGheDangDat = '';

      let classGheMinhDat = '';
      //Mình Đặt
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheMinhDat = 'gheMinhDat'
      }

      // Kiểm tra từng ghế Render xem có ghế đang đặt hay không
      let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)

      if (indexGheDD != -1) {
        classGheDangDat = 'gheDangDat'
      }


      return <Fragment key={index}>
        <button disabled={ghe.daDat} className={`ghe ${style[classGheVip]} ${classGheMinhDat} ${classGheDangDat} ${style[classGheDaDat]}`} key={index} onClick={() => {
          dispatch({
            type: DAT_VE,
            gheDuocChon: ghe
          })
        }} >

          {ghe.daDat ? classGheMinhDat != '' ? <UserOutlined /> : <CloseSquareOutlined /> : ghe.stt}

        </button>
        {(index + 1) % 16 === 0 ? <br /> : ''}
      </Fragment>


    })
  }

  //Render Ghế Được Chọn

  const renderGheDuocChon = () => {
    return danhSachGheDangDat.map((gheDD, index) => {
      return <div key={index} className='mr-2'>
        <span className='text-center justify-center ml-1'>{gheDD.tenGhe}</span>
      </div>

    })
  }

  // Chuyển Hướng Trang khi chưa Đăng Nhập
  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to='/login'></Redirect>
  }


  return (
    <div className='2xl:container 2xl:m-auto'>
      <div classname="max-w-screen-2xl 2xl:m-auto">
        <div className='flex mt-10'>
          <div className='w-3/4 border-2 border-gray-700'>
            <div className='flex flex-col items-center mt-8 relative'>
              <div className='w-3/5 h-3 bg-black'></div>
              <div className="w-3/5" style={{ borderBottom: '50px solid gray', borderLeft: '50px solid transparent', borderRight: '50px solid transparent', filter: 'drop-shadow(rgb(0, 0, 0) 0px 10px 10px)' }} />
              <div className="text-base absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Màn hình</div>
            </div>
            <div className='flex flex-col items-center mt-8'>
              <div className='flex'>
                <div>
                  {renderDanhSachGhe()}
                </div>
              </div>
            </div>
            <div className='flex justify-center flex-wrap mt-8'>
              <table className='divide-y divide-gray-200 w-3/4'>
                <thead className='bg-gray-50 p-5'>
                  <tr>
                    <th>Ghế Chưa Đặt</th>
                    <th>Ghế Đang Đặt</th>
                    <th>Ghế Vip</th>
                    <th>Ghế Đã Đặt</th>
                    <th>Ghế Mình Đặt</th>
                  </tr>
                </thead>
                <tbody className='bg-gray-50 p-5'>
                  <tr>
                    <td><button className='ghe text-center'> <CheckOutlined></CheckOutlined> </button></td>
                    <td><button className='ghe gheDangDat text-center'> <CheckOutlined></CheckOutlined> </button></td>
                    <td><button className='ghe gheVip text-center'> <CheckOutlined></CheckOutlined> </button></td>
                    <td><button className='ghe gheDaDat text-center'> <CheckOutlined></CheckOutlined> </button></td>
                    <td><button className='ghe gheMinhDat text-center'> <CheckOutlined></CheckOutlined> </button></td>
                  </tr>
                </tbody>

              </table>


            </div>

          </div>
          <div className="w-1/4 border-2 border-gray-700">
            <div className="px-4">
              <h1 className="text-green-500 text-2xl text-center">{tongTien.toLocaleString()} VNĐ</h1>
              <div className="w-full border-b border-gray-200" />
              <div className="py-2">
                <div className='row'>
                  <div className='col-8'>
                    <h1 className="text-xl font-semibold">
                      <span className="bg-red-500 text-white p-1 rounded mr-2 text-sm">C13
                      </span>
                      {chiTietPhongVe.tenPhim}
                    </h1>
                    <p className="mb-2 font-semibold">Địa Chỉ: {chiTietPhongVe.diaChi}</p>
                    <p className="mb-0 font-semibold">{chiTietPhongVe.ngayChieu} - {chiTietPhongVe.gioChieu} - {chiTietPhongVe.tenRap}</p>
                  </div>
                  <img src={chiTietPhongVe.hinhAnh} width={75}></img>
                </div>
              </div>
              <div className="w-full border-b border-gray-200" />
              <div className="flex justify-between py-2">
                <div className="mb-0 font-semibold text-center text-red-500">Ghế
                  <div className="grid grid-cols-8 mb-0" >
                    {renderGheDuocChon()}
                  </div>
                </div>
              </div>
              <div className="w-full border-b border-gray-200" />
              <div className="py-2">
                <p className="mb-2 text-gray-400">Email</p>
                <p className="font-semibold mb-0">{userLogin.email}</p>
              </div>
              <div className="w-full border-b border-gray-200" />
              <div className="py-2">
                <p className="text-gray-400 mb-2">Điện thoại</p>
                <p className="mb-0 font-semibold">{userLogin.soDT}</p>
              </div>
              <div className="w-full border-b border-gray-200" />
              <div className="py-2 flex justify-between items-center md:flex-wrap">
                <div>
                  <p className="text-gray-400 mb-2">Mã giảm giá</p>
                  <input className="font-semibold placeholder-black py-2 border-0 outline-none mb-0" type="text" placeholder="Nhập tại đây ..." /></div><div className="px-3 md:mt-3 text-white bg-red-500 rounded flex items-center h-10 font-semibold cursor-pointer hover:bg-red-700 transition-all ease-in-out duration-500">Áp dụng</div>
              </div>
              <div className="w-full border-b border-gray-200" />
              <p className="py-2 mb-0 font-semibold">Hình thức thanh toán</p>
            </div>
            <div className="fl">
              <p className="text-center font-semibold">
                <span className="text-red-500 font-bold mr-2 text-xl">!</span>
                Vé đã mua không thể đổi hoặc hoàn tiền
              </p>
              <div className="bg-green-500 mt-10 text-center text-white p-3 font-semibold text-xl hover:bg-green-700 transition-all duration-500 ease-in-out cursor-pointer" onClick={() => {
                const thongTinDatVe = new ThongTinDatVe();
                thongTinDatVe.maLichChieu = props.match.params.id;
                thongTinDatVe.danhSachVe = danhSachGheDangDat

                console.log(thongTinDatVe);

                dispatch(datVeAction(thongTinDatVe))

              }}>Đặt vé</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const App = (props) => (
  <div className='2xl:container 2xl:m-auto md:container md:m-auto xl:container xl:m-auto'>
    <Tabs defaultActiveKey="1" onChange={onChange}>
      <TabPane tab="THANH TOÁN VÀ CHỌN GHẾ" key="1">
        <Checkout {...props}></Checkout>
      </TabPane>
      <TabPane tab="KẾT QUẢ ĐẶT VÉ" key="2">
        <KetQuaDatVe {...props}></KetQuaDatVe>
      </TabPane>
    </Tabs>
  </div>
);

export default App;
// Kết Quả Đặt Vé

function KetQuaDatVe(props) {
  return <div>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Kết Quả Đặt Vé</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
        </div>
        <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Holden Caulfield</h2>
                <p className="text-gray-500">UI Designer</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84" />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Henry Letham</h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88" />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Oskar Blinde</h2>
                <p className="text-gray-500">Founder</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90" />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">John Doe</h2>
                <p className="text-gray-500">DevOps</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94" />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Martin Eden</h2>
                <p className="text-gray-500">Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Boris Kitua</h2>
                <p className="text-gray-500">UX Researcher</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90" />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Atticus Finch</h2>
                <p className="text-gray-500">QA Engineer</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94" />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Alper Kamu</h2>
                <p className="text-gray-500">System</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98" />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Rodrigo Monchi</h2>
                <p className="text-gray-500">Product Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
}