import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Table.css";

export const Table = () => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th className="company">Company</th>
            <th className="job-title">Job Title</th>
            <th className="status">Status</th>
            <th className="actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="input1">e.g. Playstation</td>
            <td className="input2">e.g. Software Engineer</td>
            <td>
              <span className="input3">e.g. Pending</span>
            </td>
            <td>
              <span className="actions">
                <BsFillTrashFill className="delete-btn" />
                <BsFillPencilFill />
              </span>
            </td>
          </tr>
          <tr>
            <td className="input1">e.g. Playstation</td>
            <td className="input2">e.g. Software Engineer</td>
            <td>
              <span className="input3">e.g. Pending</span>
            </td>
            <td>
              <span className="actions">
                <BsFillTrashFill className="delete-btn" />
                <BsFillPencilFill />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Table;
