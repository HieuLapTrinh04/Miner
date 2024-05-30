import React, { useState } from "react";
import PropMiners from "./PropMiners";
import SoloMiners from "./SoloMiners";

export default function Miners({visible}) {
  const [activeMiners, setActiveMiners] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showFile, setShowFile] = useState(false);

 const handleClick = (buttonNumber) => {
  setActiveMiners(buttonNumber);
};
 if (!visible) return null;

  return (
    <div>
      <div className="w-4/5 h-auto m-auto">
        <h1 className="text-white font-bold text-xl mt-5 mb-3">Top Miners</h1>
        <hr className="border-gray-500" />
      </div>
      <div className="flex flex-row w-4/5 h-auto ml-32 mt-2" aria-label="Tabs" role="tablist">
        <button
          type="button"
          class="w-96 h-10 m-auto text-center font-medium justify-center hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-base whitespace-nowrap text-white hover:text-orange-400 focus:outline-none focus:text-orange-400 disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => handleClick(1)}
          // onChange={checkShow}
          onDoubleClick={() => setShowModal(true)}

        >
          PROP
        </button>
        <button
          type="button"
          class="w-96 h-10 text-center justify-center font-medium m-auto hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-base whitespace-nowrap text-white hover:text-orange-400 focus:outline-none focus:text-orange-400 disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => handleClick(2)}
          // onChange={checkShow}
          onDoubleClick={() => setShowFile(true)}
        >
          SOLO
        </button>
      </div>
      {activeMiners === 1 && <PropMiners visible={showModal}></PropMiners>}

      {activeMiners === 2 && <SoloMiners visible={showFile}></SoloMiners>}

    </div>
  );
}
