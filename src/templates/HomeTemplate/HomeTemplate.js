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
            <MidNavBar></MidNavBar>  
            <HomeCarousel {...propsRoute} ></HomeCarousel>
            <Component {...propsRoute}> </Component>
            <Footer></Footer>
        </Fragment>

    }} />
}
// background: url(../images/bg_c_bricks.png) repeat-x scroll 0 124px rgba(0, 0, 0, 0);
// }