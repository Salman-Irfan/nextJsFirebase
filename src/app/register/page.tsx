"use client"
import { firebaseAuth } from '@/config/firebaseConfig/firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React from 'react'

const page = () => {
    // func to signup user

    const handleSignUpUser = async () => {
        try {
            const response = await createUserWithEmailAndPassword(
                firebaseAuth,
                `wahaaj@gmail.com`,
                `password`
            )
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div>Sign Up</div>
            <button className='btn bg-blue-700 hover:bg-blue-300'
                onClick={handleSignUpUser}
            >
                create user with email and password
            </button>
        </>
    )
}

export default page