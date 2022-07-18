import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk'
import { CarouselReducer } from './reducers/carouselReducer';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer';
import {QuanLyCumRapReducer} from './reducers/QuanLyCumRapReducer'
import {QuanLyNguoiDungReducer} from './reducers/QuanLyNguoiDungReducer'
import {QuanLyDatVeReducer} from './reducers/QuanLyDatVeReducer'

const rootReducer = combineReducers({
    //state Application
    CarouselReducer,
    QuanLyPhimReducer,
    QuanLyCumRapReducer,
    QuanLyNguoiDungReducer,
    QuanLyDatVeReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))