import { useNavigate, useLocation } from "react-router-dom";

const Filter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchChange = (e) => {
    const params = new URLSearchParams(location.search);
    params.set("search", e.target.value);
    navigate(`${location.pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-6 flex justify-center">
      <input
        type="text"
        name="search"
        placeholder="Search by name, symbol, or rank"
        className="text-sm rounded-full px-4 py-2 w-96 ring-1 ring-gray-400"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Filter;
