import React from "react";
import "./Table.css";

export const Table = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Job Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
