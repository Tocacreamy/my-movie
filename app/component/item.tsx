import * as React from 'react';
import { FaRegEye } from "react-icons/fa6";

export function Item () {
  return (
    <div className='border m-auto mx-3 my-1 w-auto cursor-pointer hover:relative hover:bg-slate-200 hover:-translate-y-1 transition ease-in-out rounded-md bg-white'>
      <div className=' flex '>
        <div className='bg-black w-10 h-full '>
        </div>
        <div className='ml-2 my-1 '>
            <h1 className='font-bold text-lg'>Judul</h1>
            <p className='text-sm text-slate-400 flex'><FaRegEye className='mr-1  self-center '></FaRegEye>1020</p>
        </div>
      </div>
    </div>
  );
}
