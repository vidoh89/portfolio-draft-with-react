import React from 'react'
// note:destructured  parametere items located in Work.jsx component
const WorkItem = ({project,software,features,details})=>{
    return(
    <div className='h-auto w-full'>
        <ol className='group flex flex-col  md:flex-row relative border-l border-slate-200 '>
            <li className='mb-10 ml-4 '>
                <div className=' absolute w-3 h-3  bg-cyan-400 rounded-full mt-1.5 -left-1.5  group-hover:bg-green-400 ease-in-out duration-2'/>
                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm '>
                <span className='inline-block rounded-xl px-2 py-1 font-bold text-green-400 bg-gray-700 group-hover:text-cyan-400'style={{ transition: 'background-color .70s ease-in-out'}}>{project}</span>
                <span className='text-lg font-semibold group-hover:underline-none group-hover:border-b-2 border-green-400'style={{ transition: 'border-bottom .10s ease-in-out'}}>{software}</span>
                <span className='text-lg font-semibold text-green-400 '>{features}</span>
                
                </p>
                <p className="my-2 text-base font-normal text-cyan-400">{details}</p>
            </li>
        </ol>
        </div>
        
        )   
}

export default WorkItem;