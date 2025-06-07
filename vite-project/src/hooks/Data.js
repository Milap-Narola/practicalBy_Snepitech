import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Api } from "../config/Api";

const Data = () => {
  const location = useLocation();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      try {
        const res = await Api.get("/coins/markets", {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 10,
            page: 1,
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
  }, [location.search]);

  return { coins, loading };
};

export default Data;
