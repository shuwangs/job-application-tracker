import "./Modal.css";

export const Modal = () => {
  return (
    <div className="modal-container">
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="page">Company Name</label>
            <textarea name="page" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Job Title</label>
            <textarea name="description" />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select name="status">
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="first interview">First Interview</option>
              <option value="second interview">Second Interview</option>
            </select>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
