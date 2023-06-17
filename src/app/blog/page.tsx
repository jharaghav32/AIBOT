'use client'
import React,{useState} from 'react'
import {data} from '../../../cardData'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
const page = () => {
    const[idx,setidx]=useState(0);
  return (
    <>
    <Navbar/>
    <h1 className=' ml-[10%] mt-[10rem] text-4xl md:text-6xl text-green-800 font-bold'>Blog</h1>
    <div className='ml-[10%]'>
        {/* Card Tabs */}

    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
        <div className='ml-[17px]'>
<ul className="flex flex-wrap  text-sm font-medium text-center text-gray-500 dark:text-gray-400">
    <li className="mr-2">
        <button  className={`inline-block px-4 py-3  ${idx==0?'bg-blue-600 text-white':''} rounded-lg `} aria-current="page" onClick={()=>setidx(0)}>All Posts</button>
    </li>
    <li className="mr-2">
        <button  className={`inline-block px-4 py-3  ${idx==1?'bg-blue-600 text-white':''} rounded-lg `} aria-current="page" onClick={()=>setidx(1)}>Productivity</button>
    </li>
    <li className="mr-2">
        <button  className={`inline-block px-4 py-3  ${idx==2?'bg-blue-600 text-white':''} rounded-lg `} aria-current="page" onClick={()=>setidx(2)}>Bussiness</button>
    </li>
   
</ul>

    </div>
<div className='flex flex-wrap'>
    {
  data[idx]?.map((card)=>(
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={card?.img}/>
        </a>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">{card?.title}</h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{card?.date}</h3>
          <p className="mt-1">{card?.tag}</p>
        </div>
      </div>
  ))
  
}
</div>
    </div>
    </section>


    </div>
    <Footer/>
    </>
  )
}

export default page