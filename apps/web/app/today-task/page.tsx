"use client";
import React, { useEffect, useState } from "react";
import TaskList from "../components/TaskList";
import { get } from "../../utils/apiFetcher";

export default function DeletedList() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const today = new Date().toISOString().split("T")[0];

      const response = await get(`http://localhost:2000/tasks/?date=${today}`);
      setTasks(response.data);
    } catch (err) {
      console.error("Failed to load tasks", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="task-box">
      <div className="box-part header">
        <h1>Today Tasks</h1>
      </div>
      <div className="box-part">
        <TaskList taskList={tasks} upDateList={fetchTasks} />
      </div>
    </div>
  );
}
