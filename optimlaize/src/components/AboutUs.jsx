import React from 'react';
import { ContactCard } from '../cards';
import {
  Hero,
} from '.'
import {
  aboutus
} from "../assets/images"

const AboutUs = () => {
  return (
    <main className='relative'>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero
          title="Welcome to Optimlaize"
          description="Where we revolutionize the quantitative experience by harnessing the power of modern technology. Founded with a vision to transform the landscape of data analysis and optimization, we are committed to delivering innovative solutions that drive efficiency, accuracy, and actionable insights."
          backgroundImage={aboutus}
        />
        <section className="m-20 items-center">
          <p className="me-20 text-lg p-20 text-left rounded-[20px] shadow my-20 justify-left hover:bg-blue-50">
            Our team of seasoned professionals brings together expertise in data science, data engineering, and quantitative analysis to create cutting-edge tools and services tailored to your unique needs. At Optimlaize, we understand the challenges businesses face in today’s data-driven world, and we strive to empower our clients with the technology and knowledge they need to thrive.
          </p>
          <p className="ms-20 text-lg p-20 text-right rounded-[20px] shadow my-20 justify-right hover:bg-blue-50">
            We believe in a client-centric approach, where collaboration and understanding your specific goals are at the heart of our operations. By leveraging advanced algorithms, machine learning, and state-of-the-art software, we help organizations streamline their data processes, uncover hidden patterns, and make informed decisions with confidence.
          </p>
          <p className="me-20 text-lg p-20 text-left rounded-[20px] shadow my-20 justify-left hover:bg-blue-50">
            Join us on our journey to revolutionize the quantitative experience. Let Optimlaize be your trusted partner in navigating the complexities of modern data technology and unlocking the full potential of your data.
          </p>
        </section>
        <ContactCard />
      </section>
    </main>
  );
};

export default AboutUs;
