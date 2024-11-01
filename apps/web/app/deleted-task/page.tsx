import TaskList from "../components/TaskList";

export default function DeletedList() {
  return (
    <div className="task-box">
      <div className="box-part header">
        <h1>Deleted Tasks</h1>
      </div>
      <div className="box-part">
        <TaskList />
      </div>
    </div>
  );
}
