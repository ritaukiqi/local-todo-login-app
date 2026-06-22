function TodoFilters({ filter, onFilterChange }) {
  const getButtonClass = (value) =>
    filter === value
      ? "bg-blue-500 text-white"
      : "bg-slate-800 text-slate-300 hover:bg-slate-700";

  return (
    <div className="grid grid-cols-3 gap-3 my-5">
      <button
        className={`py-2 rounded-lg font-medium transition ${getButtonClass("all")}`}
        onClick={() => onFilterChange("all")}
      >
        All
      </button>

      <button
        className={`py-2 rounded-lg font-medium transition ${getButtonClass("active")}`}
        onClick={() => onFilterChange("active")}
      >
        Active
      </button>

      <button
        className={`py-2 rounded-lg font-medium transition ${getButtonClass("done")}`}
        onClick={() => onFilterChange("done")}
      >
        Done
      </button>
    </div>
  );
}

export default TodoFilters;