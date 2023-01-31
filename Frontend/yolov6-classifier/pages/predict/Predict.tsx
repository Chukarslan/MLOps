import React, { useState } from 'react';
import axios from 'axios';

const Predict = () => {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleImageUpload = async (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    const response = await axios.post('/api/predict', formData);
    setPrediction(response.data.prediction);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-5 bg-gray-900">
      <h1 className="text-2xl font-medium text-white">Predict</h1>
      <div className="flex flex-col items-center mt-10">
        <input 
          type="file" 
          className="w-64 p-2 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-600"
          onChange={handleImageUpload} 
        />
        {image && <img src={image} alt="Uploaded Image" className="w-64 mt-5"/>}
        {prediction && 
          <p className="text-xl mt-5 font-medium text-white">
            Prediction: {prediction}
          </p>
        }
      </div>
    </div>
  );
};

export default Predict;
