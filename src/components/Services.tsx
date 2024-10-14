import React from 'react';
import { Car, Users, Briefcase, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  { icon: Car, title: 'City Rides', description: 'Quick and comfortable rides within the city' },
  { icon: Users, title: 'Group Travel', description: 'Spacious vehicles for group outings' },
  { icon: Briefcase, title: 'Business Travel', description: 'Professional service for corporate clients' },
  { icon: Clock, title: '24/7 Availability', description: 'Round-the-clock service at your convenience' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 text-center"
            >
              <service.icon className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;