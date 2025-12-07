import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          StayFinder
        </h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search destinations..."
          className="w-1/2 px-4 py-2 border rounded-full shadow-sm"
        />

        {/* Auth buttons */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-gray-100 rounded-lg">Sign in</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Sign up
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto py-3 flex gap-6 text-sm overflow-x-auto px-4">
        {["Rooms", "Mansion", "Countryside", "Cabins", "Resort", "Luxury"].map(
          (cat) => (
            <span
              key={cat}
              className="px-4 py-1 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200"
            >
              {cat}
            </span>
          )
        )}
      </div>
    </header>
  );
}
