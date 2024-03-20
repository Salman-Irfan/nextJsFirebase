"use client"
import axios from 'axios'
import React, { useState } from 'react'

const CheckoutPage = () => {
    const itemName = 'fireimg'
    const itemPrice = 100
    const [quantity, setQuantity] = useState(1)
    const [finalAmount, setFinalAmount] = useState(itemPrice)
    // decrement
    const decrement = () => {
        if (quantity <= 1) {
            setQuantity(1)
            setFinalAmount(itemPrice)
        } else {
            setQuantity(quantity - 1)
            setFinalAmount(finalAmount - itemPrice)
        }
    }
    // increment quantity
    const increment = () => {
        setQuantity(quantity + 1)
        setFinalAmount(finalAmount + itemPrice)
    }
    // checkout
    const checkout = async () => {
        console.log(`first`)
        try {
            const response = await axios.post(`http://localhost:5000/checkout`, {
                items: [
                    {
                        id: 1,
                        quantity: quantity,
                        price: itemPrice,
                        name: itemName
                    }
                ]
            })
            console.log(response)
            window.location = response.data.url
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900 min-h-screen flex justify-center items-center">
            <div className="bg-gray-800 shadow-md rounded-lg p-8 text-white w-96">
                <h1 className="text-3xl font-semibold mb-4">{itemName}</h1>
                <div className="flex items-center mb-4">
                    <span className="mr-2">Quantity:</span>
                    <button onClick={decrement} className="bg-gray-700 text-white rounded-md px-3 py-1">-</button>
                    <span className="mx-2">{quantity}</span>
                    <button onClick={increment} className="bg-gray-700 text-white rounded-md px-3 py-1">+</button>
                </div>
                <div className="mb-4">Total Amount: ${finalAmount}</div>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                    onClick={checkout}
                >Checkout</button>
            </div>
        </div>
    )
}

export default CheckoutPage
