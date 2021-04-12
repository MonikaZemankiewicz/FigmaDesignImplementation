import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="Contact">
      <h1 className="contact__title">Contact us</h1>
      <p className="contact__text">
        Most calendars are designed for teams. Slate is designed for freelancers
      </p>
      <div className="contact__form">
        <form>
          <div className="contact__form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="contact__form-control form-control"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="contact__form-control form-control"
              required
            />
            <div>
              <input
                type="checkbox"
                id="1"
                name="scales"
                className="contact__checkbox"
              />
              <label for="1" className="contact__label">
                Checkbox
              </label>
            </div>

            <button type="submit" className="contact__submit-btn btn">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
