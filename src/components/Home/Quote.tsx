/* eslint-disable react/no-unescaped-entities */
import React from 'react';

// https://stackoverflow.com/questions/71397201/access-child-components-ref-inside-parent-component-in-functional-component
export const Quote: React.FC = () => {
  return (
    <section
      className='md:mx-16 mx-5 min-h-screen flex items-center z-20'
      id='intro-section'
    >
      <div>
        <h1>
          My aim is to create spaces that bring life experience to everyone. I
          effectively combine artistic and business-oriented solutions to
          provide clients with an exceptional experience. Whether working
          individually or as part of a team, my focus remains on creative space
          planning, captivating color schemes
        </h1>
      </div>
    </section>
  );
};

export default Quote;
