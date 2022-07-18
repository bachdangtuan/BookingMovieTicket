


import { Fragment } from 'react'
import { Redirect,Route } from 'react-router'
import { USER_LOGIN } from '../../util/Settings/config'



const CheckoutTemplate = (props) => {

    
    
    const { Component, ...restRoute } = props


    return <Route {...restRoute} render={(propsRoute) => { //path, exact , component
        return <Fragment>
            <Component {...propsRoute}> </Component>
        </Fragment>
    }} />
}
export default CheckoutTemplate
