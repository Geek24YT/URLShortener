import React, { useState } from "react";
import axios from "axios";

const UrlForm = () => {
  const [fullUrl, setFullUrl] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:5001/api/shortUrl", {
        fullUrl,
      });
      setSuccess(`Short URL Created: ${response.data.shortUrl}`);
      setFullUrl("");
    } catch (err) {
      setError("Error creating short URL. Try again.");
      console.error(err);
    }
  };

  return (
    <div className="mb-8">
      <form
        onSubmit={handleSubmit}
        className="flex gap-4 justify-center items-center"
      >
        <input
          type="url"
          placeholder="Enter your full URL"
          value={fullUrl}
          onChange={(e) => setFullUrl(e.target.value)}
          required
          className="p-2 w-2/3 rounded bg-gray-700 text-white focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded text-white"
        >
          Shorten URL
        </button>
      </form>
      {success && <p className="text-green-400 mt-2 text-center">{success}</p>}
      {error && <p className="text-red-400 mt-2 text-center">{error}</p>}
    </div>
  );
};

export default UrlForm;
