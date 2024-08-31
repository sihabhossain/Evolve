import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="mt-20 flex h-full w-full items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-solid border-blue-500 "></div>
    </div>
  );
};

export default LoadingSpinner;
