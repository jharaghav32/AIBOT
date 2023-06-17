'use client'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import {db} from '../firebase/initialise.js'

const NewChat = () => {
  const router = useRouter();
  const {data:session}=useSession();
  const createChat = async()=>{
    console.log(session?.user?.email!)
    const doc = await addDoc(collection(db,'users',session?.user?.email!,'chats'),{
     
      userId:session?.user?.email!,
      createdAt:serverTimestamp()
    })
    router.push(`/chat/${doc.id}`)
  }
  return (
    <div onClick={createChat}  style={{ paddingLeft: '1rem', paddingRight: '1rem', cursor: 'pointer' }} className='flex flex-row gap-2 py-3  text-white bg-[#2A514C] border-gray-700/70 border rounded-lg justify-center items-center hover:bg-gray-600 cursor-pointer' >
      <AiOutlinePlus className='h-3 w-3 ' />
      <p className=''>NewChat</p>
    </div>
  )
}

export default NewChat