import React from "react";

export const FooterForm = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Contact</h2>
      <div className="projects-underline" />

      <form
        className="contact-form"
        onSubmit={(event) => {
          event.preventDefault();
          alert("Your message has been sent.");
        }}
      >
        <label>
          Name
          <input type="text" name="name" required />
        </label>

        <label>
          Email
          <input type="email" name="email" required />
        </label>

        <label>
          Message
          <textarea name="message" rows="4" required />
        </label>

        <div className="contact-send-row">
          <button type="submit" className="btn-primary contact-send-btn">
            Send
          </button>
        </div>
      </form>

      <div className="contact-icons">
        <span className="icon-square">IG</span>
        <span className="icon-square">in</span>
        <span className="icon-square">@</span>
      </div>

      <p className="contact-footer-name">Sonia Kakkar</p>

      <div className="contact-wave" />
    </section>
  );
};
