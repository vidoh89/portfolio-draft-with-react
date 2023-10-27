import React from 'react'

const WorkItem = ({project,software,features,details})=>{
    return(
    <div className='bg-slate-200 h-auto w-full'>
        <ol className='flex flex-col md:flex-row relative border-l '>
            <li className='mb-10 ml-4 text-black'>
                <div className='absolute w-3 h-3 bg-green-400 rounded-full mt-1.5 -left-1.5 '/>
                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm '>
                <span className='inline-block px-2 py-1 font-semibold '>{project}</span>
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