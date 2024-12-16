function TableFilter({ globalFilter, setGlobalFilter }) {
  return (
    <div className="w-64">
      <input
        type="text"
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value || undefined)}
        placeholder="Search all columns..."
        className="px-2 py-1 border rounded w-full bg-gray-900 text-gray-400"
      />
    </div>
  );
}
export default TableFilter;
