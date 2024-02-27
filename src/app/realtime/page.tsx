import ClientRenderedButton from '@/components/ClientRenderedButton'
import { firebaseRealTimeDb } from '@/config/firebaseConfig/firebaseConfig'
import { ref, set } from 'firebase/database'
import React from 'react'

const page = () => {

    const {DATABASE_URL} = process.env
    console.log(DATABASE_URL)

    return (
        <>
            <div>page</div>
            <ClientRenderedButton/>
        </>
    )
}

export default page