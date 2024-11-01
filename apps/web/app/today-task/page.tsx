import TaskList from "../components/TaskList";

export default function TodayTask() {
  return (
    <div className="task-box">
      <div className="box-part header">
        <h1>Today Tasks</h1>
      </div>
      <div className="box-part">
        <TaskList />
      </div>
    </div>
  );
}
