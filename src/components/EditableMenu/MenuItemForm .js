import React, { useState } from 'react';

const MenuItemForm = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!imageFile) {
      alert('Please select an image first');
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', 'restro-menu'); // upload preset
    const cloudName = 'ddti7juma'; // cloud name

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      setImageUrl(data.secure_url);
      console.log(data);
    } catch (err) {
      console.error('Upload failed:', err);
      alert('Upload failed!');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow space-y-4">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {uploading ? 'Uploading...' : 'Upload Image'}
      </button>

      {imageUrl && (
        <div className="space-y-2">
          <p className="text-green-700 break-all">Image URL: {imageUrl}</p>
          <img src={imageUrl} alt="Uploaded" className="w-full max-h-64 object-contain rounded" />
        </div>
      )}
    </div>
  );
};

export default MenuItemForm;
