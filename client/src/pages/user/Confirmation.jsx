import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Booking Confirmed!</h1>
      <p className="text-lg mb-6">Thank you for booking your slot with us.</p>
      <Link to="/" replace className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Back to Home
      </Link>
    </div>
  );
};

export default ConfirmationPage;