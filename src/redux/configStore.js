import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk'
import { CarouselReducer } from './reducers/carouselReducer';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer';
import {QuanLyCumRapReducer} from './reducers/QuanLyCumRapReducer'



const rootReducer = combineReducers({
    //state Application
    CarouselReducer,
    QuanLyPhimReducer,
    QuanLyCumRapReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))