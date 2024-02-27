"use client"
import { firebaseRealTimeDb } from '@/config/firebaseConfig/firebaseConfig'
import { ref, set } from 'firebase/database'
import React from 'react'

const ClientRenderedButton = () => {
    let id = 1
    const handlePutData = (id:any) => {
        set(ref(firebaseRealTimeDb, `users/${id}`), {
            id: 2,
            userName: 'wahaaj',
            email: 'wahaaj@gmail.com',
        })
        id++
        alert(`user added `)
    }
    return (
        <>
            <div>ClientRenderedButton</div>
            <button onClick={()=>handlePutData(id)} >put data</button>
        </>
    )
}

export default ClientRenderedButton