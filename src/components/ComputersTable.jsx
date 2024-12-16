import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import api from "../api/axiosConfig";
import { ComputersColumns } from "../utils/ComputersColumns";
import { useQuery } from "@tanstack/react-query";
import TableFilter from "./TableFilter";
import { useNavigate } from "react-router-dom"; // Para manipular URLs

const empty = [];
const ComputersTable = () => {
  const navigate = useNavigate(); // Hook do React Router para gerenciar navegação

  const fetchComputers = async () => {
    const response = await api.get("/computers");
    return response.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["computers"], // Nome único da consulta
    queryFn: fetchComputers, // Função que executa a requisição
  });

  // Adicione uma lista de dependências vazia para evitar loops infinitos
  const columns = ComputersColumns;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    state: { globalFilter },
  } = useTable(
    {
      columns,
      data: data || empty,
    },

    useGlobalFilter,
    useSortBy
  );

  const handleRowClick = (computer_id) => {
    const newTabUrl = `/computer-details/${computer_id}`;
    window.open(newTabUrl, "_blank");
  };

  return (
    <div>
      <div className="ml-4 h-18 mt-4">
        <p className="text-gray-300 mb-4 text-lg">
          Computers ({data?.length || 0})
        </p>
        <TableFilter
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>

      <table
        className="text-zinc-300 border-spacing-0 w-full"
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={column.id}
                  className="p-2 border-b-2 border-zinc-600"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id} border-b last:border-b-0>
                {row.cells.map((cell) => {
                  if (cell.column.id === "computer_name") {
                    // Verifique se é a célula do nome do computador
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="text-center px-4 py-2 text-blue-500 underline cursor-pointer"
                        onClick={() => handleRowClick(row.original.computer_id)} // Clique no nome
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  } else {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="text-center px-4 py-2"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ComputersTable;
