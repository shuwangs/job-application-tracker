import React from "react";
import { Table } from "./Table";
import { Modal } from "./Modal";

export const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Table />
      <Modal />
    </div>
  );
};
