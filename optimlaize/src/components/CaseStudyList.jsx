import React from 'react';
import { NavLink } from 'react-router-dom'
import { CaseStudyCard } from "../cards";
import { Hero } from "../components"
import caseStudies from '../constants/CaseStudyConstants';
import {caseHero} from '../assets/images';



const CaseStudyList = () => {

  return (
    <main className='relative'>
        <section className='xl:padding-l wide:padding-r padding-b'>
          <Hero 
            title="Case Studies"
            description="Empowering your Investments"
            backgroundImage={caseHero}
          />
        </section>
        <section className='flex justify-center flex-wrap'>
          {caseStudies.map((post, index) => (
            <NavLink to={`/case-study/${post.id}`} key={index}>
              <CaseStudyCard title={post.title} text={post.introduction} />
            </NavLink>
          ))} 
        </section>
    </main>
  );
};

export default CaseStudyList;