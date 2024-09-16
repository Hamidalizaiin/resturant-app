'use client';
import { useEffect, useState } from 'react';
import burger from '@/app/public/food_items_pic/fries.png';
import Image from 'next/image';
import ReactStars from "react-rating-stars-component";

async function fetchData() {
    const response = await fetch('http://localhost:3000/api/foodItems');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
}

const Item = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [option, setOption] = useState('All');
    let [quantity, setQuantity] = useState(0);

    useEffect(() => {

        const getData = async () => {
            try {
                const fetchedData = await fetchData();
                setData(fetchedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);
    console.log(data);

    return (
        <>
            <div className="hidden w-full h-8 bg-lightgray text-secondary items-center px-12 justify-between sm:flex">
                <p className="cursor-pointer" onClick={() => setOption('All')}>All</p>
                <p className="cursor-pointer" onClick={() => setOption('Fast Food')}>Fast Food</p>
                <p className="cursor-pointer" onClick={() => setOption('Main Course')}>Main Course</p>
                <p className="cursor-pointer" onClick={() => setOption('Appetizer')}>Appetizer</p>
                <p className="cursor-pointer" onClick={() => setOption('Snack')}>Snack</p>
                <p className="cursor-pointer" onClick={() => setOption('Dessert')}>Dessert</p>
            </div>

            {/* Dropdown for smaller screens */}
            <div className="flex w-full h-8 bg-lightgray items-center px-12 justify-between sm:hidden py-5">
                <div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex w-[220px] justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        aria-expanded={isOpen ? 'true' : 'false'}
                        aria-haspopup="true"
                    >
                        {option}
                        <svg
                            className="-mr-1 h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    {/* Dropdown options */}
                    <div
                        className={isOpen ? 'absolute text-secondary bg-gray-50 w-[220px] px-4 py-3 ring-1 ring-gray-300 shadow-md shadow-gray-400' : 'hidden'}
                    >
                        <p onClick={() => setOption('All')}>All</p>
                        <p onClick={() => setOption('Fast Food')}>Fast Food</p>
                        <p onClick={() => setOption('Main Course')}>Main Course</p>
                        <p onClick={() => setOption('Appetizer')}>Appetizer</p>
                        <p onClick={() => setOption('Snack')}>Snack</p>
                        <p onClick={() => setOption('Dessert')}>Dessert</p>
                    </div>
                </div>
                <div className="rounded-md w-30 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {option}
                </div>

            </div>
            {data.length <= 0 ? (
                <p className='text-black'>Loading...</p>
            ) : (
                <div className='grid grid-cols-1 w-full py-12 px-12 gap-3 place-items-center   sm:grid-cols-2 md:grid-cols-3  '>
                    {data.map((item: any, index: number) => {
                        return (
                            <div className=' py-2 border-2 border-secondary flex flex-row rounded-md shadow-lg hover:shadow-red-400  transition-all ease-in-out duration-100 w-[100%]'>
                                <Image src={burger} alt='' className='w-1/2' />
                                <div className='w-full flex flex-col justify-center'>
                                    <h2 className='text-2xl font-bold text-secondary'>{item.food_item}</h2>
                                    <p className='text-black'>${item.price}</p>
                                    
                                    <ReactStars
                                        count={5}
                                        value={item.ratings}
                                        size={24}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <div
                                        className='bg-secondary  rounded-md text-white text-center p-1 transition-all ease-in-out border-2 cursor-pointer border-secondary hover:bg-white hover:text-secondary   w-[80%]  '>
                                        Order Now
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default Item;
