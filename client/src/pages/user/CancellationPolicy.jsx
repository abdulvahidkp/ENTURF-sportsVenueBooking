import { useNavigate } from 'react-router-dom';

function CancellationPolicy() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page in the history stack
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-md shadow-md p-8 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Cancellation Policy</h1>
        <p className="mb-8 text-lg text-gray-700">Online Payment</p>
        <p className="mb-8 text-lg text-gray-700">100% refund up to 8 hours before the slot start time.</p>
        <p className="mb-8 text-lg text-gray-700">Enturf reserves the right to change the cancellation policy without any prior notice.</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleGoBack}
        >
          Go back
        </button>
      </div>
    </div>
  );
}

export default CancellationPolicy;
