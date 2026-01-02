import React from 'react';

const Contact = () => {
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">Contact Us</h1>
          <p className="col-lg-10 fs-4">Have a question or need a consultation? Fill out the form and we'll get back to you as soon as possible.</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-light">
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <textarea className="form-control" id="floatingTextarea" placeholder="Leave a comment here" style={{height: "100px"}}></textarea>
              <label htmlFor="floatingTextarea">Message</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
