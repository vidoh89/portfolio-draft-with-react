import React from "react";
import WorkItem from "./WorkItem";
const data = [
  {
    project: "Content name",
    software: "Software name",
    features: "Project features",
    details: "Project details",
  },
  {
    project: "Content name",
    software: "Software name",
    features: "Project features",
    details: "Project details",
  },
  {
    project: "Content name",
    software: "Software name",
    features: "Project features",
    details: "Project details",
  },
  {
    project: "Content name",
    software: "Software name",
    features: "Project features",
    details: "Project details",
  },
];
const Work = () => {
  return <div id='work' 
              className=' max-w-[1080px] m-auto md:pl-20 p-4 py-16 text-slate-200 h-screen bg-black '
        >
        <h1 className='text-4xl font-bold text-center bg-gray-700 ' >Work</h1>
        {/* Work items section(data array of objects) */}
        {data.map((item,idx)=>(
            <WorkItem
            key={idx}
            project={item.project}
            software={item.software}
            features={item.features}
            details={item.details}
            />
        ))}
        </div>
};

export default Work;
