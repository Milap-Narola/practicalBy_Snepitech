import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const FilterCoins = (coins) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const search = params.get("search") || "";

  const filteredCoins = useMemo(() => {
    if (!search) return coins;

    const term = search.toLowerCase();

    return coins.filter((coin) =>
      coin.name.toLowerCase().includes(term) ||
      coin.symbol.toLowerCase().includes(term) ||
      coin.market_cap_rank?.toString().includes(term)
    );
  }, [coins, search]);

  return { filteredCoins };
};

export default FilterCoins;
