"use client"
import { firebaseAuth } from '@/config/firebaseConfig/firebaseConfig'
import { signInWithEmailAndPassword  } from 'firebase/auth'
import React, { useState } from 'react'

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to sign up user
    const handleLoginUser = async (e: any) => {
        e.preventDefault()
        try {
            const response = await signInWithEmailAndPassword (
                firebaseAuth,
                email,
                password
            )
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
                <div className="max-w-md w-full space-y-8 p-8 rounded-lg shadow-lg bg-gradient-to-r from-blue-900 to-gray-900">
                    <h2 className="text-3xl font-bold text-white text-center">Login</h2>
                    <form className="mt-8 space-y-6" onSubmit={handleLoginUser}>
                        <div>
                            <input
                                type="email"
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-blue-700 placeholder-blue-300 text-blue-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-blue-700 placeholder-blue-300 text-blue-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:bg-gradient-to-r hover:from-green-700 hover:to-green-900 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default SignUpPage;
