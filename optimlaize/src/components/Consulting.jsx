import React from 'react';
import {SlideShowCard} from '../cards';

import caseStudies from '../constants/CaseStudyConstants';

const Consulting = () => {
    return (
      <section className="flex">
        <SlideShowCard slides={caseStudies} />
        <div className="w-1/2 p-20 mx-20 rounded-[20px] border-4 border-black">
          <h2 className="text-2xl mb-4">Contact us for a Quote</h2>
          <p>Have us build your algorithmic trading ideas, trading systems, or software.</p>
        </div>
      </section>
    );
  };
  
  export default Consulting;