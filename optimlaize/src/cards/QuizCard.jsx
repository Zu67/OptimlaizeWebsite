import React from 'react';

const QuizCard = () => {
  return (
    <section className="px-5 pt-20 xl:pt-[120px]">
      <div className="container">
        <div className="border-4 bg-gradient row justify-center border-black rounded-b-[80px] rounded-t-[20px] px-[30px] pb-[75px] pt-16">
          <div className="lg:col-11">
            <div className="row lg:col-7">
                <h2 className="h1 text-black">Not sure about your risk level?</h2>
                <a className="btn btn-black mt-8" href="#">Take a simple quiz now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizCard;
