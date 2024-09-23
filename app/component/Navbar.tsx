"use client"
import logo from '@/app/public/logo.png'
import Image from 'next/image'
import Link from 'next/link';
import { useContext } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from '../cartContext/cartContext';


const Navbar = () => {
  const { cart, setCart } = useContext(CartContext)

  return (
    <nav className="hidden justify-between items-center px-12 bg-white sm:flex">
      <Image src={logo} alt='logo' />
      <div className="flex items-center gap-12 font-bold text-secondary relative">
        <Link href={'/'}>
          <p>Home</p>
        </Link>
        <p>Top Rated Items</p>
        <p >This Week Offers</p>
        <Link href={'/cart'} >
          <p className='w-6 h-6 border-2 rounded-full absolute bg-secondary -top-5 text-white flex justify-center items-center'>{cart.length}</p>
          <FaCartShopping className='text-black' />
        </Link>
      </div>
    </nav>
  )
}
export default Navbar