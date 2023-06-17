'use client'
import { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import {BiRightArrow,BiDownArrow} from 'react-icons/bi'
interface AccordionItemProps {
  title: string;
  children:React.ReactNode
}

const PromptAccordian: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`${isOpen?'':''} w-[90%]  rounded-r-xl my-2 overflow-hidden `}>
      <button
        onClick={toggleAccordion}
        className="flex bg-[#56A69C] items-center justify-between gap-2 w-full p-2 font-medium text-left text-white  focus:ring-4 focus:ring-gray-200   "
      >
        <span className='ml-2'>{title}</span>
        <span className="transform transition-transform duration-200">
          {isOpen ?<AiOutlineUp className='text-white '/> :<AiOutlineDown className='text-white'/>}
        </span>
            </button>
      {isOpen && (
          <div className='flex flex-col m-2 gap-1'>
            {children}
            </div>
      
      )}
    </div>
  );
};

export default PromptAccordian;
