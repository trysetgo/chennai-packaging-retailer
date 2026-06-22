"use client";

import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { ChevronUpIcon, ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const dataTableDefaultProps = {
  data: '[\n  {"id": 1, "name": "John Doe", "role": "Developer", "status": "Active"},\n  {"id": 2, "name": "Jane Smith", "role": "Designer", "status": "Offline"},\n  {"id": 3, "name": "Sam Johnson", "role": "Manager", "status": "Active"}\n]',
  columns: '[\n  {"header": "ID", "accessor": "id", "sortable": true},\n  {"header": "Name", "accessor": "name", "sortable": true},\n  {"header": "Role", "accessor": "role", "sortable": true},\n  {"header": "Status", "accessor": "status", "sortable": false}\n]',
  showSearch: true,
  searchPlaceholder: "Search records...",
  showPagination: true,
  rowsPerPage: 5,
  headerBackgroundColor: "#f9fafb",
  headerTextColor: "#374151",
  rowBackgroundColor: "#ffffff",
  rowAltBackgroundColor: "#f9fafb",
  rowTextColor: "#111827",
  borderColor: "#e5e7eb",
  className: "",
  style: {},
};

const DataTableComponent = (incomingProps) => {
  const props = { ...dataTableDefaultProps, ...incomingProps };

  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);

  let parsedData = [];
  let parsedColumns = [];
  try {
    parsedData = typeof props.data === "string" ? JSON.parse(props.data) : props.data;
    parsedColumns = typeof props.columns === "string" ? JSON.parse(props.columns) : props.columns;
  } catch (e) {
    return (
      <div className="p-4 text-red-500 border border-red-200 bg-red-50 rounded-md text-sm">
        Error parsing Data Table JSON props. Please check the Columns and Data configuration.
      </div>
    );
  }

  if (!Array.isArray(parsedData)) parsedData = [];
  if (!Array.isArray(parsedColumns)) parsedColumns = [];

  const handleSort = (key, sortable) => {
    if (!sortable) return;
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const filteredData = useMemo(() => {
    if (!props.showSearch || !searchTerm) return parsedData;
    const lowerSearch = searchTerm.toLowerCase();
    return parsedData.filter((row) =>
      Object.values(row).some((val) => String(val).toLowerCase().includes(lowerSearch))
    );
  }, [parsedData, searchTerm, props.showSearch]);

  const sortedData = useMemo(() => {
    let sortableItems = [...filteredData];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return sortableItems;
  }, [filteredData, sortConfig]);

  const totalPages = Math.ceil(sortedData.length / props.rowsPerPage);
  const currentData = props.showPagination
    ? sortedData.slice((currentPage - 1) * props.rowsPerPage, currentPage * props.rowsPerPage)
    : sortedData;

  return (
    <div className={props.className} style={{ ...props.style, width: "100%" }}>
      {props.showSearch && (
        <div className="mb-4 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            className="block w-full pl-9 pr-3 py-2 border rounded-md leading-5 bg-white dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
            style={{ borderColor: props.borderColor, color: props.rowTextColor }}
            placeholder={props.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
      )}

      <div className="overflow-x-auto border rounded-lg shadow-sm" style={{ borderColor: props.borderColor }}>
        <table className="min-w-full divide-y" style={{ borderColor: props.borderColor }}>
          <thead style={{ backgroundColor: props.headerBackgroundColor }}>
            <tr>
              {parsedColumns.map((col, idx) => (
                <th key={idx} scope="col" onClick={() => handleSort(col.accessor, col.sortable !== false)} className={`px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider ${col.sortable !== false ? "cursor-pointer select-none hover:bg-black/5 dark:hover:bg-white/5 transition-colors" : ""}`} style={{ color: props.headerTextColor }}>
                  <div className="flex items-center space-x-1">
                    <span>{col.header}</span>
                    {col.sortable !== false && (
                      <span className="flex flex-col ml-1">
                        <ChevronUpIcon className={`h-3 w-3 ${sortConfig.key === col.accessor && sortConfig.direction === "asc" ? "text-indigo-600 dark:text-indigo-400" : "text-gray-400"}`} />
                        <ChevronDownIcon className={`h-3 w-3 -mt-1 ${sortConfig.key === col.accessor && sortConfig.direction === "desc" ? "text-indigo-600 dark:text-indigo-400" : "text-gray-400"}`} />
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y" style={{ backgroundColor: props.rowBackgroundColor, borderColor: props.borderColor }}>
            {currentData.length > 0 ? (
              currentData.map((row, rowIndex) => (
                <tr key={rowIndex} style={{ backgroundColor: rowIndex % 2 === 0 ? props.rowBackgroundColor : props.rowAltBackgroundColor }}>
                  {parsedColumns.map((col, colIndex) => (
                    <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: props.rowTextColor }}>{row[col.accessor]}</td>
                  ))}
                </tr>
              ))
            ) : (
              <tr><td colSpan={parsedColumns.length} className="px-6 py-8 text-center text-sm text-gray-500">No results found</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {props.showPagination && totalPages > 1 && (
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm opacity-80" style={{ color: props.rowTextColor }}>
            Showing {(currentPage - 1) * props.rowsPerPage + 1} to {Math.min(currentPage * props.rowsPerPage, sortedData.length)} of {sortedData.length} entries
          </span>
          <div className="flex space-x-2">
            <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-3 py-1.5 border rounded-md text-sm font-medium disabled:opacity-40 transition-opacity hover:bg-black/5 dark:hover:bg-white/5" style={{ borderColor: props.borderColor, color: props.rowTextColor }}>Previous</button>
            <button onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="px-3 py-1.5 border rounded-md text-sm font-medium disabled:opacity-40 transition-opacity hover:bg-black/5 dark:hover:bg-white/5" style={{ borderColor: props.borderColor, color: props.rowTextColor }}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

DataTableComponent.propTypes = {
  data: PropTypes.string,
  columns: PropTypes.string,
  showSearch: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  showPagination: PropTypes.bool,
  rowsPerPage: PropTypes.number,
  headerBackgroundColor: PropTypes.string,
  headerTextColor: PropTypes.string,
  rowBackgroundColor: PropTypes.string,
  rowAltBackgroundColor: PropTypes.string,
  rowTextColor: PropTypes.string,
  borderColor: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default DataTableComponent;