import { useState, useEffect } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
  const [UpdatedTask, setUpdatedTask] = useState(editedTask.name);
  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    };
    window.addEventListener("keydown", closeModalIfEscaped);
    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, []);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    updateTask({ ...editedTask, name: UpdatedTask });
  };

  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => {
        e.target === e.currentTarget && closeEditMode();
      }}
    >
      <form className="todo" onSubmit={formSubmitHandler}>
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={UpdatedTask}
            onInput={(e) => setUpdatedTask(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
          <label htmlFor="editTask" className="label">
            Update Task
          </label>
        </div>
        <button
          className="btn"
          aria-label={`confirm edited task to now read ${UpdatedTask}`}
          type="submit"
        >
          <CheckIcon strokeWidth={2} height={24} width={24} />
        </button>
      </form>
    </div>
  );
};

export default EditForm;
