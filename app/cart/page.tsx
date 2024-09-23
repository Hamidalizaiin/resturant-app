'use client'
import React, { useContext } from 'react'
import { CartContext } from '../cartContext/cartContext'

const cartPage = () => {
    const { cart } = useContext(CartContext)

    if (cart.length <= 0) {
        return (
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Your Cart is Empty!</h2>
                <p className="text-gray-500 mb-4">Looks like you haven't added anything to your cart yet.</p>
                <button
                    className="transition-all ease-in-out bg-secondary  text-white px-6 py-2 rounded-md border-2 border-secondary hover:text-secondary hover:bg-white hover:shadow-md">
                    Lets Select Some Cheezy
                </button>
            </div>)
    }
    return (
        <div className="container mx-auto p-4 md:p-8">
            <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

            <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className='text-black flex justify-between my-12'>
                    <p>Name</p>
                    <p>Quantity</p>
                    <p> Drink</p>
                    <p>Total</p>
                </div>
                {cart.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row justify-between items-center border-b pb-4 mb-4"
                    >
                        <div className="text-lg font-semibold text-secondary">{item.name}</div>
                        <div className="text-lg font-semibold text-gray-800">{item.itemQuantity}</div>
                        <div className="text-lg font-semibold text-gray-800">${item.price}</div>
                    </div>
                ))}

                {/* Conditional rendering for cold drink if it exists */}
                {/* {coldDrinkName && coldDrinkPrice > 0 && (
                    <div className="flex flex-col md:flex-row justify-between items-center border-b pb-4 mb-4">
                        <div className="text-lg font-semibold">{coldDrinkName}</div>
                        <div className="text-lg font-semibold text-gray-800">${coldDrinkPrice}</div>
                    </div>
                )} */}

                {/* Total Section */}
                <div className="flex justify-between items-center mt-4">
                    <div className="text-lg font-semibold text-secondary">Total:</div>
                    {/* <div className="text-xl font-bold text-gray-900">${calculateTotal().toFixed(2)}</div> */}
                </div>
            </div>

            {/* Checkout Button */}
            <div className="text-center mt-6">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
                    Proceed to Checkout
                </button>
            </div>
        </div>

    )
}

export default cartPage

