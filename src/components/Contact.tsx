import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <section className="dark:bg-[#191919] dark:text-white text-gray-600 mx-auto body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="pl-16 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">Contact Us
         
        </h1>
        <p className="mb-8 leading-relaxed underline">namexyz123@gmail.com</p>
        <div className="flex justify-center">
          <Link href='/chat' className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Try For Free</Link>
          
        </div>
      </div>
      
    </div>
  </section>
  )
}

export default Contact