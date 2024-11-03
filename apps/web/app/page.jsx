"use client";
import React, { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import TaskDialog from "./components/TaskDialog";
import { get } from "../utils/apiFetcher";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskDialog, setTaskDialog] = useState(false);

  const fetchTasks = async () => {
    try {
      const response = await get(`http://localhost:2000/tasks?status=1`);
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
        <h1>Tasks List</h1>
        <button onClick={() => setTaskDialog(true)}>Crete New Task</button>
      </div>
      <div className="box-part">
        <TaskList taskList={tasks} upDateList={fetchTasks} />
      </div>
      {taskDialog && <TaskDialog close={() => setTaskDialog(false)} />}
    </div>
  );
}
