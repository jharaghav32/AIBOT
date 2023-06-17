'use client'
import React,{useState} from 'react'
import {toast} from 'react-hot-toast'
import {useSession} from 'next-auth/react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { addDoc, collection, orderBy, query } from 'firebase/firestore'
import {db} from '../firebase/initialise.js'
import {data} from '../../promptData'
import Message from './Message'
import ChatInput from './ChatInput'
import Typing from './Typing'
type Props={
    chatId:string
}
const Chat = ({chatId}:Props) => {
  const[istyping,setistyping]=useState(false);
  const {data:session}=useSession()
  const model="text-davinci-003"
  const [messages]=useCollection(session && query(collection(db,'users',session?.user?.email!,'chats',chatId,'messages'),
  orderBy("createdAt",'asc')
  ))
  //for input message
  const sendMessage=async(input:string)=>{
     const message:Message={
        text:input,
        // createdAt:serverTimestamp(),
        createdAt:new Date(),
        user:{
            _id:session?.user?.email!,
            name:session?.user?.name!,
            avatar:session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
        }
      }
      await addDoc(collection(db,'users',session?.user?.email!,'chats',chatId,'messages'),message);
  
      //Toast  notification to say loading
      setistyping(true);
      // const notification = toast.loading('ChatGPT is thinking...')
      console.log(localStorage.getItem('load'))
      await fetch('/api/askQuestion',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            prompt:input,
            chatId,
            model,
            session
        })
      }).then(()=>{
        //toast notification to  say successfull
        setistyping(false);
        console.log('in the function I am here big one')
      //  toast.success('ChatGPT is responded',{
      //   id:notification,
      //  })
      }).catch(err=>console.log({err:err.message}))
  }
  // for prompt 
  const promptMessage=async(title:string)=>{
  const input = title.trim();
  const message:Message={
    text:input,
    createdAt:new Date(),
    user:{
      _id:session?.user?.email!,
      name:session?.user?.name!,
      avatar:session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
  }
  }
  await addDoc(collection(db,'users',session?.user?.email!,'chats',chatId,'messages'),message);
  setistyping(true);
  // const notification = toast.loading('ChatGPT is thinking...')

  await fetch('/api/askQuestion',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        prompt:input,
        chatId,
        model,
        session
    })
  }).then(()=>{
    //toast notification to  say successfull
    setistyping(false);
    console.log('in the function I am here big one')
  //  toast.success('ChatGPT is responded',{
  //   id:notification,
  //  })
  }).catch(err=>console.log({err:err.message}))
  }
  console.log(messages)
  return (
    <>
    <div className='flex-1 overflow-y-auto overflow-x-hidden'>
      <div className='flex flex-col items-start gap-2'>
       {messages?.docs?.length==0 &&  <div className='w-[40%] border  rounded-lg  ml-2 p-2 bg-[#F1F1F3] dark:text-white dark:bg-[#272D2F]' ><span className='flex text-2xl font-bold'>Hi🖖</span>Please choose a question below, or feel free to type your own inquiry</div>}
        {messages?.docs.length==0?data?.map((prompt)=>(
        <button className='border text-start  w-[50%] m-2 rounded-lg p-2 bg-[#F4F2EB] dark:bg-[#272D2F] 'onClick={()=>promptMessage(prompt?.title)} >
          <p>{prompt?.title}</p>
        </button>
        )):''}
        </div>
      {messages?.docs.map((message)=>(
        
        <Message key={message.id} message={message.data()}/>
      
      ))}
      {istyping &&
       <div className={`py-5 flex  justify-end `}>
       <div className='flex space-x-3 px-10  '>
           
           <p className={`p-2   font-xl text-sm bg-[#F2F0E4] dark:bg-[#272D2F] dark`}>
            <Typing/>
           </p>
       </div>
   </div>
      }
    </div>
    {/* //additoional line and fragment tags*/}
    <ChatInput chatId={chatId} sendMessage={sendMessage}/>
    </>
  )
}

export default Chat