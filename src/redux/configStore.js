import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { CarouselReducer } from './reducers/carouselReducer';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer';




const rootReducer = combineReducers({
    //state Application
    CarouselReducer,
    QuanLyPhimReducer

})

export const store = createStore(rootReducer, applyMiddleware(thunk))