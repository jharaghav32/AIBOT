import React from 'react'
import AccordianItem from './AccordianItem'
import PrompItem from './PrompItem'
type Props={
    isVisible:Boolean
    onClose:()=>void;
    setPrompt:(prevVar:string)=>void
}
const PromptModal = ({isVisible,onClose,setPrompt}:Props) => {
    if(!isVisible)return null;
  return (
   <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center  overflow-y-auto'>
  <div className='w-[600px] h-[600px] overflow-y-auto overflow-x-hidden bg-white p-2 flex flex-col'>
    <button className='text-md text-green-500 place-self-end 'onClick={()=>onClose()} >Close</button>
    <div className='flex justify-start flex-col cursor-pointer '>
        <p className='font-bold text-2xl text-black'>Prompt library</p>
<p className='text-black'>Choose the prompt that suits you best. Once you click , it'll appear in the text input field. You can then send it as is or add your own words.</p>
    </div>
    <div className='flex flex-col gap-1'>
    <PrompItem setPrompt={setPrompt} onClose={onClose}/> 

    </div>
  </div>
  </div>


  
  )
}

export default PromptModal