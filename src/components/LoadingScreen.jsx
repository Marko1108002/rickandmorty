import React from "react";
import { ClimbingBoxLoader } from "react-spinners";

export default function LoadingScreen() {
  return (
    <div className="dark bg-gray-900 text-white min-h-screen flex justify-center items-center">
      <ClimbingBoxLoader
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
        color="white"
      />
    </div>
  );
}
