import React from 'react';

const FeatureCard = ({ index, title, text }) => {
    return (
      <div className="h-[400px] w-[350px] rounded-xl bg-white mx-10 shadow-lg lg:p-8">
        <div className="gradient-number relative inline-block">
          <p className="bg-gradient absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {index}
          </p>
        </div>
        <h2 className="text-xl font-bold my-6">{title}</h2>
        <p>{text}</p>
      </div>
    );
  };


export default FeatureCard;
