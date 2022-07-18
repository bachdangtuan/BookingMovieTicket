import { Fragment } from 'react'
import { Route } from 'react-router'





export const UserTemplate = (props) => {

    const { Component, ...restRoute } = props

    return <Route {...restRoute} render={(propsRoute) => { //path, exact , component
        return <Fragment>
            <Component {...propsRoute}> </Component>

        </Fragment>
    }} />
}
