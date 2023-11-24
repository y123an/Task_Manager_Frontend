import React, { useEffect, useState } from "react";
import axios from "axios";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      await axios
        .get("https://task-manager-api-1w4m.onrender.com/")
        .then((res) => {
          // console.log(res);
          setTasks(res.data.tasks);
        });
    };

    getTasks();
  }, []);

  const handleClick = async (id) => {
    await axios
      .post("https://task-manager-api-1w4m.onrender.com/", { id: id })
      .then((res) => {
        setTasks(res.data.tasks);
      });
  };
  const reset = async () => {
    await axios
      .post("https://task-manager-api-1w4m.onrender.com/reset")
      .then((res) => {
        setTasks(res.data.tasks);
      });
  };

  return (
    <div className="bg-gray-50">
      <ul className="grid gap-2 ">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex gap-5 items-center border rounded-lg px-4 py-2 border-black"
          >
            <button
              onClick={() => handleClick(task._id)}
              className="bg-purple-950 text-white rounded-lg px-2"
            >
              X
            </button>
            <li className={`${task.status && "line-through"}`}>{task.task}</li>
          </div>
        ))}
      </ul>
      <div className="flex justify-center">
        <button
          onClick={reset}
          className="bg-green-400 p-2 text-white font-bold rounded-xl"
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default Tasks;
