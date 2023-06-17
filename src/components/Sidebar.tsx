'use client'
import React, { useState } from 'react'
import NewChat from './NewChat'
import { useSession ,signOut} from 'next-auth/react'
import {FiLogOut} from 'react-icons/fi'
import {LuUserCog} from 'react-icons/lu'
import {useCollection} from 'react-firebase-hooks/firestore'
import {query,orderBy, collection } from 'firebase/firestore'
import { db } from '@/firebase/initialise'
import ChatRow from './ChatRow'
type Props={
  dark:boolean,
  setdark:React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({dark,setdark}:Props) => {
  const[useropen,setuseropen]=useState(false);
  const {data:session}=useSession();
  const [chats,loading,error]=useCollection(
    session && query(collection(db,'users',session?.user?.email!,'chats'),orderBy('createdAt','asc'))
  )
  const [bookmarkchats,load,err]=useCollection(
    session &&  query(collection(db,'users',session?.user?.email!,'bookmark'),orderBy('createdAt','asc'))
  )
  
  return (
    <div id="sidebar" className={`flex flex-col transition-transform  md:translate-x-0  h-[80vh] border border-black dark:border-[#434343] rounded-lg mx-2  bg-white overflow-y-auto dark:bg-[#1E2223] dark:text-white`} style={{padding:'5px'}}>
      <div className=''>
      <div>
          <div className='flex flex-row justify-around items-center '>
        <h1 className='text-black md:text-2xl text-center my-2 dark:text-white'>
          Hello, {session?.user?.name}
          </h1>
                  <button type="button" className="flex sm:hidden text-sm  rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user" onClick={() => setuseropen(!useropen)}>
                    <span className="sr-only">Open user menu</span>

                   <LuUserCog className='text-xl'/>

                  </button>

                </div>
                <div className={`z-50 shadow-md absolute top-[7rem] right-[3px] w-[90%] flex-col ${useropen ? 'flex' : 'hidden'} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`} id="dropdown-user">

                  <ul className="py-1" role="none">
                   <li>
                    <a type="button" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" onClick={()=>setdark(!dark)}>{!dark?'Dark mode 🌓':'Light mode 🌞'}</a>
                   </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Contact Support 💟</a>
                    </li>
                    <li>
                      <a href="#" type='button' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem" onClick={() => { signOut() }} >Log out🏌</a>
                    </li>
                  </ul>
                </div>
        <NewChat/>
        <div>
        <h1 className='my-2 text-2xl '>Bookmark:</h1>
          {bookmarkchats?.docs.map((ele)=>(
           <ChatRow key={ele.id} id={ele.id}/>
          ))}
          
          <h1 className='my-2 text-2xl '>History:</h1>
          {chats?.docs.map((ele)=>(
           <ChatRow key={ele.id} id={ele.id}/>
          ))}
        </div>
      </div>
      </div>
       <div >
        {/* <button className='text-white p-2 m-2 border border-white rounded-lg' onClick={()=>signOut()}>LogOut
        <FiLogOut/>
        </button> */}
        </div>
    </div>
  )
}

export default Sidebar