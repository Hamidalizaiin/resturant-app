'use client'
import Image from "next/image"
import { useContext, useState } from "react"
import PopUp from "./PopUpContainer"
import { CartContext } from "@/app/cartContext/CartContext"
import burger from '@/app/public/food_items_pic/fries.png'
const PopUpForOrders = ({ orderData, setOrderData, setIsPopUp, isPopUp }:
    { orderData: any, setOrderData: any, setIsPopUp: any, isPopUp: any }) => {

    // eslint-disable-next-line prefer-const
    let [quantity, setQuantity] = useState(1);
    const { cart, setCart } = useContext(CartContext)
    const { coldDrinkName, coldDrinkSize } = orderData

    function selectDrink(e: any) {
        setOrderData({
            ...orderData,
            coldDrinkName: e.target.value,
        })
    }
    function selectDrinkSize(e: any) {
        setOrderData({
            ...orderData,
            coldDrinkSize: e.target.value
        })
    }
    function placeOrder() {
        if (coldDrinkName === "" || coldDrinkSize === "") {
            alert('please fill all the fileds')
        } else {
            setIsPopUp(false)
            setCart([...cart, { ...orderData, itemQuantity: quantity, }]);
            alert('Thanks for ordering')
            setQuantity(1)
        }
    }

    return (
        <PopUp setIsPopUp={setIsPopUp} isPopUp={isPopUp} >
            <Image src={burger} alt='burger' className='w-1/2 hidden sm:block' />
            <div className='gap-3 flex flex-col  w-full px-2 '>
                <p className=' flex justify-between items-baseline text-4xl text-secondary font-sans font-bold'>
                    {orderData.name}

                    <span className='text-black text-xl'>
                        ${orderData.price}
                    </span>
                </p>

                <div className='text-black flex gap-6'>
                    <p onClick={() => { quantity <= 1 ? setQuantity(1) : setQuantity(quantity -= 1) }} className='p-1 cursor-pointer border-2 shadow-md border-secondary w-8 text-center active:bg-secondary active:text-white '>-</p>
                    <p className='bg-secondary w-12 text-center text-white font-bold 0 p-1'>{quantity}</p>
                    <p onClick={() => setQuantity(quantity += 1)} className='p-1 cursor-pointer border-2 shadow-md border-secondary w-8 text-center active:bg-secondary active:text-white '>+</p>
                </div>

                {/* for drink */}
                <div className="border-2 border-secondary"></div>
                <label htmlFor="take a drink" className='text-black text-xl'>Take a drink</label>
                <label htmlFor="Pepsi" className='text-black flex justify-between'>
                    Pepsi
                    <input
                        type="radio"
                        name='take a drink'
                        value="Pepsi"
                        onClick={selectDrink}
                    />
                </label>
                <label htmlFor="Pakola" className='text-black flex justify-between'>
                    Pakola
                    <input
                        type="radio"
                        name='take a drink'
                        value="Pakola"
                        onClick={selectDrink}
                    />
                </label>

                <label htmlFor="Coca Cola" className='text-black flex justify-between'>
                    Coca Cola
                    <input
                        type="radio"
                        name='take a drink'
                        value="Coca Cola"
                        onClick={selectDrink}
                    />
                </label>
                {/* for drink */}
                <div className="border-2 border-secondary"></div>
                <label htmlFor="take a size" className="text-black text-xl  ">Choose a size:</label>
                <label htmlFor="500ml" className='text-black flex justify-between'>
                    500ml
                    <input
                        type="radio"
                        name='take a size'
                        value="500ml"
                        onChange={selectDrinkSize}
                    />
                </label>

                <label htmlFor="1L" className='text-black flex justify-between'>
                    1L
                    <input
                        type="radio"
                        name='take a size'
                        value="1L"
                        onChange={selectDrinkSize}
                    />
                </label>

                <label htmlFor="1.5L" className='text-black flex justify-between'>
                    1.5L
                    <input
                        type="radio"
                        name='take a size'
                        value="1.5L"
                        onChange={selectDrinkSize}
                    />
                </label>
                <div className="flex justify-between px-2">
                    <p className='text-black '>TOTAL</p>
                    <p className='text-black'>${(orderData.price * quantity).toFixed(2)}</p>
                </div>
                <div onClick={placeOrder} className='w-full bg-secondary p-2 text-center rounded-md border-2 border-secondary active:bg-white active:text-secondary'>
                    <p>Place order</p>
                </div>
            </div>
        </PopUp>
    )
}

export default PopUpForOrders