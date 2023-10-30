import React from 'react'
// note:destructured  parametere items located in Work.jsx component
const WorkItem = ({project,software,features,details})=>{
    return(
    <div className='h-auto w-full'>
        <ol className='group flex flex-col  md:flex-row relative border-l border-slate-200 '>
            <li className='mb-10 ml-4 '>
                <div className=' absolute w-3 h-3  bg-cyan-400 rounded-full mt-1.5 -left-1.5  group-hover:bg-green-400 ease-in-out duration-2'/>
                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm '>
                <span className='inline-block px-2 py-1 font-bold text-black bg-slate-200 group-hover:bg-cyan-400 ease-in-out duration-2'>{project}</span>
                <span>{software}</span>
                <span>{features}</span>
                
                </p>
                <p>{details}</p>
            </li>
        </ol>
        </div>
        
        )   
}

export default WorkItem;