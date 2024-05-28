import React from "react";

export default function Block({ visible }) {
  if (!visible) return null;

  return (
    <div>
      <div className="w-4/5 h-auto m-auto">
        <h1 className="text-orange-400 font-medium text-2xl mt-5 mb-5">
          Block stats
        </h1>
      </div>
      <div className="flex flex-row w-4/5 h-screen text-white ml-32">
        <div className="m-auto w-80 h-20 items-center justify-center rounded-xl mt-0 flex flex-row bg-gray-700">
          <i class="fa-solid fa-box mr-3 mt-1 text-orange-500"></i>
          <p className="text-lg text-gray-400 font-medium">Last Blocks</p>
        </div>
        <div className="m-auto w-80 h-20 items-center justify-center rounded-xl mt-0 flex flex-col bg-gray-700">
          <div className="flex flex-row">
            <i class="fa-solid fa-boxes-stacked mr-3 mt-1 text-orange-500"></i>
            <p className="text-lg text-gray-400 font-medium">
              Total Block Found
            </p>
          </div>
          <p className="text-lg font-medium">271302</p>
        </div>
        <div className="m-auto w-80 h-20 items-center justify-center rounded-xl mt-0 flex flex-col bg-gray-700">
          <div className="flex flex-row">
            <i class="fa-solid fa-notes-medical mr-3 mt-1 text-orange-500"></i>
            <p className="text-lg text-gray-400 font-medium">
              Maturity Requirement
            </p>
          </div>
          <p className="text-lg font-medium">120</p>
        </div>
      </div>
      <div>
        <h1> </h1>
      </div>
    </div>
  );
}
