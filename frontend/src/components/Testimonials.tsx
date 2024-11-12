// Testimonials.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-color2 text-white py-8 h-[70%]">
      <h2 className="text-center text-4xl">Customer Testimonials</h2>
      
      <motion.div 
        className="flex flex-wrap justify-center gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3, // delay between each child element
            },
          },
        }}
      >
        {/* Testimonial 1 */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/Testimonials/egan.jpg"
            alt="Kaelon Egan"
            className="relative w-20 h-20 rounded-full top-10 left-2"
          />
          <div className="bg-white text-gray-500 px-2 py-10 rounded-sm shadow-lg w-80">
            <p className="italic text-md ml-12 mb-4">
              I've engaged the TDS team in multiple companies now and continue to be impressed by 
              their creative execution. A full suite of senior, entrepreneurial staff help ensure 
              success at all stages of the product lifecycle.
            </p>
            <div className="ml-8">
              <p className="italic text-sm ml-12">-Jimmy Janis, The Laundry Chute CEO</p>
              <p className="italic text-sm ml-12">- AccelaSchool Head of Application</p>
              <p className="italic text-sm ml-12">Development - PowerSchool</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonial 2 */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/Testimonials/janis.jpg"
            alt="Jimmy Janis"
            className="relative w-20 h-20 rounded-full top-10 left-2"
          />
          <div className="bg-white text-gray-500 px-2 py-10 rounded-sm shadow-lg w-80">
            <p className="italic text-md ml-12 mb-4">
              The Dev Shop team has been a critical partner for our business. Not only do they answer 
              the call and go above and beyond each and every day, but more importantly, they build 
              incredible software and work extremely hard to interface with our team to ensure that 
              every deliverable is on time, and above expectation. You can't get any better than the team 
              at The Dev Shop!!
            </p>
            <p className="italic ml-20 text-sm">-Jimmy Janis, The Laundry Chute CEO</p>
          </div>
        </motion.div>

        {/* Testimonial 3 */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/Testimonials/boykin.jpg"
            alt="TJ Boykin"
            className="relative w-20 h-20 rounded-full top-10 left-2"
          />
          <div className="bg-white text-gray-500 px-2 py-10 rounded-sm shadow-lg w-80">
            <p className="italic text-md ml-20 text-sm mb-4">
              With The Dev Shop's help we were able to jump start our framework development. This same 
              framework is now used in 54 of our applications.
            </p>
            <p className="italic ml-20 text-sm">-TJ Boykin, ADP Director of Prototype & Design</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
