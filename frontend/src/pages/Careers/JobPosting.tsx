import React from 'react';
import { SiRocket } from "react-icons/si";

interface JobPostingProps {
  title: string;
  location: string;
  type: string;
  qualifications: string[];
  responsibilities: string[];
}

const JobPosting: React.FC<JobPostingProps> = ({ title, location, type, qualifications, responsibilities }) => {
  return (
    <div className="bg-white px-6">
      <h3 className="text-3xl font-thin text-gray-600 py-6">{title}</h3>
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

      <button className="mt-8 px-6 py-1 flex gap-3 py-2 items-center bg-cyan-500 text-white rounded-sm font-md hover:bg-cyan-400">
         <SiRocket className='' style={{ transform: "rotate(47deg)" }}/> APPLY NOW
        </button>
    </div>
  );
};

export default JobPosting;
