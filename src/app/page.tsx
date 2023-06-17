'use client'
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage";
export default function Home() {
  const[dark,setdark]=useState(false);
  return (
    <div className={`${dark?'dark':''}`}>
      <Navbar/>
      <HomePage/>
    </div>
  )
}
