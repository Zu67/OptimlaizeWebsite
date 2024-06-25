import React from "react";

const CaseStudyCard = ({ title, text }) => {
    return (
      <div className='flex flex-wrap w-[500px] rounded-[20px] shadow hover:shadow-lg hover:bg-blue-50 m-20 px-10 py-16'>
        <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
          {title}
        </h3>
        <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
          {text}
        </p>
      </div>
    );
  };
  
  export default CaseStudyCard;