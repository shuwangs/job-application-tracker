import { useState } from "react";
import { Table } from "./Table";
import { Modal } from "./Modal";

export const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      company: "Microsoft",
      position: "Frontend Engineer",
      description: "Working on UI components.",
      dateApplied: "2025-12-10",
      status: "Applied",
    },
    {
      company: "Nintendo",
      position: "Game Developer",
      description: "Gameplay and UI work.",
      dateApplied: "2025-12-11",
      status: "Interviewing",
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="Dashboard">
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button onClick={() => setModalOpen(true)} className="btn">
        Add
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
};

export default Dashboard;
