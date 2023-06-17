'use client'
import { db } from '../firebase/initialise.js'
import {toast} from 'react-hot-toast'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import React, { FormEvent, useState } from 'react'
import {HiOutlinePaperAirplane} from 'react-icons/hi'
import admin from 'firebase-admin'
import {AiOutlineArrowRight,AiOutlinePlus,AiOutlinePlusCircle} from 'react-icons/ai'
import { BsArrowBarRight, BsArrowRight } from 'react-icons/bs'
import PromptModal from './PromptModal'

type Props={
    chatId:string
    sendMessage: (input: string) => void;
}
const ChatInput = ({chatId,sendMessage}:Props) => {
    const {data:session}=useSession()
    const [prompt,setprompt]=useState("");
    const[promptmod,setpromptmod]=useState(false);
    const model="text-davinci-003"
    // const model ="gpt-3.5-turbo"
    const handlesendMessage= async(e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
     
      if(!prompt)return;
      const input = prompt.trim();
      setprompt("")
      sendMessage(input);
      // const message:Message={
      //   text:input,
      //   // createdAt:serverTimestamp(),
      //   createdAt:new Date(),
      //   user:{
      //       _id:session?.user?.email!,
      //       name:session?.user?.name!,
      //       avatar:session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      //   }
      // }
      // await addDoc(collection(db,'users',session?.user?.email!,'chats',chatId,'messages'),message);
  
      // //Toast  notification to say loading
      // const notification = toast.loading('ChatGPT is thinking...')
      // console.log(localStorage.getItem('load'))
      // await fetch('/api/askQuestion',{
      //   method:'POST',
      //   headers:{
      //       'Content-Type':'application/json'
      //   },
      //   body:JSON.stringify({
      //       prompt:input,
      //       chatId,
      //       model,
      //       session
      //   })
      // }).then(()=>{
      //   //toast notification to  say successfull
      //   console.log('in the function I am here big one')
      //  toast.success('ChatGPT is responded',{
      //   id:notification,
      //  })
      // }).catch(err=>console.log({err:err.message}))
    }
  return (
    <>
    <div className='bg-white text-[#757779] dark:bg-[#1E2223]  rounded-lg dark:border-gray-700 text-sm pt-[2.7rem] px-2 pb-2'>
        <form onSubmit={handlesendMessage} className='px-2 py-2 space-x-2 mx-2 flex bg-gray-300 dark:bg-[#272D2F]  border rounded-xl'>
            <input
            className='bg-transparent dark:text-white z-21 focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300'
            value={prompt}
            disabled={!session}
            onChange={(e)=>{setprompt(e.target.value)}}
            type='text'
            placeholder='Ask your doubt....'
            />
        <div className='bg-[#56A69C] border rounded-r-lg rounded-l-lg  pl-2 pr-2 pb-1 flex justify-center items-end gap-1 relative top-[-48px] ' style={{cursor:'pointer'}} onClick={()=>setpromptmod(true)}>
          <span className='truncate text-white'>
            Prompt Library
            </span>
             <AiOutlinePlus className='bg-white border text-xl rounded-xl font-bold'/>
            
             </div>
            
            <button type="submit" disabled={!prompt || !session} className='bg-green-400 text-white font-bold px-2 py-2 rounded-[2rem] disabled:bg-[#F2F0E4] disabled:cursor-not-allowed' >
           <BsArrowRight className='text-2xl text-black'/>
            </button>
        </form>
        

    </div>
    <PromptModal isVisible={promptmod} onClose={()=>setpromptmod(false)} setPrompt={setprompt} />
    </>
  )
}

export default ChatInput