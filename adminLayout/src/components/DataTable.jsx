import React from "react";

const DataTable = ({ loading }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {loading ? (
        <div className="p-8 text-center text-gray-500">Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="px-4 py-3 text-left">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">
                  Customer Name
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">
                  Company
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">
                  Order Value
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">
                  Order Date
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">
                  Status
                </th>
                <th className="px-4 py-3 text-xs font-semibold text-gray-600 uppercase text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 text-center text-gray-500" colSpan="7">
                  No data available
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DataTable;