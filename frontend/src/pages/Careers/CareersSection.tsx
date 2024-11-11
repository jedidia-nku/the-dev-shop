import React from 'react';
import JobPosting from './JobPosting';
import ContactForm from './ContactForm';
import TopNav from '../../components/TopNav';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const CareersSection: React.FC = () => {
  return (
    <>
    <TopNav />
    <Navbar />
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 md:flex md:space-x-8">
        <div className="md:w-2/3 space-y-8">
          <h1 className="text-3xl font-bold text-center text-gray-800">Careers</h1>
          <p className="text-center text-gray-600">The Dev Shop offers medical benefits, retirement plans, and more.</p>
          
          {/* Sample Job Postings */}
          <JobPosting
            title="Senior Software Engineer"
            location="Pittsburgh, PA"
            type="Full-time"
            qualifications={[
              "Bachelor’s degree in Computer Science or related field",
              "5+ years of software engineering experience",
              "Proficiency in TypeScript, React, Node.js, SQL",
            ]}
            responsibilities={[
              "Design, develop, and maintain software applications",
              "Collaborate with cross-functional teams",
              "Mentor junior developers",
            ]}
          />
          <JobPosting
            title="Software Engineer"
            location="Remote"
            type="Full-time"
            qualifications={[
              "Bachelor’s degree in Computer Science or related field",
              "3+ years of software engineering experience",
              "Proficiency in JavaScript, React, Node.js",
            ]}
            responsibilities={[
              "Develop and maintain web applications",
              "Work with design and product teams",
              "Participate in code reviews",
            ]}
          />
        </div>

        <div className="md:w-1/3">
          <ContactForm />
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default CareersSection;
