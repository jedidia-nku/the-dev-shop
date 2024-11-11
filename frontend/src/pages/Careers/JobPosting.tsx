import React from 'react';

interface JobPostingProps {
  title: string;
  location: string;
  type: string;
  qualifications: string[];
  responsibilities: string[];
}

const JobPosting: React.FC<JobPostingProps> = ({ title, location, type, qualifications, responsibilities }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-md mb-6">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-500">{location} - {type}</p>

      <div className="mt-4">
        <h4 className="text-lg font-semibold text-gray-800">Preferred Qualifications:</h4>
        <ul className="list-disc list-inside ml-4 text-gray-700">
          {qualifications.map((qualification, index) => (
            <li key={index}>{qualification}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="text-lg font-semibold text-gray-800">Responsibilities:</h4>
        <ul className="list-disc list-inside ml-4 text-gray-700">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>

      <button className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">Apply Now</button>
    </div>
  );
};

export default JobPosting;
