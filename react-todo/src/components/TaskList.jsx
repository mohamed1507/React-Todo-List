import TaskItem from "./TaskItem";
import styles from "./TaskList.module.css";
const TaskList = ({ tasks, deleteTask, toggleTask ,enteredEditMode}) => {
  return (
    <ul className={styles.tasks}>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            enteredEditMode={enteredEditMode}
          />
        ))}
    </ul>
  );
};

export default TaskList;
