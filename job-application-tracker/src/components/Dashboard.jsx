import { useState } from "react";
import React from "react";
import { Table } from "./Table";
import { Modal } from "./Modal";

export const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="Dashboard">
      <Table />
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add New
      </button>
      {modalOpen && <Modal />}
    </div>
  );
};
