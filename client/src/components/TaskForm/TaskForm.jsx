function TaskForm ({newTask, onTextChange, onSubmit}) {
  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="Tell me what you gotta do!"
        value={newTask}
        onChange={onTextChange}
      />
      <input type="submit" value="Create" />
    </form>
  );
}

export default TaskForm;