'use client'
import { useState } from "react";
import Login from "./login/page";
import {BsSun} from 'react-icons/bs'
import {AiOutlineThunderbolt} from 'react-icons/ai'
import {BiError} from 'react-icons/bi'
import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage";
export default function Home() {
  const[dark,setdark]=useState(false);
  return (
    <div className={`${dark?'dark':''}`}>
      <Navbar dark={dark} setdark={setdark}/>
      <HomePage/>
    </div>
  )
}
