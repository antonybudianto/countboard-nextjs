"use client";

import copy from "copy-to-clipboard";
import Link from "next/link";
import { useState } from "react";

const Config = () => {
  const [data, setData] = useState("");
  return (
    <div className="mx-3 my-2 md:px-0">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold">Config</h1>
        <Link className="hover:underline" href="/">
          {"<"} Home
        </Link>
      </div>
      <div className="mt-5 dark:text-cyan-50">
        <div className="mb-1">Copy your plain JSON data</div>
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={() => {
            copy(localStorage.getItem("items") || "[]");
          }}
        >
          Copy JSON Data
        </button>

        <div className="mt-3 mb-1">Load data from JSON</div>
        <input
          type="text"
          value={data}
          className="px-4 py-2 mr-1 rounded dark:bg-gray-700 w-3/5"
          onChange={(e) => setData(e.target.value)}
        />
        <button
          type="button"
          className="text-white bg-gray-800 w-1/5 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={() => {
            JSON.parse(data); // try parse if any error
            localStorage.setItem("items", data);
            alert("Success!");
          }}
        >
          Load
        </button>
      </div>
    </div>
  );
};

export default Config;
