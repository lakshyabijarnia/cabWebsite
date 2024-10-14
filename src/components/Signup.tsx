import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';

const Signup: React.FC = () => {
  // ... (rest of the component remains the same)

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md p-8"
        >
          {/* ... (rest of the JSX remains the same) */}
          <div className="flex flex-col space-y-4">
            <button
              onClick={handleGoogleSignup}
              className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-400 transition-colors duration-300 flex items-center justify-center"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Sign up with Google
            </button>
            {/* ... (rest of the buttons remain the same) */}
          </div>
          {/* ... (rest of the JSX remains the same) */}
        </motion.div>
      </div>
    </section>
  );
};

export default Signup;