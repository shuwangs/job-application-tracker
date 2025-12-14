import React, { useState } from "react";

import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      company: "",
      position: "",
      description: "",
      dateApplied: "",
      status: "Applied",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (
      formState.company &&
      formState.position &&
      formState.status &&
      formState.dateApplied
    ) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              name="company"
              onChange={handleChange}
              value={formState.company}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position</label>
            <input
              name="position"
              onChange={handleChange}
              value={formState.position}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              name="description"
              onChange={handleChange}
              value={formState.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateApplied">Date Applied</label>
            <input
              name="dateApplied"
              onChange={handleChange}
              value={formState.dateApplied}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              onChange={handleChange}
              value={formState.status}
              required
            >
              <option value="Applied">Applied</option>
              <option value="Interviewing">Interviewing</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
              <option value="On Hold">On Hold</option>
            </select>
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
