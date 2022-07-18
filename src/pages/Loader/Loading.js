import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { HomeTemplate } from '../../templates/HomeTemplate/HomeTemplate'
import Homepage from '../Home/Homepage'
import Home from '../Home/Homepage'

export default function Loading() {

    const [first, setfirst] = useState(false)
    const [first2, setfirst2] = useState(null)
    //GetAPI

    const getAPI = async () => {
        try {
            const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(res => {
                    console.log(res);
                })

            setfirst(true)
        } catch {
            console.log('errors');
        }
    }

    useEffect(() => {

        getAPI()
        return () => {

        }
    }, [])

    return (
        <div className="text-2xl">
            {(first === true) ? <Redirect to='/home'></Redirect>: <div className='text-4xl'>
                Loading
            </div>}
        </div>
    )
}


