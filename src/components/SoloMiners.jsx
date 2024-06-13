import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Header from './Header';
import { useNavigate, NavLink } from 'react-router-dom';
export default function SoloMiners({visible}) {
  const navigate = useNavigate()
    const [data, setData] = useState({})
    const fetchData = async () => {
    try {
      const response = await axios.get("https://api-bugna.xpoolminer.com/api/v2/solo/miners");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
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
          class="w-96 h-10 m-auto text-center font-medium justify-center hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-base whitespace-nowrap text-white hover:text-orange-400 focus:outline-none focus:text-orange-400 disabled:opacity-50 disabled:pointer-events-none"
          onClick={() => navigate("/propminer")}
        >
          PROP
        </button>
        <button
          type="button"
          class="w-96 h-10 text-center justify-center font-medium m-auto hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-base whitespace-nowrap text-white hover:text-orange-400 focus:outline-none focus:text-orange-400 disabled:opacity-50 disabled:pointer-events-none"
        >
          SOLO
        </button> */}
        <NavLink 
          to='/'
          className={({ isActive, isPending }) =>
            isPending ? "pending w-96 h-10 m-auto text-center font-medium justify-center text-white inline-flex gap-x-1 border-b-2 border-transparent text-base" : 
          isActive ? "active w-96 h-10 m-auto text-center font-medium justify-center text-orange-400 inline-flex gap-x-1 border-b-2 border-transparent text-base" : 
          "inline-flex w-96 h-10 m-auto text-center font-medium justify-center text-white gap-x-1 border-b-2 border-transparent text-base"
          }
        >
          {/* <i class="fa-regular fa-circle-check mt-1"></i> */}
          <i className={({ isActive, isPending }) => isPending ? "fa-regular fa-circle-check mt-1" : isActive ? "active fa-regular fa-circle-check mt-1" : " fa-regular fa-circle-check mt-1" }> </i>
          PROP
        </NavLink>
        <NavLink 
          to='/solominer'
          className={({ isActive, isPending }) =>
            isPending ? "pending w-96 h-10 m-auto text-center font-medium justify-center text-white inline-flex gap-x-1 border-b-2 border-transparent text-base" : 
          isActive ? "active w-96 h-10 m-auto text-center font-medium justify-center text-orange-400 inline-flex gap-x-1 border-b-2 border-transparent text-base" : 
          "inline-flex w-96 h-10 m-auto text-center font-medium justify-center text-white gap-x-1 border-b-2 border-transparent text-base"
          }
        >
          {/* <i class="fa-regular fa-circle-check mt-1"></i> */}
          <i className={({ isActive, isPending }) => isPending ? "fa-regular fa-circle-check mt-1" : isActive ? "active fa-regular fa-circle-check mt-1" : "fa-regular fa-circle-check mt-1" }> </i>
          SOLO
        </NavLink>
      </div>
    <table className='table-auto text-gray-300 w-4/5 h-auto m-auto text-center justify-center' >
        <thead className="bg-gray-800">
                <tr>
                    <th>
                        Miner
                    </th>
                    <th>
                        Hashrate
                    </th>
                    <th>
                        Online At
                    </th>
                </tr>
            </thead>
            <tbody id="tabs-with-underline-3" role="tabpanel" aria-labelledby="tabs-with-underline-item-3">
            {data.miners && Object.keys(data.miners).map((k) => {
                var e = data.miners[k];
                console.log("11111", k, e)
                return (
                  <tr key={k} className="bg-gray-700">
                    <td className="text-white font-mono">{k}</td>
                    <td className="text-white font-mono">{e.hr}</td>
                    <td className="text-white font-mono">{e.lastBeat}</td>
                  </tr>
                )
              })}
            </tbody>
        </table>
        </div>
  )
}
