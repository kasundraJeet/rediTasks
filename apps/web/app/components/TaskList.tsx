type Task = {
  title: string;
  tags: string[];
};

interface TaskListProps {
  taskList: Task[];
}

export default function TaskList({ taskList }: TaskListProps) {
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
                <button>Edit</button>
                <button>Delete</button>
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
