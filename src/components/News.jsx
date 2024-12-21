import React, { useState } from 'react';
import { Leaf} from 'lucide-react';

const NewsletterSignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter signup logic here, such as sending the data to an API
    console.log('First Name:', firstName);
    console.log('Email:', email);
  };

  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-purple-600 uppercase">
          Join the Newsletter
        </h2>
        <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Find out about new books, tour dates, and giveaways first.
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          We don't share your info and we'll only contact you with big news. Promise.
        </p>
        <form onSubmit={handleSubmit} className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
          <div className="min-w-0 flex-1">
            <label htmlFor="firstName" className="sr-only">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="block w-full rounded-md border-gray-300 px-5 py-3 text-base focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
          <div className="min-w-0 flex-1 mt-4 sm:mt-0 sm:ml-3">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md border-gray-300 px-5 py-3 text-base focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-3">
            <button
              type="submit"
              className="block w-full rounded-md bg-purple-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:px-10"
            >
              SUBSCRIBE
            </button>
          </div>
        </form>
        <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 hidden sm:block">
          <Leaf className="text-purple-600 opacity-60" />
        </div>
        <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 hidden sm:block">
          {/* <Petal className="text-purple-600 opacity-60" /> */}
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignupPage;