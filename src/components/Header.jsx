import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const handlecheck = () => {
    
  }
  return (
    <div className="flex flex-row w-screen h-12 bg-slate-700 m-auto text-gray-400 ">
      <div className="flex m-auto " >
        <img
          src="https://avatars.githubusercontent.com/u/161104712?s=200&v=4"
          alt=""
          className="w-10 h-10 mr-5"
        />
        <button
          type="button"
          className="inline-flex gap-x-1 border-b-2 border-transparent text-base focus:text-orange-400 "

        >
          <i class="fa-solid fa-house-chimney mr-1 mt-3 "></i>
          <p className="mr-5 mt-2 ">Home</p>
        </button>
        <button
          type="button"
          className="inline-flex gap-x-1 border-b-2 border-transparent text-base focus:text-orange-400 "
        >
          <i class="fa-solid fa-arrow-pointer mr-1 mt-3 "></i>
          <p className="mr-5 mt-2 ">Quick Start</p>
        </button>
        <NavLink  to='/'
          className={({ isActive, isPending }) =>
            isPending ? "pending inline-flex gap-x-1 border-b-2 border-transparent text-base" : 
          isActive ? "active text-orange-400 inline-flex gap-x-1 border-b-2 border-transparent text-base" : 
          "inline-flex gap-x-1 border-b-2 border-transparent text-base"
          }
        >
          <i class="fa-solid fa-cash-register mr-1 mt-3 "></i>
          <p className="mr-5 mt-2 ">Miners</p>
        </NavLink>
        <NavLink 
          to='/block'
          className={({ isActive, isPending }) =>
            isPending ? "pending inline-flex gap-x-1 border-b-2 border-transparent text-base" : 
            isActive ? "active text-orange-400 inline-flex gap-x-1 border-b-2 border-transparent text-base" : 
            "inline-flex gap-x-1 border-b-2 border-transparent text-base"
          }
        >
          <i class="fa-solid fa-box mr-1 mt-3 "></i>
          <p className="mr-5 mt-2 ">Block</p>
        </NavLink>
        <button
          type="button"
          className="inline-flex gap-x-1 border-b-2 border-transparent text-base focus:text-orange-400 "

        >
          <i class="fa-brands fa-discord mr-1 mt-3 "></i>
          <p className="mr-5 mt-2 ">Discord</p>
        </button>
        <button
          type="button"
          className="inline-flex gap-x-1 border-b-2 border-transparent text-base focus:text-orange-400 "

        >
          <i class="fa-solid fa-bell mr-1 mt-3 "></i>
          <p className="mr-5 mt-2 ">Change Log</p>
        </button>
        <button
          type="button"
          className="inline-flex gap-x-1 border-b-2 border-transparent text-base focus:text-orange-400 "

        >
          <i class="fa-regular fa-id-badge mr-1 mt-3"></i>
          <p className="mr-5 mt-2 ">About</p>
        </button>
      </div>
    </div>
  );
}
