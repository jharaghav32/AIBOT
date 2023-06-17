'use client'
import React, { useState } from 'react';
import {RiMoonFill,RiSunFill} from 'react-icons/ri'
import { AiOutlineMenu } from 'react-icons/ai';
import {useTheme,} from 'next-themes'
import Link from 'next/link'
type Props={
  dark:boolean,
  setdark:React.Dispatch<React.SetStateAction<boolean>>
}
const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const[dark,setdark]=useState(false);

  return (
    <nav className='bg-white dark:bg-[#191919] dark:text-white p-5 shadow-md mb-10 flex fixed top-0 left-0 z-20 w-full  justify-between items-center font-lobster text-xl md:text-3xl overflow-x-hidden mx-2 ' >
      <Link href="/">
            <img src="https://flowbite.com/docs/images/logo.svg" alt='logo' className='h-[2rem] mr-3 sm:h-7   '/>
      </Link>
            <ul className='flex items-center'>
              <div className='md:flex hidden'>

                <li className='text-xl dark:hover:text-hovcol mx-2 dark:text-blue-200 text-blue-800 ' ><Link href='/' className='active:text-hovcol'>Our Products</Link></li>
                <li className='text-xl dark:hover:text-hovcol mx-2 dark:text-blue-200 text-blue-800'><Link href='/pricing'>Pricing</Link></li>
                <li className='text-xl dark:hover:text-hovcol mx-2 dark:text-blue-200 text-blue-800'><Link href='/faq'>FAQ</Link></li>
                <li className='text-xl dark:hover:text-hovcol mx-2 dark:text-blue-200 text-blue-800'><Link href='/affilate'>Affilate Program</Link></li>
                <li className='text-xl dark:hover:text-hovcol mx-2 dark:text-blue-200 text-blue-800'><Link href='/blog'>Blog</Link></li>
              </div>
              
              <li className='py-1 px-1 md:px-4 bg-blue-400 hover:bg-blue-500 rounded-md dark:text-white text-black ml-5 font-lobster dark:bg-slate-800  dark:hover:bg-slate-700 dark:text-hovcol '><Link href='/chat' className='text-xl md:text-3xl'  rel='noopener noreferrer'>Try AI Bot</Link></li>
              <li className='hidden dark:block cursor-pointer ml-3 '><RiMoonFill onClick={() => {
                setdark(false)
              }} /></li>
              <li className=' cursor-pointer 'onClick={()=>{setdark(true)}} ><RiSunFill  className="block dark:text-yellow-400 dark:hidden   text-xl md:text-4xl " /></li>
<div className='md:hidden flex flex-col flex-1 justify-end items-center ml-4'>
               <AiOutlineMenu onClick={()=>{settoggle(!toggle)}} className='cursor-pointer text-2xl dark:text-blue-200  '/>
                 <div className={`${toggle?'flex':'hidden'} flex-col fixed top-[5rem] right-[2px] bg-white w-[94%]  mx-4 pl-15`}>
                <li className='text-xl dark:hover:text-hovcol mx-2 dark:text-blue-200 text-blue-800 ' ><Link href='/' className='active:text-hovcol'>Our Products</Link></li>
                <li className='text-xl dark:hover:text-hovcol mx-2 dark:text-blue-200 text-blue-800'><Link href='/pricing'>Pricing</Link></li>
                <li className='text-xl dark:hover:text-hovcol mx-2 dark:text-blue-200 text-blue-800'><Link href='/faq'>FAQ</Link></li>
                <li className='text-xl dark:hover:text-hovcol mx-2 dark:text-blue-200 text-blue-800'><Link href='/affilate'>Affilate Program</Link></li>
                <li className='text-xl dark:hover:text-hovcol mx-2 dark:text-blue-200 text-blue-800'><Link href='/blog'>Blog</Link></li>
                </div>
              </div>

            </ul>
          </nav>
  );
};

export default Navbar;
