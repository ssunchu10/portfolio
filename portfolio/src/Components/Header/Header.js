// import React from "react";
// import "./Header.css";

// const Header = () => {
//   return (
//     <header className="2xl:fixed xl:absolute fixed w-full z-40 top-0 start-0 border-b border-white/20 bg-black">
//       <div className="flex flex-wrap items-center justify-between mx-auto 2xl:px-12 px-4 2xl:py-6 lg:py-3 py-1.5">
//         {/* Logo Section */}
//         <a href="#" className="flex items-start rtl:space-x-reverse flex-col">
//           <span className="text-2xl font-semibold uppercase">
//             <span className="text-primary">Shalmali</span> Patil
//           </span>
//           <span className="text-sm tracking-[5.75px] uppercase text-xs">
//             Innovator
//           </span>
//         </a>
//         {/* Contact Info and Button */}
//         <div className="flex flex-1 justify-between 2xl:mx-24 mx-16 items-center max-lg:hidden">
//           <span className="text-gray 2xl:text-base text-sm">
//             <a href="tel:+1234567890" className="hover:text-primary">
//               +1 (123) 456-7890
//             </a>{" "}
//             /{" "}
//             <a href="mailto:shalupatil15@gmail.com" className="hover:text-primary">
//               shalupatil15@example.com
//             </a>
//           </span>
//           <button
//             type="button"
//             className="border border-primary text-primary py-3 hover:bg-primary hover:text-black text-base font-semibold px-16 rounded-lg transition-all"
//           >
//             Let's Connect
//           </button>
//         </div>
//         {/* Drawer Toggle */}
//         <div className="flex z-50">
//           <button
//             id="drawer-toggle"
//             aria-controls="drawer-navigation"
//             type="button"
//             className="inline-flex items-center justify-center focus:ring-0"
//           >
//             <svg width="50" height="50" viewBox="0 0 100 100">
//               <path className="line line1" d="M 20,29 H 80" />
//               <path className="line line2" d="M 20,50 H 80" />
//               <path className="line line3" d="M 20,71 H 80" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </header>

//   );
// };

// export default Header;

import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full z-50 top-0 start-0 border-b border-white/20 bg-black/90 backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-between mx-auto lg:ml-64 px-4 h-16">
        {/* Logo Section */}
        <a href="#" className="flex items-start rtl:space-x-reverse flex-col">
          <span className="text-xl font-semibold uppercase text-white">
            <span className="text-[#CDFF00]">Shalmali</span> Patil
          </span>
          <span className="text-xs tracking-[4px] uppercase text-gray-400">
            Innovator
          </span>
        </a>

        {/* Contact Info and Button - Only show on larger screens */}
        <div className="hidden lg:flex items-center space-x-8">
          <span className="text-gray-400 text-sm">
            <a href="tel:+1234567890" className="hover:text-[#CDFF00] transition-colors">
              +1 (123) 456-7890
            </a>
            <span className="mx-2">/</span>
            <a href="mailto:shalupatil15@gmail.com" className="hover:text-[#CDFF00] transition-colors">
              shalupatil15@example.com
            </a>
          </span>
          <button
            type="button"
            className="border border-[#CDFF00] text-[#CDFF00] py-2 px-6 hover:bg-[#CDFF00] hover:text-black text-sm font-semibold rounded-lg transition-all duration-300"
          >
            Let's Connect
          </button>
        </div>

        {/* Mobile Menu Button - Only show on smaller screens */}
        <button
          type="button"
          className="lg:hidden p-2 text-gray-400 hover:text-[#CDFF00] transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
