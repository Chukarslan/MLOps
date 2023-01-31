import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const Train = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [label, setLabel] = useState(null)
  const router = useRouter()

  const onFileChange = event => {
    setSelectedFile(event.target.files[0])
  }

  const onLabelChange = event => {
    setLabel(event.target.value)
  }

  const onUpload = async () => {
    const formData = new FormData()
    formData.append('file', selectedFile)
    formData.append('label', label)

    try {
      const res = await axios.post('/api/train', formData)
      console.log(res.data)
      alert('Training complete!')
      router.push('/predict')
    } catch (err) {
      console.error(err)
      alert('Error during training')
    }
  }

  return (

    <div className="flex flex-col items-center min-h-screen p-5 bg-gray-900">
      <h1 className="text-2xl font-medium">Train</h1>
      <div className="mt-4">
        <input type="file" onChange={onFileChange} className="p-2 border border-gray-400 rounded-lg" />
      </div>
      <div className="mt-4 flex flex-row">
        <label className="inline-flex items-center">
          <input
            type="radio"
            value="damage"
            onChange={onLabelChange}
            checked={label === 'damage'}
            className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
          />
          <span className="ml-2">Damage</span>
        </label>
        <label className="ml-6 inline-flex items-center">
          <input
            type="radio"
            value="non-damage"
            onChange={onLabelChange}
            checked={label === 'non-damage'}
            className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
          />
          <span className="ml-2">Non-Damage</span>
        </label>
      </div>
      <div className="mt-4">
        <button
          onClick={onUpload}
          className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-150 ease-in-out"
        >
          Upload and Train
        </button>
      </div>
    </div>
  )
}

export default Train
