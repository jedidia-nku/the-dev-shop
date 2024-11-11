import React from 'react';
const ProcessSection: React.FC = () => {
  return (
    <section className="py-2 bg-gray-100 pb-4">
      <div className="mx-28 mx-auto text-center">
        <h2 className="text-4xl py-4 text-color1">Our Process</h2>
        <p className="text-gray-500 text-xl">Strategy, planning, development, testing, deployment</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <div className="w-full bg-white shadow-md rounded-b-sm border-t-4 pt-32 bg-blue-300" style={{ backgroundColor: '#FFB74D' }}>
        <div className="bg-white p-6 border-4 border-b-color1">
      <div className="flex justify-center">
        <div className="w-32 h-32 rounded-full bg-white overflow-hidden flex items-center justify-center border-4 border-gray-200 -mt-24">
          <img src="/Process-images/image-1.jpg" alt="Discovery" className="w-full h-full object-cover" />
        </div>
      </div>
      <h3 className="text-center text-lg text-color1 mt-4">Discovery</h3>
      <p className="text-center text-gray-600 mt-2">
        The first step when The Dev Shop engages with a new client - we take the time to build the foundation 
        of a strong partnership. We get to know the system requirements and the user workflow and experience. 
        We will schedule an in-depth assessment of what the expectations are for your project. Our philosophy 
        is to design, create, and deliver client solutions with integrity, trust, and experience.</p>
    </div>
    </div>

        <div className="w-full bg-white shadow-md rounded-sm border-t-4 pt-32 bg-blue-300 mb-auto" style={{ backgroundColor: '#EF5350' }}>
        <div className="bg-white p-6 border-4 border-b-color1">
      <div className="flex justify-center">
        <div className="w-32 h-32 rounded-full bg-white overflow-hidden flex items-center justify-center border-4 border-gray-200 -mt-24">
          <img src="/Process-images/image-2.jpg" alt="Discovery" className="w-full h-full object-cover" />
        </div>
      </div>
      <h3 className="text-center text-lg text-color1 mt-4">Architecture</h3>
      <p className="text-center text-gray-600 mt-2">
      The Dev Shop takes all of the information from the discovery phase and puts together a 
      comprehensive plan for moving forward. We will map out the project’s phases, 
      provide detailed lists of deliverables, flesh out the timeline for completion, create a solid timeline, 
      and outline our approach.
      </p>
    </div>
    </div>
        <div className="w-full bg-white shadow-md rounded-sm border-t-4 pt-32 bg-blue-300 mb-auto" style={{ backgroundColor: '#66BB6A' }}>
        <div className="bg-white p-6 border-4 border-b-color1">
      <div className="flex justify-center">
        <div className="w-32 h-32 rounded-full bg-white overflow-hidden flex items-center justify-center border-4 border-gray-200 -mt-24">
          <img src="/Process-images/image-3.jpg" alt="Discovery" className="w-full h-full object-cover" />
        </div>
      </div>
      <h3 className="text-center text-lg text-color1 mt-4">Development</h3>
      <p className="text-center text-gray-600 mt-2">
      This is where concept becomes code. We use an agile approach to building your solution together. 
      We keep the lines of communication open through regular planning meetings, product reviews, and progress 
      reports.</p>
    </div>
    </div>
        <div className="w-full bg-white shadow-md rounded-sm border-t-4 pt-32 bg-blue-300 mb-auto" style={{ backgroundColor: '#42A5F5' }}>
        <div className="bg-white p-6 border-4 border-b-color1">
      <div className="flex justify-center">
        <div className="w-32 h-32 rounded-full bg-white overflow-hidden flex items-center justify-center border-4 border-gray-200 -mt-24">
          <img src="/Process-images/image-4.jpg" alt="Discovery" className="w-full h-full object-cover" />
        </div>
      </div>
      <h3 className="text-center text-lg text-color1 mt-4">Discovery</h3>
      <p className="text-center text-gray-600 mt-2">
      Once the solution is released we will monitor the performance, adjusting it through patches and updates as needed until it is completely stable and reliable. The Dev Shop will continue to stand by the solution by ensuring ongoing success and future feature development services.</p>
    </div>
    </div>
      </div>
      </div>
    </section>
  );
};

export default ProcessSection;
