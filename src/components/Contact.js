import React from "react";

function Contact() {
  return (
    /*
    In the future I would like to add a server side operation that will send the email automatically. check links for reference
    https://hackernoon.com/setting-up-a-serverless-contact-form-in-react-using-nodemailer-and-express-19df9fdb20ed
    https://blog.mailtrap.io/react-contact-form/

    for now form will use mailto action, to send email thru outlook
    */
    <div>
      <h2 className="pageTitle">Email Me</h2>
      <div className="container contact">
        <form
          action="mailto:ugoarubaleze@gmail.com"
          method="post"
          encType="text/plain"
        >
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="contact">Get In Touch</label>
                <select id="contact" className="form-control" name="contact">
                  <option value="general">General Contact</option>
                  <option value="hire">Would like to hire</option>
                  <option value="suggestions">Suggestions</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label htmlFor="yourEmail1">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="JohnDoe@email.com"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              placeholder="Write something.."
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <div className="col-md-12 my-info">
            <p>
              <i className="fas fa-envelope" /> &nbsp;&nbsp; Or email directly @
              ugoarubaleze@gmail.com
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
