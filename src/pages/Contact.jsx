import React from 'react';

function Contact() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Contact Us</h2>
      <form>
        <div>
          <label>Name:<br /><input type="text" name="name" required /></label>
        </div>
        <div>
          <label>Email:<br /><input type="email" name="email" required /></label>
        </div>
        <div>
          <label>Message:<br /><textarea name="message" rows="4" required /></label>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;