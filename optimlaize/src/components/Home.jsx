import React from "react";
import {
  ServiceCard,
  ContactCard,
} from '../cards'

import {
  Hero,
  Portfolio,
  Consulting,
} from '.'

import {
  portfolio, 
  consulting, 
  home,
} from "../assets/images"


const Home = () => {
  return (
    <main className='relative items-center'>
      <section className='xl:padding-l wide:padding-r padding-b'>
          <Hero 
            title="Optimlaize"
            description="Empowering your Investments"
            backgroundImage={home}
          />
      </section>
      <section className='padding-x pt-10'>
        <ServiceCard
          imgURl = {portfolio}
          label = "Portfolio Visualizer"
          subtext= "Revolutionize the quantitative experience by leveraging modern technology"
         />
        <Portfolio/>
      </section>
      <section className='padding-x pb-10'>
        <ServiceCard
          imgURl = {consulting}
          label = "Consulting Service"
          subtext= "A world of thought-provoking articles \n Case studies that celebrate architecture \n Exclusive access to design insights"
         />
         <Consulting/>
      </section>
      <section className="padding-x py-10" >
        <ContactCard/>
      </section>
    </main>

  );
};

export default Home;