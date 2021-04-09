import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contact us</h1>
      <p>
        Most calendars are designed for teams. Slate is designed for freelancers
      </p>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-control"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-control"
              required
            />
            <div className="chackbox-div">
              <input
                type="checkbox"
                id="1"
                name="scales"
                className="checkbox"
                unchecked
              />
              <label for="1" className="label">
                Checkbox
              </label>
            </div>

            <button type="submit" className="submit-btn btn">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
