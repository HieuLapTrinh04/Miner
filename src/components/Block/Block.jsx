import React, { useState, useEffect } from "react";
import Header from "../Header";
import axios from "axios";
export default function Block({ visible }) {
  const [data, setData] = useState({});
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api-bugna.xpoolminer.com/api/blocks"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    const half = Math.floor(maxLength / 2);
    return `${text.slice(0, half)}...${text.slice(-half)}`;
  };
  
  const TextCard = ({ text, maxLength }) => {
    return (
      <td className="text-blue-400 underline font-mono text-xs">
        <a href="">{truncateText(text, maxLength)}</a>
      </td>
    );
  };
  return (
    <div className="w-screen h-auto">
      <Header></Header>
      <div className="m-auto mx-28 ">
      <div className=" ">
        <h1 className="text-orange-400 font-medium text-2xl mt-5 mb-5">
          Block stats
        </h1>
      </div>
      <div className="flex flex-row text-white">
        <div className="m-auto w-80 h-20 items-center justify-center rounded-xl mt-0 flex flex-col bg-gray-700">
          <div className="flex flex-row">
            <i class="fa-solid fa-box mr-3 mt-1 text-orange-500"></i>
            <p className="text-lg text-gray-400 font-medium">Last Blocks</p>
          </div>
          <p className="text-lg font-medium">
            {data.candidates && data.candidates[0].height}
          </p>
          {/* <p>{console.log('aaaa', data)}</p> */}
          {/* {data.candidates && data.candidates.forEach(element => {
            <p className="text-lg font-medium">{element.height[0]}</p>
            // <p>{console.log('qqqqqqqqqq', element)}</p>
          })} */}
        </div>
        <div className="m-auto w-80 h-20 items-center justify-center rounded-xl mt-0 flex flex-col bg-gray-700">
          <div className="flex flex-row">
            <i class="fa-solid fa-boxes-stacked mr-3 mt-1 text-orange-500"></i>
            <p className="text-lg text-gray-400 font-medium">
              Total Block Found
            </p>
          </div>
          <p className="text-lg font-medium">{data.maturedTotal}</p>
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
      <div className=" ">
        <h1 className="text-orange-400 font-medium text-2xl mt-5 mb-5">
          Luck stats
        </h1>
      </div>
      <div className="flex flex-row m-auto ">
        {data.luck &&
          Object.keys(data.luck).map((k) => {
            var e = data.luck[k];
            return (
              <div key={k} className="m-auto w-80 h-20 items-center justify-center rounded-xl mt-0 flex flex-col bg-gray-700 ">
                <div className="flex flex-row">
                  <p className="text-lg text-gray-400 font-medium">
                    Last {k} Blocks Found
                  </p>
                </div>
                <div className="bg-gray-700 text-white">
                  <p className="text-lg font-medium">
                    {Math.round(e.luck * 10000) * 0.01}%
                    {/* {e.luck.toFixed(4/100) }% */}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="m-auto">
        <hr className="border-gray-500 mt-10 mb-4" />
      </div>
      <div className="h-auto">
        <table className="table-auto text-gray-300 w-full m-auto text-center justify-center">
        <thead className="bg-gray-800 text-sm my-20">
          <tr>
            <th>DAA Score</th>
            <th>Hash</th>
            <th>Finder</th>
            <th>Time</th>
            <th>Luck</th>
            <th>Reward</th>
            <th>Region</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {data.candidates &&
            Object.keys(data.candidates).map((k) => {
              var e = data.candidates[k];
              return (
                <tr key={k} className="bg-gray-700 ">
                  <td className="text-white font-mono text-xs">{e.height}</td>
                  <TextCard text={e.hash} maxLength={25}></TextCard>
                  <td className="text-white font-mono text-xs">{e.finder}</td>
                  <td className="text-white font-mono text-xs">{new Date(e.timestamp * 1000).toLocaleTimeString()} {new Date(e.timestamp * 1000).toLocaleDateString()}</td>
                  {/* <td className="text-white font-mono text-xs "><p className="bg-gray-500 rounded-full mt-2">Waiting...</p></td> */}
                  <td className="text-white font-mono text-xs "><p className="bg-gray-500 text-white rounded-full mt-2">Waiting...</p></td>
                  <td className="text-white font-mono text-xs"><p className="bg-gray-500 rounded-full mt-2 w-28 ml-5 -mr-9">Waiting...</p></td>
                  <td className="text-white font-mono text-xs">unknown</td>
                  <td className="text-white font-mono text-xs relative"><p className="absolute top-2 animate-ripple w-2 h-2 bg-blue-600 rounded-full ml-4"></p> <i class="ml-4 fa-solid fa-user-group"></i></td>
                </tr>
              );
            })}
          {data.matured &&
            Object.keys(data.matured).map((k) => {
              var e = data.matured[k];
              return (
                <tr key={k} className="bg-gray-700">
                  <td className="text-white font-mono text-xs">{e.height}</td>
                  <TextCard text={e.hash} maxLength={25}></TextCard>
                  <td className="text-white font-mono text-xs">{e.finder}</td>
                  <td className="text-white font-mono text-xs">{new Date(e.timestamp * 1000).toLocaleTimeString()} {new Date(e.timestamp * 1000).toLocaleDateString()}</td>
                  <td className="text-white font-mono text-xs "><p className="bg-gray-500 rounded-full mt-2">{Math.round((e.shares / e.difficulty) * 10000) / 100}%</p></td>
                  <td className="text-white font-mono text-xs"><p className="bg-green-700 rounded-full mt-2 w-28 ml-5 -mr-9">+{(parseInt(e.reward) / 100000000).toFixed(3).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')} BGA</p></td>
                  <td className="text-white font-mono text-xs">{e.minerName.split(' ')[1]}</td>
                  <td className="text-white font-mono text-xs"><i class="fa-solid fa-unlock text-green-600"></i> <i class="fa-solid fa-user-group"></i></td>
                </tr>
              );
            })}
        </tbody>
      </table>
      </div>
      <div className="mt-10 bg-gray-900">
        <br />
      </div>
      </div>
    </div>
  );
}
