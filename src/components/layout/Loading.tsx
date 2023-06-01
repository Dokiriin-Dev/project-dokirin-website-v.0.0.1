import { useEffect } from "react";

const Loading = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-gray-700 bg-opacity-75 z-50 flex justify-center items-center">
      <div className="p-4 flex items-center">
        <div className="animate-spin w-6 h-6 border-t-2 border-b-2 border-[#FFAE00] rounded-full mr-2"></div>
        <span className="text-3xl text-slate-200">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
