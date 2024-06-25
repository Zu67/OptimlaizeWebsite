import React from 'react';

const ContactCard = () => {
  return (
    <section className="px-5 py-20 xl:py-[120px]">
      <div className="container ">
        <div className="bg-gradient-to-r from-green-100 to-blue-100 hover:from-pink-100 hover:to-yellow-100 row justify-center shadow-2xl rounded-[20px] px-[30px] pb-[75px] pt-16">
          <div className="lg:col-11">
            <div className="row">
              <div className="lg:col-7">
                <h2 className="h1 text-black">Interested about our products?</h2>
                <p className="mt-8">Contact Us</p>
              </div>
              <div className="mt-8 lg:col-5 lg:mt-0">
                <p className="text-black ">
                  alpha@optimlaize.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
