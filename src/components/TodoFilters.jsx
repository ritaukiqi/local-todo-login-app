function TodoFilters({ filter, onFilterChange }) {
  return (
    <div className="filters">
      <button onClick={() => onFilterChange("all")}>
        All
      </button>

      <button onClick={() => onFilterChange("active")}>
        Active
      </button>

      <button onClick={() => onFilterChange("done")}>
        Done
      </button>
    </div>
  );
}

export default TodoFilters;