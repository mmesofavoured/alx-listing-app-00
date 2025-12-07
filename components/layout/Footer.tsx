import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white text-center p-6 mt-10">
      © {new Date().getFullYear()} StayFinder. All rights reserved.
    </footer>
  );
}
