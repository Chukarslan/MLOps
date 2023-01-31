import React, { useState } from "react";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`bg-${isDarkMode ? "gray-900" : "gray-100"} min-h-screen`}>
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-fuchsia-700 sm:text-4xl sm:leading-10">
            Image Classification App
          </h1>
          <label className="mx-2 relative inline-flex items-center cursor-pointer">
            
            <input type="checkbox" value="" className="sr-only peer" checked={isDarkMode}
              onChange={() => setIsDarkMode(!isDarkMode)}/>
  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  
            <span className="ml-2 text-fuchsia-700">Dark mode</span>
          </label>
        </div>
        <p className="mt-6 text-base leading-6 text-gray-500">
          This app classifies images using transfer learning from YOLOv6 model and allows users to train the model with their own images.
        </p>
        <div className="mt-6">
        <a
  href="/train/Train"
  className={`inline-block px-4 py-2 font-medium leading-5 text-white bg-${
    isDarkMode ? "indigo-600" : "indigo-600"
  } rounded-md hover:shadow-lg transition duration-150 ease-in-out transform hover:translate-y-1`}
>
  Train Model
</a>

          <a
            href="/predict/Predict"
            className={`inline-block mx-3 px-4 py-2 font-medium leading-5 text-white bg-${
              isDarkMode ? "indigo-600" : "indigo-600"
            } rounded-md hover:shadow-lg transition duration-150 ease-in-out transform hover:translate-y-1`}
          >
            Predict Image
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
