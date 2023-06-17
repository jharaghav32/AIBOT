'use client'
import LoginNavbar from '@/components/LoginNavbar'
import Sidebar from '@/components/Sidebar'
import React, { useEffect } from 'react'
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs'
import { AiOutlineDown, AiOutlineThunderbolt, AiOutlineUp } from 'react-icons/ai'
import { BiError } from 'react-icons/bi'
import { BsSun, BsSunFill, BsMoon } from 'react-icons/bs'
import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Ldsidebar from '@/components/Ldsidebar'
import Chat from '@/components/Chat'
import ChatInput from '@/components/ChatInput'
import ChatFooter from '@/components/ChatFooter'
import { db } from '../../firebase/initialise.js'
import { collection, where, getDoc, doc, deleteDoc, addDoc, setDoc, getDocs } from 'firebase/firestore'
const page = () => {
  const { data: session } = useSession();
  const [useropen, setuseropen] = useState(false)
  const [sideopen, setsideopen] = useState(false)
  const [bookmark, setbookmark] = useState(false);
  const [dark, setdark] = useState(false);


  const chatId = 'TFOgay59Wd6OJOvDmcUe';
  const bookMark = async () => {
    const bookmarkDoc = doc(db, 'users', session?.user?.email!, 'bookmark', chatId);
    const bookmarkDocSn = await getDoc(bookmarkDoc);
    if (bookmarkDocSn.exists()) {
      setbookmark(false)
    }
    else {
      setbookmark(true)
    }
  }
  useEffect(() => {
    bookMark()
  })

  const handleBookmark = async () => {
    try {
      const userEmail = session?.user?.email!;

      // Check if the bookmark exists
      const bookmarkDocRef = doc(db, 'users', userEmail, 'bookmark', chatId);
      const bookmarkDocSnap = await getDoc(bookmarkDocRef);

      if (bookmarkDocSnap.exists()) {
        // Bookmark exists, so remove it
        await deleteDoc(bookmarkDocRef);
        console.log(`Chat ID ${chatId} removed from bookmark successfully`);
      } else {
        // Bookmark doesn't exist, so add it
        await setDoc(bookmarkDocRef, {
          createdAt: new Date()
        });
        console.log(`Chat ID ${chatId} added to bookmark successfully`);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className={`${dark ? 'dark' : ''} dark:bg-[#191919] overflow-y-hidden`}>
      <nav className="fixed top-0 z-50 w-full bg-white pb-[1rem] dark:text-white dark:bg-[#191919] dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              {/* <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => setsideopen(!sideopen)}>
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button> */}
              <Link href="/" className="flex ml-2 md:mr-24">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">AIBOT</span>
              </Link>
            </div>
            <div className=" hidden sm:flex items-center">
              <div className=' pr-3  mr-2 font-bold '>FAQ</div>
              <span className="h-[25px] w-[1.5px] bg-black mx-2 dark:bg-white"></span>
              <div className=' mx-2 font-bold'>ENG</div>
              <span className="h-[25px] w-[1.5px] bg-black mx-2 dark:bg-white"></span>
              <div className='mx-2'>
                {dark ? <BsMoon onClick={() => setdark(false)} /> : <BsSun className='text-xl' onClick={() => setdark(true)} />}
              </div>
              <div className='flex flex-col'>

                <span className="block text-sm text-gray-900 dark:text-white">{session?.user?.name}</span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{session?.user?.email}</span>
              </div>
              <div className="flex items-center ml-3">
                <div>
                  <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user" onClick={() => setuseropen(!useropen)}>
                    <span className="sr-only">Open user menu</span>

                    <img className="w-9 h-9 rounded-full" src={session?.user?.image!} alt="user photo" />

                  </button>
                </div>

                <div className={`z-50 absolute top-[27px] right-[25px] flex-col ${useropen ? 'flex' : 'hidden'} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`} id="dropdown-user">

                  <ul className="py-1" role="none">

                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Contact Support 💟</a>
                    </li>
                    <li>
                      <a href="#" type='button' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem" onClick={() => { signOut() }} >Log out🏌</a>
                    </li>
                  </ul>
                </div>
              </div>
              <AiOutlineDown className={`ml-3 ${useropen ? 'hidden' : 'block'}`} onClick={() => setuseropen(true)} />
              <AiOutlineUp className={`ml-3 ${useropen ? 'block' : 'hidden'}`} onClick={() => setuseropen(false)} />
            </div>


            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => setsideopen(!sideopen)}>
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button>

          </div>
        </div>
      </nav>
      <aside id="logo-sidebar" className={`fixed top-0 right-0 z-40 w-64 h-screen pt-20 transition-transform dark:bg-[#1E2223] dark:text-white bg-white border-r border-gray-200 overflow-y-auto ${sideopen ? 'translate-x-0' : 'translate-x-full'} dark:bg-gray-800 dark:border-gray-700`} aria-label="Sidebar">

        <div className='flex flex-col gap-2'>
          <Sidebar dark={dark} setdark={setdark} />
          <Ldsidebar />
        </div>
      </aside>
      <div className='flex justify-between mt-20 dark:bg-[#191919] dark:text-white'>
        <div className='w-[25vw] hidden  sm:block dark:bg-[#191919]'>
          <Sidebar dark={dark} setdark={setdark}/>
        </div>
        <div className='flex-1 dark:bg-[#191919] dark:text-white'>
          <div className='flex flex-col border dark:bg-[#191919] border-black dark:border-[#434343] rounded-lg  mx-2 h-[80vh] overflow-hidden'>
            <div className='text-black py-2 flex  justify-between text-center text-2xl border-b-2 border-gray-300 font-bold'>
              <span className='mx-auto dark:text-white'>
                AI BOT ✍️
              </span>
              <BsFillBookmarkFill className='ml-2' style={{ color: bookmark ? 'green' : 'red', strokeWidth: '1px', stroke: 'black' }} onClick={handleBookmark} />
            </div>
            <Chat chatId="r51eqQ3ue180vnsaoeUq" />
            {/* <ChatInput chatId="r51eqQ3ue180vnsaoeUq" /> */}
          </div>
        </div>
        <div className='hidden sm:block w-[25%] h-[80vh] overflow-y-auto dark:bg-[#191919] dark:text-white'>
          <Ldsidebar />
        </div>
      </div>
      <ChatFooter />
    </div>
  )
}

export default page