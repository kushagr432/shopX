import React from 'react';

export default function ProductDropdown(){
return (
    <div className="absolute hidden bg-white mt-2 py-2 px-4 rounded-md shadow-md border">
      {/* Dropdown content */}
    <ul>
        <li className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Action 1</li>
        <li className="hover:bg-gray-100 px-2 py-1 cursor-pointer">Action 2</li>
        {/* Add more dropdown actions as needed */}
    </ul>
    </div>
)
}

