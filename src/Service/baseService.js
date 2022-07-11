import Axios from "axios"
import {DOMAIN,TOKEN,TokenCybersoft} from '../util/Settings/config'

export class baseService {
    //put json về phía backend
    put = (url,model) => {
        return  Axios({
            url:`${DOMAIN}${url}`,
            method:'PUT',
            data:model,
            headers: {
                TokenCybersoft: TokenCybersoft,
                Authorization: 'Bearer ' + localStorage.getItem(TOKEN)} 
        }) 
    }

    post = (url,model) => {
        return Axios({
            url:`${DOMAIN}${url}`,
            method:'POST',
            data:model,
            headers: {
                TokenCybersoft: TokenCybersoft,
                Authorization: 'Bearer ' + localStorage.getItem(TOKEN)
            } 
        }) 
    }


    get = (url) => {
        return Axios({
            url:`${DOMAIN}${url}`,
            method:'GET',
            headers: {
                TokenCybersoft: TokenCybersoft,
                Authorization: 'Bearer ' + localStorage.getItem(TOKEN)} 
        })
    }

    delete = (url) => {
        return Axios({
            url:`${DOMAIN}${url}`,
            method:'DELETE',
            headers: {
                TokenCybersoft: TokenCybersoft,
                Authorization: 'Bearer ' + localStorage.getItem(TOKEN)} //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }
}