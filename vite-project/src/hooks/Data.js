import { useEffect, useState } from "react";
import { Api } from "../config/Api";

const Data = (currentPage) => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      try {
        const res = await Api.get("/coins/markets", {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 10,
            page: currentPage,
            sparkline: false,
            ...Object.fromEntries(queryParams),
          },
        });

        setCoins(res.data);
      } catch (err) {
        console.error("Failed to fetch coins:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, [currentPage]);

  return { coins, loading };
};

export default Data;
