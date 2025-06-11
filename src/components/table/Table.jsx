"use client";

import React, { useState } from "react";
import Pagination from "../pagination/Pagination";

export default function Table({ columns, data, title }) {
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 5;

  const totalPage = (count) => Math.ceil(count / itemsPerPage);

  const paginatedData = data.slice(
    (pageNumber - 1) * itemsPerPage,
    pageNumber * itemsPerPage
  );

  return (
    <div className="p-5 bg-gray-50 w-full">
      <div className="bg-white p-5 shadow-md rounded-lg min-w-[600px]">
        {title && (
          <h2 className="text-right p-4 font-bold text-lg border-b border-gray-100 mb-4">
            {title}
          </h2>
        )}

        <table className="table-auto w-full text-sm text-gray-700 text-center">
          <thead>
            <tr className="bg-[#3676B61A] text-[#2F2F2F]">
              {columns.map((col, idx) => (
                <th key={idx} className="p-3 whitespace-nowrap">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className="border-b border-[#E8E8E8] hover:bg-[#F2F5FA]"
              >
                {columns.map((col, colIdx) => (
                  <td key={colIdx} className="p-3 whitespace-nowrap">
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-start p-3">
          <Pagination
            setPageNumber={setPageNumber}
            totalPages={totalPage(data.length)}
            pageNumber={pageNumber}
          />
        </div>
      </div>
    </div>
  );
}
