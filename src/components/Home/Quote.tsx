/* eslint-disable react/no-unescaped-entities */
import React from 'react';

// https://stackoverflow.com/questions/71397201/access-child-components-ref-inside-parent-component-in-functional-component
export const Quote: React.FC = () => {
  return (
    <section
      className='md:mx-16 mx-5 h-screen flex items-center z-20'
      id='intro-section'
    >
      <div>
        <h1>
          I focus on using effectively optimize the space to improving people's
          everyday lives in all aspects.
        </h1>
        <h1>
          Use the power of interior design to evokes happiness and soothes the
          soul that help people live better.
        </h1>
      </div>
    </section>
  );
};

export default Quote;
