// Testimonials.tsx
import React from 'react';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  testimonial: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Kaelon Egan",
    position: "Founder / CEO",
    company: "AccelaSchool Head of Application Development - PowerSchool",
    testimonial:
      "I've engaged the TDS team in multiple companies now and continue to be impressed by their creative execution. A full suite of senior, entrepreneurial staff help ensure success at all stages of the product lifecycle.",
    image: "/Testimonials/janis.jpg",
  },
  {
    name: "Jimmy Janis",
    position: "CEO",
    company: "The Laundry Chute",
    testimonial:
      "The Dev Shop team has been a critical partner for our business. Not only do they answer the call and go above and beyond each and every day, but more importantly, they build incredible software and work extremely hard to interface with our team to ensure that every deliverable is on time, and above expectation.",
    image: "/Testimonials/egan.jpg",
  },
  {
    name: "TJ Boykin",
    position: "Director of Prototype & Design",
    company: "ADP",
    testimonial:
      "With The Dev Shop's help we were able to jump start our framework development. This same framework is now used in 54 of our applications.",
    image: "/Testimonials/boykin.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-blue-900 text-white py-16 h-[70%]">
      <h2 className="text-center text-3xl font-semibold mb-12">Customer Testimonials</h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white text-blue-900 p-6 rounded-lg shadow-lg w-80"
          >
            <div className="flex justify-center mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full border-2 border-blue-900"
              />
            </div>
            <p className="italic mb-4">{item.testimonial}</p>
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm">{item.position}</p>
            <p className="text-sm">{item.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
