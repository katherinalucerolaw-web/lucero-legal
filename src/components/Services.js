import React from 'react';

const Services = () => {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">Our Services</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <h3 className="fs-2">Business Law</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        </div>
        <div className="feature col">
          <h3 className="fs-2">Family Law</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        </div>
        <div className="feature col">
          <h3 className="fs-2">Real Estate Law</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
