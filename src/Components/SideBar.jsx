// import React, { useState } from 'react';

// const Sidebar = () => {
// const [isSidebarOpen, setIsSidebarOpen] = useState(true);

// const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
// };

// return (
//     <div className="flex">
//     {isSidebarOpen && (
//         <div className="bg-gray-800 text-white w-64 py-4">
//           {/* Sidebar content */}
//         <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Products</li>
//             {/* ... */}
//         </ul>
//         </div>
//     )}

//     <div className={`flex-grow ${isSidebarOpen ? 'ml-64' : ''}`}>
//         {/* Main content */}
//         <button onClick={toggleSidebar} className="fixed top-4 left-4 bg-gray-800 text-white p-2 ">
//         {isSidebarOpen ? 'Collapse' : 'Expand '}
//         </button>
//     </div>
//     </div>
// );
// };

// export default Sidebar;

