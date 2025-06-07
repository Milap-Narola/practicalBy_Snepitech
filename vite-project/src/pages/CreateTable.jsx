import { useState } from "react";
import { useLocation } from "react-router-dom";
import Data from "../hooks/Data";
import Pagination from "../components/pagination/Pagination";

const CreateTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { coins, loading } = Data(currentPage);
  const { search } = useLocation();

  const query = new URLSearchParams(search).get("search")?.toLowerCase() || "";

  const filteredCoins = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(query) ||
      coin.symbol.toLowerCase().includes(query) ||
      coin.market_cap_rank.toString().includes(query)
    );
  });

  const hasNext = coins.length === 10;
  const hasPrev = currentPage > 1;

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <>
      <div className="overflow-x-auto p-4">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2">Id</th>
              <th className="text-left px-4 py-2">Coin</th>
              <th className="text-left px-4 py-2">Symbol</th>
              <th className="text-left px-4 py-2">Price (USD)</th>
              <th className="text-left px-4 py-2">Market Cap</th>
              <th className="text-left px-4 py-2">Rank</th>
              <th className="text-left px-4 py-2">24h Volume</th>
              <th className="text-left px-4 py-2">24h % Change</th>
              <th className="text-left px-4 py-2">ATH</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins.map((coin, i) => (
              <tr key={coin.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{i + 1 + (currentPage - 1) * 10}</td>
                <td className="flex items-center gap-3 px-4 py-2">
                  <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                  {coin.name}
                </td>
                <td className="px-4 py-2 uppercase">{coin.symbol}</td>
                <td className="px-4 py-2">${coin.current_price.toLocaleString()}</td>
                <td className="px-4 py-2">${coin.market_cap.toLocaleString()}</td>
                <td className="px-4 py-2">{coin.market_cap_rank}</td>
                <td className="px-4 py-2">${coin.total_volume.toLocaleString()}</td>
                <td className={`px-4 py-2 font-medium ${coin.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-500'}`}>
                  {coin.price_change_percentage_24h?.toFixed(2)}%
                </td>
                <td className="px-4 py-2">${coin.ath.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        hasPrev={hasPrev}
        hasNext={hasNext}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default CreateTable;
