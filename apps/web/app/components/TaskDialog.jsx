import React, { useState } from "react";
import { post } from "../../utils/apiFetcher";

export default function TaskDialog({ close }) {
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    dueDate: "",
    description: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const data = await post(`http://localhost:2000/tasks`, {
        title: formData.title,
        startDate: formData.startDate,
        dueDate: formData.dueDate,
        description: formData.description,
      });

      if (data.success) {
        close();
      }
    } catch (err) {
      console.error("Failed to load tasks", err);
    }
  }

  return (
    <div className="dialog-overlay" id="dialogOverlay">
      <form onSubmit={handleSubmit} className="dialog-box">
        <div className="dialog-header">
          <button type="button" onClick={close}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div className="dialog-content">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="input"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-grid">
            <div className="form-group">
              <label>Start date</label>
              <input
                type="date"
                className="input"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Due date</label>
              <input
                type="date"
                className="input"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="input"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="dialog-footer">
          <button type="button" className="dialog-btn" onClick={close}>
            Cancel
          </button>
          <button type="submit" className="dialog-btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
