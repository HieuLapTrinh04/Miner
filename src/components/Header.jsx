import React, { useState } from "react";
import Miners from "./Miners";

export default function Header({setShowMines, setShowBlock}) {
  return (
    <div className="flex flex-row w-screen h-12 bg-slate-700 m-auto text-gray-400 ">
      <div className="flex m-auto "aria-label="Tabs" role="tablist">
        <img
          src="https://avatars.githubusercontent.com/u/161104712?s=200&v=4"
          alt=""
          className="w-10 h-10 mr-5"
        />
        <button
          type="button"
          class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 inline-flex gap-x-1 border-b-2 border-transparent text-base whitespace-nowrap text-gray-400 hover:text-gray-300 focus:outline-none focus:text-orange-400 focus:hover:text-orange-300 disabled:opacity-50 disabled:pointer-events-none active"
          id="tabs-with-underline-item-1"
          data-hs-tab="#tabs-with-underline-1"
          aria-controls="tabs-with-underline-1"
          role="tab"
        >
          <i class="fa-solid fa-house-chimney mr-1 mt-3 "></i>
          <p className="mr-5 mt-2 ">Home</p>
        </button>
        <button
          type="button"
          class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 inline-flex gap-x-1 border-b-2 border-transparent text-base whitespace-nowrap text-gray-400 hover:text-gray-300 focus:outline-none focus:text-orange-400 focus:hover:text-orange-300 disabled:pointer-events-none"
          id="tabs-with-underline-item-2"
          data-hs-tab="#tabs-with-underline-2"
          aria-controls="tabs-with-underline-2"
          role="tab"
        >
          <i class="fa-solid fa-arrow-pointer mr-1 mt-3 "></i>
          <p className="mr-5 mt-2 ">Quick Start</p>
        </button>
        <button
          type="button"
          class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 inline-flex gap-x-1 border-b-2 border-transparent text-base whitespace-nowrap text-gray-400 hover:text-gray-300 focus:outline-none focus:text-orange-400 focus:hover:text-orange-300 disabled:pointer-events-none"
          id="tabs-with-underline-item-3"
          data-hs-tab="#tabs-with-underline-3"
          aria-controls="tabs-with-underline-3"
          role="tab"
          onClick={() => setShowMines(true)}
        >
          <i class="fa-solid fa-cash-register mr-1 mt-3 "></i>
          <p className="mr-5 mt-2 ">Miners</p>
        </button>
        <button
          type="button"
          class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 inline-flex gap-x-1 border-b-2 border-transparent text-base whitespace-nowrap text-gray-400 hover:text-gray-300 focus:outline-none focus:text-orange-400 focus:hover:text-orange-300 disabled:pointer-events-none"
          id="tabs-with-underline-item-4"
          data-hs-tab="#tabs-with-underline-4"
          aria-controls="tabs-with-underline-4"
          role="tab"
          onClick={() => setShowBlock(true)}
        >
          <i class="fa-solid fa-box mr-1 mt-3 "></i>
          <p className="mr-5 mt-2 ">Block</p>
        </button>
        <button
          type="button"
          class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 inline-flex gap-x-1 border-b-2 border-transparent text-base whitespace-nowrap text-gray-400 hover:text-gray-300 focus:outline-none focus:text-orange-400 focus:hover:text-orange-300 disabled:pointer-events-none"
          id="tabs-with-underline-item-5"
          data-hs-tab="#tabs-with-underline-5"
          aria-controls="tabs-with-underline-5"
          role="tab"
        >
          <i class="fa-brands fa-discord mr-1 mt-3 "></i>
          <p className="mr-5 mt-2 ">Discord</p>
        </button>
        <button
          type="button"
          class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 inline-flex gap-x-1 border-b-2 border-transparent text-base whitespace-nowrap text-gray-400 hover:text-gray-300 focus:outline-none focus:text-orange-400 focus:hover:text-orange-300 disabled:pointer-events-none"
          id="tabs-with-underline-item-6"
          data-hs-tab="#tabs-with-underline-6"
          aria-controls="tabs-with-underline-6"
          role="tab"
        >
          <i class="fa-solid fa-bell mr-1 mt-3 "></i>
          <p className="mr-5 mt-2 ">Change Log</p>
        </button>
        <button
         type="button"
         class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 inline-flex gap-x-1 border-b-2 border-transparent text-base whitespace-nowrap text-gray-400 hover:text-gray-300 focus:outline-none focus:text-orange-400 focus:hover:text-orange-300 disabled:pointer-events-none"
         id="tabs-with-underline-item-7"
         data-hs-tab="#tabs-with-underline-7"
         aria-controls="tabs-with-underline-7"
         role="tab"
        >
          <i class="fa-regular fa-id-badge mr-1 mt-3"></i>
          <p className="mr-5 mt-2 ">About</p>
        </button>
      </div>
      <div>
      </div>
    </div>
  );
}
