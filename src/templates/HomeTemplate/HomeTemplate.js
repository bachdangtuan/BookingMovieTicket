import { Fragment } from 'react'
import { Route } from 'react-router'
import Header from './Layout/Header/Header'
import HomeCarousel from './Layout/Carousel/HomeCarousel';
import Footer from './Layout/Footer/Footer';
import MidNavBar from './Layout/MidNavbar/MidNavBar';



export const HomeTemplate = (props) => {

    const { Component, ...restRoute } = props

    return <Route {...restRoute} render={(propsRoute) => { //path, exact , component
        return <Fragment>
            <Header  {...propsRoute} /> 
            <Component {...propsRoute}> </Component>
            <Footer></Footer>
        </Fragment>
    }} />
}
