import { useState } from 'react'
import "./App.css";
import { Table } from "./components/Table";
// Import BrowserRouter
import { BrowserRouter as Router, Route } from 'react-router-dom';

const initialJobs = [
  {
    id: 1,
    company: 'Microsoft',
    position: 'Frontend Engineer',
    description: 'Working on UI components.',
    dateApplied: '2025-12-10',
    status: 'Applied',
  },
  {
    id: 2,
    company: 'Nintendo',
    position: 'Game Developer',
    description: 'Gameplay and UI work.',
    dateApplied: '2025-12-11',
    status: 'Interviewing',
  },
];

function App() {
  const [jobs, setJobs] = useState(initialJobs);
  const [form, setForm] = useState({
    company: '',
    position: '',
    description: '',
    dateApplied: '',
    status: 'Applied',
  });

  //console.log(jobs);
  //console.log(setJobs);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    console.log(form);

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      id: Date.now(), // simple unique id
      ...form,
    };

    setJobs((prev) => [...prev, newJob]);

    // reset form
    setForm({
      company: '',
      position: '',
      description: '',
      dateApplied: '',
      status: 'Applied',
    });
  };

  const handleDelete = (id) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  return (
    <div className="app">
      <h1>Job Tracker</h1>

      <form className="job-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Company
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Position
            <input
              type="text"
              name="position"
              value={form.position}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <label>
          Description
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </label>

        <div className="form-row">
          <label>
            Date Applied
            <input
              type="date"
              name="dateApplied"
              value={form.dateApplied}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Status
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              required
            >
              <option value="Applied">Applied</option>
              <option value="Interviewing">Interviewing</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
              <option value="On Hold">On Hold</option>
            </select>
          </label>
        </div>

        <button type="submit">Add Job</button>
      </form>

      <h2>Jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs yet.</p>
      ) : (
        <table className="jobs-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Position</th>
              <th>Description</th>
              <th>Date Applied</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td>{job.company}</td>
                <td>{job.position}</td>
                <td>{job.description}</td>
                <td>{job.dateApplied}</td>
                <td>{job.status}</td>
                <td>
                  <button type="button" onClick={() => handleDelete(job.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
