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



{/* <div class="mb-4 border-b border-gray-200 dark:border-gray-700">

    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center"
     id="default-tab" 
     data-tabs-toggle="#default-tab-content" 
     role="tablist">

        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg" 
            id="profile-tab" data-tabs-target="#profile" type="button" 
            role="tab" aria-controls="profile" aria-selected="false">Profile</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" 
            id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" 
            id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
        </li>
        <li role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" 
            id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
        </li>
    </ul>
</div>
<div id="default-tab-content">
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
</div> */}
