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
      </div>
      <div className="box-part">
        <TaskList taskList={tasks} />
      </div>
    </div>
  );
}
