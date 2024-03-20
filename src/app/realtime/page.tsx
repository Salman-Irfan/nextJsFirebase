import ClientRenderedButton from '@/components/ClientRenderedButton'
import { firebaseRealTimeDb } from '@/config/firebaseConfig/firebaseConfig'
import { ref, set } from 'firebase/database'
import React from 'react'

const page = () => {

    return (
        <>
            <div>page</div>
            <ClientRenderedButton/>
        </>
    )
}

export default page