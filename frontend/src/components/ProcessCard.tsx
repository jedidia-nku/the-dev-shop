import React from 'react';

interface ProcessCardProps {
  title: string;
  description: string;
  image: string;
  bgColor: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ title, description, image, bgColor }) => {
  return (
    <div className="w-full bg-white shadow-md rounded-sm border-t-4 pt-20 bg-blue-300" style={{ backgroundColor: bgColor }}>
        <div className="bg-white p-6 border-4 border-b-color1">
      <div className="flex justify-center">
        <div className="w-32 h-32 rounded-full bg-white overflow-hidden flex items-center justify-center border-4 border-gray-200 -mt-20">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
      <h3 className="text-center text-lg text-color1 mt-4">{title}</h3>
      <p className="text-center text-gray-600 mt-2">{description}</p>
    </div>
    </div>
  );
};

export default ProcessCard;
