"use client";
import React, { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import { get } from "../utils/apiFetcher";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await get(`http://localhost:2000/tasks`);
        setTasks(response);
      } catch (err) {
        console.error("Failed to load tasks", err);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="task-box">
      <div className="box-part header">
        <h1>Tasks List</h1>
        <button className="">Crete New Task</button>
      </div>
      <div className="box-part">
        <TaskList taskList={tasks} />
      </div>
      <div className="dialog-overlay" id="dialogOverlay">
        <div className="dialog-box">
          <div className="dialog-header">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <div className="dialog-content">
            <div className="from-group">
              <label>Name</label>
              <input type="text" className="input" />
            </div>
            <div className="from-grid">
            <div className="from-group">
              <label>Start date</label>
              <input type="date" className="input" />
            </div>
            <div className="from-group">
              <label>Due date</label>
              <input type="date" className="input" />
            </div>
            </div>
            <div className="from-group">
              <label>Description</label>
              <textarea  className="input"></textarea>
            </div>
          </div>
          <div className="dialog-footer">
            <button className="dialog-btn" onclick="closeDialog()">
              Cancel
            </button>
            <button className="dialog-btn" onclick="closeDialog()">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
