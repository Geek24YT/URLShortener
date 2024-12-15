import React, { useEffect, useState } from "react";
import axios from "axios";

const UrlList = () => {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState("");

  // Fetch all URLs from backend
  const fetchUrls = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/shortUrl");
      setUrls(response.data);
    } catch (err) {
      setError("Failed to load URLs. Please try again.");
      console.error(err);
    }
  };

  // Delete a URL
  const deleteUrl = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/shortUrl/${id}`);
      fetchUrls(); // Reload URLs after deletion
    } catch (err) {
      console.error("Error deleting URL:", err);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Shortened URLs</h2>
      {error && <p className="text-red-400">{error}</p>}
      {urls.length > 0 ? (
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-2">Full URL</th>
              <th className="p-2">Short URL</th>
              <th className="p-2">Clicks</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((url) => (
              <tr key={url._id} className="border-b bg-gray-800">
                <td className="p-2">{url.fullUrl}</td>
                <td className="p-2">
                  <a
                    href={`http://localhost:5001/api/shortUrl/${url.shortUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    {url.shortUrl}
                  </a>
                </td>
                <td className="p-2">{url.clicks}</td>
                <td className="p-2 space-x-2">
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(
                        `http://localhost:5001/api/shortUrl/${url.shortUrl}`
                      )
                    }
                    className="text-green-400 hover:text-green-500"
                  >
                    Copy
                  </button>
                  <button
                    onClick={() => deleteUrl(url._id)}
                    className="text-red-400 hover:text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-400">No URLs found.</p>
      )}
    </div>
  );
};

export default UrlList;
