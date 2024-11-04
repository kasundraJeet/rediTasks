import React, { useState } from "react";
import { post } from "../../utils/apiFetcher";

export default function TaskList({ taskList, upDateList }) {
  const [loader, setLoader] = useState(false);

  async function handleStatus(id, status) {
    setLoader(true);
    try {
      const data = await post(`http://localhost:2000/status-update/${id}`, {
        status: status,
      });
      if (data.success == 1) {
        setLoader(false);
        upDateList();
      } else {
        setLoader(false);
      }
    } catch (err) {
      console.error("Failed to load tasks", err);
    } finally {
      setLoader(false);
    }
  }

  return (
    <>
      {taskList && taskList.length > 0 ? (
        <ul className="task-list">
          {taskList.map((task, index) => (
            <li key={index}>
              <div>
                <h4>{task.title}</h4>
                <ul className="tag-list">
                  {task.tags.map((tag, idx) => (
                    <li key={idx}>{tag}</li>
                  ))}
                </ul>
              </div>
              <div className="btn-group">
                <button disabled={loader} onClick={() => handleStatus(task._id, 2)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </button>
                <button disabled={loader}  onClick={() => handleStatus(task._id, 1)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                    <path d="M21 3v5h-5" />
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                    <path d="M8 16H3v5" />
                  </svg>
                </button>
                <button
                  disabled={loader}
                  onClick={() => handleStatus(task._id, 0)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-list">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5V19A9 3 0 0 0 21 19V5" />
            <path d="M3 12A9 3 0 0 0 21 12" />
          </svg>
          <p>No Task Available</p>
        </div>
      )}
    </>
  );
}
