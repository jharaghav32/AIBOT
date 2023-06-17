import React from 'react'
import { AiOutlineArrowDown, AiOutlineDown } from 'react-icons/ai'

const Ldsidebar = () => {
  return (
    <div className='flex flex-col gap-8 justify-center items-center dark:bg-[#191919] dark:text-white dark:border-[#434343]'>
        {/* Other features */}
        <div className='flex flex-col gap-3 border border-black dark:border-[#434343] rounded-lg px-4 py-2 text-white   w-[90%] '>
            <h1 className='text-black font-bold text-2xl dark:text-white'>Other Features 🦾</h1>
            <div className='flex flex-col gap-1'>
                <div className='flex justify-center items-center p-2 rounded-r-lg bg-[#56A69C]'>
                    <p className='flex-1'>Agreement Summary</p>
                    <AiOutlineDown/>
                </div>
                <div className='flex justify-center items-center p-2 rounded-r-lg bg-[#56A69C]'>
                    <p className='flex-1'>Compare Agreements</p>
                    <AiOutlineDown/>
                </div>
                <div className='flex justify-center items-center p-2 rounded-r-lg bg-[#56A69C]'>
                    <p className='flex-1'>Create an agreement</p>
                    <AiOutlineDown/>
                </div>
            </div>
          <p className='bg-gray-200 text-gray-600 p-2 rounded-r-lg dark:bg-black'>More in Development</p>
        </div>
        {/* earn with  */}
        <div className='flex flex-col gap-4 border  border-black dark:border-[#434343] rounded-lg px-4 py-4 text-white   w-[90%]'>
            <h1 className='text-black font-bold text-2xl dark:text-white'>Earn with AI layer 💸</h1>
           <div className='flex justify-center items-center p-2 rounded-r-lg  bg-[#56A69C]'>
            <p className='flex-1 '>upto $30/mo per referral</p>
            <AiOutlineDown/>
           </div>
        </div>
        {/* connect ai */}
        <div className='flex flex-col gap-4  border border-black dark:border-[#434343] rounded-lg px-4 py-4 text-white   w-[90%]'>
            <p className='text-black font-bold text-2xl dark:text-white'>Connect AI Layer to your website  🤖 </p>
            <div className='flex justify-center items-center p-2 rounded-r-lg bg-[#56A69C]'>
                <p className='flex-1 '>I want more clients</p>
                <AiOutlineDown/>
            </div>
        </div>
    </div>
  )
}

export default Ldsidebar