import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex flex-col gap-6 items-center justify-center">
      <h1 className="font-black text-2xl md:text-4xl">404 Not Found</h1>
      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default Error;
