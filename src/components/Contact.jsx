import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    if (name.trim().length < 3) {
      alert('Name should be at least 3 characters');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (message.trim().length < 15) {
      alert('Message should be at least 15 characters');
      return;
    }

    alert('🟢 Message sent successfully!');

    // Clear form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900 transition-all duration-500">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Contact Me
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          Feel free to reach out for collaborations or just a friendly chat.
        </p>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Links (You can add your real links later) */}
        <div className="flex justify-center space-x-6 mt-8">
          Thanks for viewing my Portfolio. Glad you like it ❤️.
        </div>
      </div>
    </section>
  );
};

export default Contact;
