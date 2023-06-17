import React from 'react'
import PromptAccordian from './PromptAccordian'
import { AiOutlinePlus } from 'react-icons/ai'
import { PromptLibrary } from '../../promptData'
type Props={
    onClose:()=>void;
    setPrompt:(prevVar:string)=>void;
}

const PrompItem = ({setPrompt,onClose}:Props) => {
  return (
    <div className="w-[110%] dark:text-black  ">
        <PromptAccordian title="Prompt for Legal Consumers">
         {PromptLibrary[0].map((question)=>(
            <div className='bg-[#F4F2EB] w-[100%] flex gap-1 justify-between items-center py-1 px-2 rounded-xl' style={{cursor:'pointer'}} onClick={()=>{
            setPrompt(question?.ques);
            onClose();}}>
            <span>{question?.ques}</span>
        <AiOutlinePlus className='p-1 bg-white rounded-xl text-xl '/>
            </div>
         ))}
        </PromptAccordian>
        <PromptAccordian title="Prompt for Legal Research">
        {PromptLibrary[1].map((question)=>(
            <div className='bg-[#F4F2EB] w-[100%] flex gap-1 justify-between items-center py-1 px-2 rounded-xl' style={{cursor:'pointer'}} onClick={()=>{
            setPrompt(question?.ques);
            onClose();}}>
            <span>{question?.ques}</span>
        <AiOutlinePlus className='p-1 bg-white rounded-xl text-xl '/>
            </div>
         ))}
        </PromptAccordian>
        <PromptAccordian title="Prompt for Drafting Legal Documents">
        {PromptLibrary[2].map((question)=>(
            <div className='bg-[#F4F2EB] w-[100%] flex gap-1 justify-between items-center py-1 px-2 rounded-xl' style={{cursor:'pointer'}} onClick={()=>{
            setPrompt(question?.ques);
            onClose();}}>
            <span>{question?.ques}</span>
        <AiOutlinePlus className='p-1 bg-white rounded-xl text-xl '/>
            </div>
         ))}
        </PromptAccordian>
        <PromptAccordian title="Prompt for Family Lawyer">
        {PromptLibrary[3].map((question)=>(
            <div className='bg-[#F4F2EB] w-[100%] flex gap-1 justify-between items-center py-1 px-2 rounded-xl' style={{cursor:'pointer'}} onClick={()=>{
            setPrompt(question?.ques);
            onClose();}}>
            <span>{question?.ques}</span>
        <AiOutlinePlus className='p-1 bg-white rounded-xl text-xl '/>
            </div>
         ))}
        </PromptAccordian>
        <PromptAccordian title="Prompt for Personal Injury Lawyer">
        {PromptLibrary[4].map((question)=>(
            <div className='bg-[#F4F2EB] w-[100%] flex gap-1 justify-between items-center py-1 px-2 rounded-xl' style={{cursor:'pointer'}} onClick={()=>{
            setPrompt(question?.ques);
            onClose();}}>
            <span>{question?.ques}</span>
        <AiOutlinePlus className='p-1 bg-white rounded-xl text-xl '/>
            </div>
         ))}
        </PromptAccordian>
        <PromptAccordian title="Prompt for Immigration Lawyer">
        {PromptLibrary[5].map((question)=>(
            <div className='bg-[#F4F2EB] w-[100%] flex gap-1 justify-between items-center py-1 px-2 rounded-xl' style={{cursor:'pointer'}} onClick={()=>{
            setPrompt(question?.ques);
            onClose();}}>
            <span>{question?.ques}</span>
        <AiOutlinePlus className='p-1 bg-white rounded-xl text-xl '/>
            </div>
         ))}
        </PromptAccordian>
        <PromptAccordian title="Prompt for Tax Lawyer">
            
                <div className='bg-[#F4F2EB] w-[100%] flex gap-1 justify-between items-center py-1 px-2 rounded-xl' onClick={()=>setPrompt("What are my rights as an Employee")}>
                    <span>What are my rights as an Employee</span>
                    <AiOutlinePlus className='p-1 bg-white rounded-xl text-xl '/>
                </div>
                <div className='bg-[#F4F2EB] w-[100%] flex gap-1 justify-between items-center py-1 px-2 rounded-xl' onClick={()=>setPrompt("What are my rights as an Employee")}>
                    <span>What are my rights as an Employee</span>
                    <AiOutlinePlus className='p-1 bg-white rounded-xl text-xl '/>
                </div>
                <div className='bg-[#F4F2EB] w-[100%] flex gap-1 justify-between items-center py-1 px-2 rounded-xl' onClick={()=>setPrompt("What are my rights as an Employee")}>
                    <span>What are my rights as an Employee</span>
                    <AiOutlinePlus className='p-1 bg-white rounded-xl text-xl '/>
                </div>

           
        </PromptAccordian>
        <PromptAccordian title="Prompt for Real-Estate Lawyer">
        {PromptLibrary[0].map((question)=>(
            <div className='bg-[#F4F2EB] w-[100%] flex gap-1 justify-between items-center py-1 px-2 rounded-xl' style={{cursor:'pointer'}} onClick={()=>{
            setPrompt(question?.ques);
            onClose();}}>
            <span>{question?.ques}</span>
        <AiOutlinePlus className='p-1 bg-white rounded-xl text-xl '/>
            </div>
         ))}
        </PromptAccordian>
        <PromptAccordian title="Prompt for Criminal Defense Lawyer">
        {PromptLibrary[1].map((question)=>(
            <div className='bg-[#F4F2EB] w-[100%] flex gap-1 justify-between items-center py-1 px-2 rounded-xl' style={{cursor:'pointer'}} onClick={()=>{
            setPrompt(question?.ques);
            onClose();}}>
            <span className=''>{question?.ques}</span>
        <AiOutlinePlus className='p-1 bg-white rounded-xl text-xl '/>
            </div>
         ))}
        </PromptAccordian>
        <PromptAccordian title="Prompt for Intellectual Propery(IP) Lawyer">
        {PromptLibrary[2].map((question)=>(
            <div className='bg-[#F4F2EB] w-[100%] flex gap-1 justify-between items-center py-1 px-2 rounded-xl' style={{cursor:'pointer'}} onClick={()=>{
            setPrompt(question?.ques);
            onClose();}}>
            <span>{question?.ques}</span>
        <AiOutlinePlus className='p-1 bg-white rounded-xl text-xl '/>
            </div>
         ))}
        </PromptAccordian>
        </div>
  )
}

export default PrompItem