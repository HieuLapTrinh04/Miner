import React, { useState } from "react";
import Header from "./Header";
import { useNavigate, NavLink } from "react-router-dom";

export default function Miners({visible}) {
const navigate = useNavigate();

  return (
    <div>
      <Header></Header>
      <div className="w-4/5 h-auto m-auto">
        <h1 className="text-white font-bold text-xl mt-5 mb-3">Top Miners</h1>
        <hr className="border-gray-500" />
      </div>
      <div className="flex flex-row w-4/5 h-auto ml-32 mt-2" >
        {/* <button
          type="button"
          class="w-96 h-10 m-auto text-center font-medium justify-center py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-base whitespace-nowrap 
          text-white hover:text-orange-400 focus:outline-none focus:text-orange-400 disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => navigate("/propminer")}

        >
          PROP
        </button> */}
        <NavLink 
          to='/'
          className={({ isActive, isPending }) =>
            isPending ? "pending w-96 h-10 m-auto text-center font-medium text-white justify-center inline-flex gap-x-1 border-b-2 border-transparent text-base" : 
          isActive ? "active w-96 h-10 m-auto text-center font-medium justify-center text-orange-400 inline-flex gap-x-1 border-b-2 border-transparent text-base" : 
          "inline-flex w-96 h-10 m-auto text-center font-medium justify-center text-white gap-x-1 border-b-2 border-transparent text-base"
          }
        >
          {/* <i class="fa-regular fa-circle-check mt-1"></i> */}
          <i className={({ isActive, isPending }) => isPending ? "fa-regular fa-circle-check mt-1" : isActive ? "active fa-regular fa-circle-check mt-1" : "fa-regular fa-circle-check mt-1" }> </i>
          PROP
        </NavLink>
        <NavLink 
          to='/solominer'
          className={({ isActive, isPending }) =>
            isPending ? "pending w-96 h-10 m-auto text-center text-white font-medium justify-center inline-flex gap-x-1 border-b-2 border-transparent text-base" : 
          isActive ? "active w-96 h-10 m-auto text-center font-medium justify-center text-orange-400 inline-flex gap-x-1 border-b-2 border-transparent text-base" : 
          "inline-flex w-96 h-10 m-auto text-center font-medium justify-center text-white gap-x-1 border-b-2 border-transparent text-base"
          }
        >
          <i className={({ isActive, isPending }) => isPending ? "fa-regular fa-circle-check mt-1" : isActive ? "active fa-regular fa-circle-check mt-1" : "fa-regular fa-circle-check mt-1" }> </i>
          SOLO
        </NavLink>
        {/* <button
          type="button"
          class="w-96 h-10 text-center justify-center font-medium m-auto hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-base whitespace-nowrap text-white hover:text-orange-400 focus:outline-none focus:text-orange-400 disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => navigate("/solominer")}
        >
          SOLO
        </button> */}
        
      </div>
    </div>
  );
}
