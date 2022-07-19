import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

export default function LoadingAPI() {



  const { isLoading } = useSelector(state => state.LoadingReducer)

  return (

    <Fragment>
        {isLoading ?
        
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: '99'
        }}> <h1 className='text-4xl text-white'>Loading</h1></div>
  
        : ''
  
  
  
      }


    </Fragment>
  )
}
