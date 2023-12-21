import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Task Management for Developers</h1>

        <div className="bg-white p-4 md:p-8 rounded-md shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Welcome to TaskHub</h2>
          <p className="text-gray-700">
            TaskHub is a dedicated platform for developers to streamline task management and boost
            productivity. Whether you're working on solo projects or collaborating with a team, TaskHub
            is here to simplify your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="bg-white p-4 md:p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="list-disc pl-4 text-gray-700">
              <li>Effortlessly add and manage tasks</li>
              <li>Track task progress with status updates</li>
              <li>Intuitive and user-friendly interface</li>
              <li>Collaborate with team members in real-time</li>
              <li>Customize and prioritize tasks</li>
            </ul>
          </div>

          <div className="bg-white p-4 md:p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">How to Use</h2>
            <ol className="list-decimal pl-4 text-gray-700">
              <li>Add a new task using the input field.</li>
              <li>Click "Start" when you begin working on a task.</li>
              <li>Mark tasks as "Done" when completed.</li>
              <li>Enjoy a well-organized task management experience!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
