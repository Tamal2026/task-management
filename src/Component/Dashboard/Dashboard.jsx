import { useForm } from "react-hook-form";
import {DragDropContext , Droppable,Draggable} from 'react-beautiful-dnd'
import axios from "axios";
import Swal from "sweetalert2";
import { useQuery } from "react-query";
import { MdDelete } from "react-icons/md";
const Dashboard = () => {
  const { register, handleSubmit, reset } = useForm();
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/alltask");
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Booking Cancel!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(`http://localhost:5000/alltask/${id}`);

          Swal.fire({
            title: "Deleted !",
            text: "Your Task Deleted Successfully",
            icon: "success",
          });
          refetch();
        } catch (error) {
          console.error("Error occurred during deletion:", error);
        }
      }
    });
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/alltask", data);

      console.log("Server response:", response.data);
      if (response.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Successfully",
          text: "Your Task Added",
        });
      }

      reset();
      refetch();
    } catch (error) {
      console.error("Error submitting task:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
      <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Create New Task</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="taskTitle"
              className="block text-sm font-medium text-gray-600"
            >
              Title:
            </label>
            <input
              type="text"
              id="taskTitle"
              {...register("title")}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="taskDescription"
              className="block text-sm font-medium text-gray-600"
            >
              Description:
            </label>
            <textarea
              id="taskDescription"
              {...register("description")}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="taskDeadline"
              className="block text-sm font-medium text-gray-600"
            >
              Deadline:
            </label>
            <input
              type="date"
              id="taskDeadline"
              {...register("deadline")}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="taskPriority"
              className="block text-sm font-medium text-gray-600"
            >
              Priority:
            </label>
            <select
              id="taskPriority"
              {...register("priority")}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Create Task
          </button>
        </form>
      </div>
      <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-lg">
        <h1 className="text-xl font font-bold mb-3">TO - DO</h1>
        <hr />
        <div>
          {tasks
            .slice()
            .reverse()
            .map((task) => (
              <div key={task._id} className="mb-4 border border-gray-300 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
              <p className="text-gray-600 mb-2">{task.description}</p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Deadline:</span> {task.deadline}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Priority:</span> {task.priority}
              </p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleDelete(task._id)}
                  className="text-2xl text-red-600 "
                >
                  <MdDelete />
                </button>
              </div>
            </div>
            ))}
        </div>
      </div>
      <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-lg">
        <h1 className="text-xl font font-bold mb-3">Ongoing</h1>
        <hr />
      </div>
      <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-lg">
        <h1 className="text-xl font font-bold mb-3"> Completed</h1>
        <hr />
      </div>
    </div>
  );
};

export default Dashboard;
