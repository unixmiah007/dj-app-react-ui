import React, { useState } from 'react';

const Home = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Failed to send signup info. Please try again.');
      }
    } catch (err) {
      alert('Error sending signup info. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col lg:flex-row items-center lg:items-start gap-6">
      
      {/* Left column: text + form */}
      <div className="flex-1 space-y-6 text-center lg:text-left">
        <h1 className="text-4xl font-bold">BrownBoiBlue Music</h1>
        <p className="text-lg">
          EDM music producer.<br />
          Techno, house, and bass music. <em>Think global, dance local.</em>
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p>Sign up with your email address to be notified of upcoming music releases.</p>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        ) : (
          <div className="p-4 bg-green-100 text-green-800 rounded">
            Thank you! We’ve received your information and will get back to you shortly.
          </div>
        )}

        <div className="mt-6 space-x-4">
          <a
            href="https://soundcloud.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            SoundCloud
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://open.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Spotify
          </a>
        </div>
      </div>

      {/* Right column: image */}
      <div className="flex-1">
        <img
          src="https://images.squarespace-cdn.com/content/v1/6884013f3c69fc78e5779b36/9f6c471c-0ea5-4b5f-b698-deac3bccb5b0/Black+Purple+Neon+Party+Club+Poster.png?format=2500w"
          alt="Neon party club poster"
          className="w-full max-w-md mx-auto rounded shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
