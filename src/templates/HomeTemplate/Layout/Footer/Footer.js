import React from 'react'
import './Footer.css'
import { useSelector } from 'react-redux';
import _ from 'lodash'

export default function Footer(props) {

  const {arrRap} = useSelector(state => state.QuanLyCumRapReducer)
  
  const arrRapChieu = _.map(arrRap,(heThongRap)=> _.pick(heThongRap,['logo','tenHeThongRap']))

  
  const renderLogo = () =>{
      return arrRapChieu.map((logo,index)=>{
        return <li className='inline-block mr-20' key={index}>
            <img width={75} src={logo.logo}></img>
        </li>

      })
  }

  return (
    <footer className="footer relative footer-cgv-container pt-1 border-b-2 2xl:m-auto rounded-lg">
     <div style={{
        width:"64.7%",
        margin:'auto'
     }}>
        <div class="footer-brand-slide container text-center">
          {renderLogo()}
        </div>
        <div className="container mx-auto">
          <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              <div className="flex flex-col">
                <span className="font-bold text-gray-700 uppercase mb-2">Brand Name</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Footer header 2</span>
                <span className="my-2"><a href="#" className="text-blue-700 text-md hover:text-blue-500">link 1</a></span>
                <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">link 1</a></span>
                <span className="my-2"><a href="#" className="text-blue-700 text-md hover:text-blue-500">link 1</a></span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Footer header 3</span>
                <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">link 1</a></span>
                <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">link 1</a></span>
                <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">link 1</a></span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-2">
              <p className="text-sm text-blue-700 font-bold mb-2">
                    Booking Movie Projects
              </p>
            </div>
          </div>
        </div>

     </div>
    </footer>

  )
}
