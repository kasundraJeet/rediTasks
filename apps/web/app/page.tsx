import TaskList from "./components/TaskList";

export default function Home() {
  return (
    <div className="task-box">
      <div className="box-part header">
        <h1>Tasks List</h1>
      </div>
      <div className="box-part">
        <TaskList />
      </div>
    </div>
  );
}
