import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Booking: React.FC = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking logic here
    console.log('Booking submitted:', { pickup, dropoff, date, time });
    alert('Booking submitted successfully!');
  };

  return (
    <section id="booking" className="py-16 bg-gray-200 dark:bg-gray-700">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Book Your Ride</h2>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
        >
          <div className="mb-4">
            <label htmlFor="pickup" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Pickup Location</label>
            <input
              type="text"
              id="pickup"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dropoff" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Dropoff Location</label>
            <input
              type="text"
              id="dropoff"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="date" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="time" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Time</label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-400 transition-colors duration-300"
          >
            Book Now
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Booking;