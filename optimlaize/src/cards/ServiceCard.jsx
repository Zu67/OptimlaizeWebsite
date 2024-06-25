import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className='flex flax-wrap justify-center itmes-center space-20 text-black text-center rounded-[40px] shadow-2xl px-10 py-16 m-20 bg-blue-100' >
      {/* <div className='flex justify-center items-center rounded-full'>
        <img src={imgURL} alt={label} width={50} height={50} />
      </div> */}
      <div>
        <h3 className='font-palanquin text-3xl leading-normal font-bold'>
          {label}
        </h3>
        <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
          {subtext}
        </p>
      </div>

    </div>


  );
};

export default ServiceCard;