import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 80px;
`;

const Section = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

const Field = styled.div`
  margin-bottom: 1rem;
  display: grid;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
`;

const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #0A84FF 0%, #0056d3 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
`;

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:contact@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <Container>
      <Section>
        <h2 style={{ marginBottom: '1rem' }}>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <Field>
            <label htmlFor="name">Name</label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
          </Field>
          <Field>
            <label htmlFor="email">Email</label>
            <Input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
          </Field>
          <Field>
            <label htmlFor="message">Message</label>
            <Textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required />
          </Field>
          <Button type="submit">Send</Button>
        </form>
      </Section>
    </Container>
  );
}

export default Contact;