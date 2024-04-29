import React, { useState } from 'react';
import './feedback.css';
import Layout from '../Layout/Layout';
// import Bg from "../images/BG";
function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API to submit feedback
  };

  return (
    <Layout><box>
    <form className='form-container' onSubmit={handleSubmit} >
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Rating (1-5):</label>
      <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
      <br />
      <label>Comments:</label>
      <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
      <br />
      <button type="submit">Submit</button>
    </form>
    </box>
    </Layout>
  );
}

export default FeedbackForm;