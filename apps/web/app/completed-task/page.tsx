import TaskList from "../components/TaskList";

export default function CompletedTasks() {
  return (
    <div className="task-box">
      <div className="box-part header">
        <h1>Completed Tasks</h1>
      </div>
      <div className="box-part">
      <TaskList taskList={[]} />
      </div>
    </div>
  );
}
