import React from "react";

const WelcomePage = () => {
  return (
    <div className="h-64 flex items-center justify-center p-6 bg-white">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4 text-green-800">Welcome to the Dashboard</h1>
        <p className="text-gray-500">You have successfully logged in!</p>
      </div>
    </div>
  );
};

export default WelcomePage;
