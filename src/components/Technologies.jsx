import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { AiOutlinePython } from 'react-icons/ai'
import { TbBrandJavascript } from "react-icons/tb";
import { SiMysql } from "react-icons/si";

const Technologies = () => {

  return (
    <div className='borber-b border-neutral-800 pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
           <AiOutlinePython className='text-7xl text-yellow-700'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
           <RiReactjsLine className='text-7xl text-cyan-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
           <TbBrandJavascript className='text-7xl text-yellow-400'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
           <SiMysql className='text-7xl text-blue-800'/>
        </div>
      </div>
    </div>
  )
}

export default Technologies
