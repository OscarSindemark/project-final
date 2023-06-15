import React, { useState } from 'react';

const UploadImg = ({ selectedImage, setSelectedImage, title, disabled }) => {
  const [error, setError] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    // Check if a file is selected
    if (!file) {
      setError('Please select an image file.');
      return;
    }

    // Check file format
    const fileType = file.type;
    if (fileType !== 'image/jpeg' && fileType !== 'image/png') {
      setError('Only JPG and PNG file formats are allowed.');
      return;
    }

    // Check file size
    const fileSize = file.size / 1024; // Size in KB
    if (fileSize > 2048) { // 2MB limit
      setError('File size exceeds the limit of 2MB.');
      return;
    }

    // If all validations pass, set the selected image
    setSelectedImage(file);
    setError('');
  };

  console.log(selectedImage, setSelectedImage)

  return (
    <>
        <div className={`${disabled && 'pointer-events-none opacity-70'} border-[1px] border-primary max-w-[400px] rounded-xl min-w-[350px] px-6 py-3 backdrop-blur-[5px] text-center flex flex-col gap-2 cursor-pointer`}>
            <input
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={handleImageUpload}
                className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer bg-primary'
            />
            <h4 className='text-lg font-bold'>{title}</h4>
            <i class="bi bi-cloud-arrow-up text-primary text-[60px] leading-none"/>
            <p>Click to upload or drag JPG or PNG image</p>
        </div>
        {error && <div className="mt-1 text-sm text-center text-primary error">{error}</div>}
    </>
  );
};

export default UploadImg;
