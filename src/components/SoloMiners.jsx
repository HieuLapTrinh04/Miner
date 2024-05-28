import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function SoloMiners({visible}) {
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
  if (!visible) return null;
  return (
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
  )
}
