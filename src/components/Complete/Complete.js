import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function Complete() {

    const { isComplete } = useSelector(state => state.LoadingReducer)
    console.log("isComplete",isComplete);
    const modal = {
        backgroundColor: "#fefefe",
        margin: 'auto',
        padding: '20px',
        border: '1px solid #888',
        width: '20%',
    }
    const divModal = {
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
    }

    const [first, setfirst] = useState(divModal)

    const dispatch = useDispatch()

    return (

        <Fragment>
            {isComplete ?
                <div style={first}>
                    <div style={modal}>
                        <span className="close cursor-pointer" onClick={() =>{
                            dispatch({
                                type:'DAT_VE_HOAN_TAT_OFF'
                            })
                        }}>×</span>
                        <p>Đặt Vé Thành Công..</p>
                    </div>



                </div>

                : ''



            }


        </Fragment>
    )
}
