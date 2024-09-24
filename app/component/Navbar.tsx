"use client"
import logo from '@/app/public/logo.png'
import Image from 'next/image'
import Link from 'next/link';
import { useContext, useState } from 'react';
import { FaBars, FaCartShopping } from "react-icons/fa6";
import { CartContext } from '../cartContext/CartContext';
import { FaTimes } from 'react-icons/fa';


const Navbar = () => {
  const { cart } = useContext(CartContext)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="justify-between items-center px-4 sm:px-12 bg-white  flex pt-2">
        <Image src={logo} alt='logo' className='w-20 sm:w-20' />
        <div className="hidden items-center gap-12 font-bold text-secondary relative sm:flex">
          <Link href={'/'}>
            <p>Home</p>
          </Link>
          <Link href={'/'}>
            <p>Top Rated Items</p>
          </Link> 
          <Link href={'/'}>
            <p >This Week Offers</p>
          </Link>  
          <Link href={'/cart'} >
            <p className={cart.length <= 0 ? "hidden" : 'w-6 h-6 border-2 rounded-full absolute bg-secondary -top-6 text-white flex justify-center items-center'}>{cart.length}</p>
            <FaCartShopping className='text-black' size={20} />
          </Link>
        </div>

        {/* SMALL SCREEN) */}
        <div className='flex  items-center gap-5 sm:hidden'>
          <Link href={'/cart'} >
            <p className={cart.length <= 0 ? "hidden" : 'w-6 h-6 border-2 rounded-full absolute bg-secondary top-1 text-white flex justify-center items-center'}>{cart.length}</p>
            <FaCartShopping className='text-black' size={20} />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes className='text-black' /> : <FaBars className='text-black' />}
          </button>
          {
            isOpen && (
              <div className="flex flex-col items-center justify-center absolute top-20 h-[200px] right-0 left-0 z-20 bg-white border-t-2 border-gray-100">
                <Link href={'/'} onClick={() => setIsOpen(false)}>
                  <p className="py-2 text-secondary font-bold">Home</p>
                </Link>
                <Link href={'/top-rated'} onClick={() => setIsOpen(false)}>
                  <p className="py-2 text-secondary font-bold">Top Rated Items</p>
                </Link>
                <Link href={'/offers'} onClick={() => setIsOpen(false)}>
                  <p className="py-2 text-secondary font-bold">This Week Offers</p>
                </Link>

              </div>
            )
          }
        </div>
      </nav>

    </header >

  )
}
export default Navbar