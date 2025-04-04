"use client";
import React, { useState } from "react";

const MinioTestPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    setStatus("Uploading...");

    try {
      const response = await fetch("/api/minio", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Upload successful:", result);
        setStatus("Upload successful!");
      } else {
        console.error("Upload failed:", response.statusText);
        setStatus("Upload failed.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      setStatus("Upload error.");
    }
  };
  // fetching
  const fetchPresignedUrl = async (fileName: any) => {
    try {
      const response = await fetch(`/api/minio?fileName=${fileName}`);
      const data = await response.json();

      if (response.ok) {
        const presignedUrl = data.url;
        return presignedUrl;
      } else {
        console.error("Failed to fetch presigned URL:", data);
      }
    } catch (error) {
      console.error("Error fetching presigned URL:", error);
    }
  };

  // Gọi hàm với tên file
  fetchPresignedUrl("ceo.jpeg");
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Minio File Upload Test</h2>

      <div className="mt-6">
        <input
          id="file-input"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      <form onSubmit={handleSubmit} className="mt-4">
        <div>
          <label
            htmlFor="fileInput"
            className="text-white font-semibold cursor-pointer bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Choose Image
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleFileChange}
            className="border rounded px-2 py-1"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Upload
          </button>
        </div>
        <div className="w-1/2">
          <img
            src="https://console-minio.manportfolio.id.vn/house3d/ceo.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=W9IroZ56GWAl5zAWcHv3%2F20250404%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250404T022000Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=4aa4cf98095aedaddbedf85c031c5bd7b49fb5173ec5688ffe1c0fa53dcdd397"
            alt=""
          />
        </div>
      </form>
      <div className="mt-4">
        {status && <p className="text-gray-700">Status: {status}</p>}
      </div>
    </div>
  );
};

export default MinioTestPage;
