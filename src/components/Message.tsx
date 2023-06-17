'use client'
import React,{useEffect, useState} from 'react'
import { DocumentData } from 'firebase/firestore'
import Typing from './Typing'
type Props={
    message:DocumentData
}
const Message = ({message}:Props) => {
  const[load,setload]=useState(false);
  useEffect(()=>{
  if(localStorage.getItem('load')){
    setload(true);
    console.log('getting',load)
  }
  else{
    setload(false);
    console.log('not getting',load)
  }
  })
  
    const isServer=message.user.name==="ChatGPT"
  return (
   
    <div className={`py-5 flex ${isServer?' justify-end':' justify-start'} `}>
        <div className='flex space-x-3 px-10 max-w-2xl '>
            {/* <img src={message.user.avatar} alt='' className='h-8 w-8'/> */}
            <p className={`p-2   font-xl text-sm ${isServer?'bg-[#F2F0E4] dark:bg-[#272D2F] dark:text-white rounded-t-xl rounded-l-xl':'bg-[#F1F1F3] dark:bg-[#272D2F] dark:text-white rounded-t-xl rounded-r-xl'}`}>{message.text}</p>
        </div>
    </div>
  )
}

export default Message