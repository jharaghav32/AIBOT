'use client'
import { useState } from 'react';
import {BiRightArrow,BiDownArrow} from 'react-icons/bi'
interface AccordionItemProps {
  title: string;
  children:React.ReactNode
}

const Accordion: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`${isOpen?'bg-gray-100':''} w-[85%] border border-gray-400 rounded-2xl my-2 overflow-hidden `}>
      <button
        onClick={toggleAccordion}
        className="flex items-center justify-start gap-2 w-full p-5 font-medium text-left text-gray-500   focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <span className="transform transition-transform duration-200">
          {isOpen ?<BiDownArrow className='text-black '/> :<BiRightArrow className='text-black'/>}
        </span>
        <span>{title}</span>
            </button>
      {isOpen && (
        <div className='flex flex-col justify-start p-5 items-start'>
          
          <p className='mb-2 text-gray-500 dark:text-gray-400'>{children}</p>
        
      </div>
      )}
    </div>
  );
};

export default Accordion;
