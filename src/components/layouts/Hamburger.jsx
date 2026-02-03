import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg hover:bg-gray-100 transition"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Floating Menu */}
      {open && (
        <div className=" absolute right-0 mt-2 w-44 bg-gray-300  rounded-xl shadow-lg border py-3 z-50">
          <ul className="flex flex-col text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Jobs</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Notifications</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Messages</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Feed</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hamburger;

