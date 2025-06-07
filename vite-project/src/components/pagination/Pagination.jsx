const Pagination = ({ currentPage, hasPrev, hasNext, onPageChange }) => {
  return (
    <div className="mt-12 flex justify-between w-full">
      <button
        disabled={!hasPrev}
        onClick={() => onPageChange(currentPage - 1)}
        className="rounded-md bg-blue-500 text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-200"
      >
        Previous
      </button>
      <span className="text-gray-700 font-semibold">Page {currentPage}</span>
      <button
        disabled={!hasNext}
        onClick={() => onPageChange(currentPage + 1)}
        className="rounded-md bg-blue-500 text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-200"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
