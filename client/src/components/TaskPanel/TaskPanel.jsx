import './TaskPanel.css';

function TaskPanel ({children, title}) {
  return (
    <div className="TaskPanel-container">
      <div className="TaskPanel-header">
        <h3>{title}</h3>
      </div>
      <ul className="TaskPanel-body">{children}</ul>
    </div>
  );
}

export default TaskPanel;