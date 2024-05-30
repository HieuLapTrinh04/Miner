import React, { useState } from "react";
import Miners from "./Miners";
import Block from "./Block/Block";

export default function Header() {
  const [activeContent, setActiveContent] = useState(null);
  const [showBlock, setShowBlock] = useState(false);
  const [showMines, setShowMiners] = useState(false);

  const handleClick = (buttonNumber) => {
    setActiveContent(buttonNumber);
  };

  return (
    <div>
      <div className="flex flex-row w-screen h-12 bg-slate-700 m-auto text-gray-400 ">
        <div className="flex m-auto " aria-label="Tabs" role="tablist">
          <img
            src="https://avatars.githubusercontent.com/u/161104712?s=200&v=4"
            alt=""
            className="w-10 h-10 mr-5"
          />
          <button
            type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 inline-flex gap-x-1 border-b-2 border-transparent text-base whitespace-nowrap text-gray-400 hover:text-gray-300 focus:outline-none focus:text-orange-400 focus:hover:text-orange-300 disabled:opacity-50 disabled:pointer-events-none active"
          >
            <i class="fa-solid fa-house-chimney mr-1 mt-3 "></i>
            <p className="mr-5 mt-2 ">Home</p>
          </button>
          <button
            type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 inline-flex gap-x-1 border-b-2 border-transparent text-base whitespace-nowrap text-gray-400 hover:text-gray-300 focus:outline-none focus:text-orange-400 focus:hover:text-orange-300 disabled:pointer-events-none"
          >
            <i class="fa-solid fa-arrow-pointer mr-1 mt-3 "></i>
            <p className="mr-5 mt-2 ">Quick Start</p>
          </button>
          <button
            type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 inline-flex gap-x-1 border-b-2 border-transparent text-base whitespace-nowrap text-gray-400 hover:text-gray-300 focus:outline-none focus:text-orange-400 focus:hover:text-orange-300 disabled:pointer-events-none"
            onClick={() => handleClick(1)}
            onDoubleClick={() => setShowMiners(true)}
          >
            <i class="fa-solid fa-cash-register mr-1 mt-3 "></i>
            <p className="mr-5 mt-2 ">Miners</p>
          </button>
          <button
            type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 inline-flex gap-x-1 border-b-2 border-transparent text-base whitespace-nowrap text-gray-400 hover:text-gray-300 focus:outline-none focus:text-orange-400 focus:hover:text-orange-300 disabled:pointer-events-none"
            onClick={() => handleClick(2)}
            onDoubleClick={() => setShowBlock(true)}
          >
            <i class="fa-solid fa-box mr-1 mt-3 "></i>
            <p className="mr-5 mt-2 ">Block</p>
          </button>
          <button
            type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 inline-flex gap-x-1 border-b-2 border-transparent text-base whitespace-nowrap text-gray-400 hover:text-gray-300 focus:outline-none focus:text-orange-400 focus:hover:text-orange-300 disabled:pointer-events-none"
          >
            <i class="fa-brands fa-discord mr-1 mt-3 "></i>
            <p className="mr-5 mt-2 ">Discord</p>
          </button>
          <button
            type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 inline-flex gap-x-1 border-b-2 border-transparent text-base whitespace-nowrap text-gray-400 hover:text-gray-300 focus:outline-none focus:text-orange-400 focus:hover:text-orange-300 disabled:pointer-events-none"
          >
            <i class="fa-solid fa-bell mr-1 mt-3 "></i>
            <p className="mr-5 mt-2 ">Change Log</p>
          </button>
          <button
            type="button"
            class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 inline-flex gap-x-1 border-b-2 border-transparent text-base whitespace-nowrap text-gray-400 hover:text-gray-300 focus:outline-none focus:text-orange-400 focus:hover:text-orange-300 disabled:pointer-events-none"
          >
            <i class="fa-regular fa-id-badge mr-1 mt-3"></i>
            <p className="mr-5 mt-2 ">About</p>
          </button>
        </div>
      </div>
      <div>
          {activeContent === 1 && <Miners visible={showMines}></Miners>}

          {activeContent === 2 && <Block visible={showBlock}></Block>}
        </div>
    </div>
  );
}
