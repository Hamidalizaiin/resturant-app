import logo from '@/app/public/logo.png'
import Image from 'next/image'
import { FaCartShopping } from "react-icons/fa6";


const Navbar = () => {
  return (
    <nav className="hidden justify-between items-center px-12 bg-white sm:flex">
      <Image src={logo} alt='logo' />
      <div className="flex items-center gap-12 font-bold text-secondary">
        <p>Home</p>
        <p>Top Rated Items</p>
        <p >This Week Offers</p>
        <FaCartShopping className='text-black' />
      </div>
    </nav>
  )
}
export default Navbar