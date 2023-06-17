import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import {HiChatBubbleLeft} from 'react-icons/hi2'
import {BsFillTrashFill} from 'react-icons/bs'
import {usePathname,useRouter} from 'next/navigation'
import { useSession } from 'next-auth/react'
import {query,collection, orderBy, deleteDoc ,doc} from 'firebase/firestore'
import { db } from '@/firebase/initialise.js'
import { useCollection } from 'react-firebase-hooks/firestore'
type Props={
    id:string,
  }
const ChatRow = ({id}:Props) => {
    const pathName = usePathname();
    const router = useRouter();
    const {data:session}=useSession();
    const [active,setactive]=useState(false);
    const[messages]=useCollection(collection(db,'users',session?.user?.email!,'chats',id,'messages')
    )
    console.log(pathName)
    useEffect(()=>{
        if(!pathName)return;
        setactive(pathName.includes(id));
    },[pathName])
    const removeChat = async()=>{
     await deleteDoc(doc(db,'users',session?.user?.email!,'chats',id))
     router.replace('/chat')
    }
    
  return (
   <Link href={`/chat/${id}`} className={`text-black dark:text-white border  my-2 chatRow justify-center ${active?'border-black dark:border-white':'border-gray-200 dark:dark:border-[#434343]'}`}>
   <HiChatBubbleLeft className='text-black dark:text-white'/>
   <p className='flex-1  md:inline-flex truncate'>
    {messages?.docs[messages?.docs.length-1]?.data().text || "New Chat"}
   </p>
   <BsFillTrashFill onClick={removeChat} className='text-black dark:text-white hover:text-red-700'/>
   </Link>
  )
}

export default ChatRow