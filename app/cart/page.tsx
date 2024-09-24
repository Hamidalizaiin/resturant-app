'use client'
import React, { useContext } from 'react'
import { CartContext } from '../cartContext/CartContext'
import Link from 'next/link'

const CzartPage = () => {
    const { cart, setCart } = useContext(CartContext)

    function calculateTotal() {
        const totalPrice = cart.reduce((acc, item) => {
            return acc + Number(item.price) + item.itemQuantity;
        }, 0);

        return totalPrice
    }


    if (cart.length <= 0) {
        return (
            <div className='h-screen flex flex-col justify-center items-center border-2'>
                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center border-2 max-w-[800px]x">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Your Cart is Empty!</h2>
                    <p className="text-gray-500 mb-4">Looks like you havenot added anything to your cart yet.</p>
                    <Link href={'/'}>
                        <button
                            className="transition-all ease-in-out bg-secondary  text-white px-6 py-2 rounded-md border-2 border-secondary hover:text-secondary hover:bg-white hover:shadow-md">
                            Lets Select Some Cheezy
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
    return (
        <div className="container mx-auto p-4 md:p-8">
            <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

            <div className="bg-white p-4 rounded-lg shadow-lg overflow-x-scroll sm:overflow-hidden">
                <table className="table-auto border-collapse w-full ">
                    <thead >
                        <tr className='text-black text-left'>
                            <th className=" border-2 border-black px-4 py-2">Name</th>
                            <th className=" border-2 border-black px-4 py-2">Quantity</th>
                            <th className=" border-2 border-black px-4 py-2">Cold Drink</th>
                            <th className=" border-2 border-black px-4 py-2">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={index}>
                                <td className="text-lg text-secondary font-semibold border-2 border-black px-4">{item.name}</td>
                                <td className="text-sm font-semibold text-gray-800  border-2 border-black px-4">{item.itemQuantity}</td>
                                <td className="text-sm font-semibold text-gray-800  border-2 border-black px-4">{item.coldDrinkName}/{item.coldDrinkSize}</td>
                                <td className="text-sm font-semibold text-gray-800  border-2 border-black px-4">${item.price * item.itemQuantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex justify-between items-center mt-4">
                    <div className="text-lg font-semibold text-secondary">Total:</div>
                    <div className="text-xl font-bold text-gray-900">${calculateTotal()}</div>
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <Link href="/" onClick={() => {
                    alert('the rider is on its way')
                    setCart([])
                }}>
                    <button
                        className="mx-auto transition-all ease-in-out bg-secondary  text-white px-6 py-2 rounded-md border-2 border-secondary hover:text-secondary hover:bg-white hover:shadow-md">
                        check out
                    </button>
                </Link>
            </div>
        </div>

    )
}

export default CzartPage

