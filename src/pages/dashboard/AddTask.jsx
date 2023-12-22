import { useState } from "react";
import { useForm } from "react-hook-form";
// import Header from "./Header";

const AddTask = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
  

    return (
        <div className="w-full px-5">

        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          {/* <Header /> */}
          <span>Task Title</span>
          <input {...register("Task Title", { required: true })} placeholder="Task Title" className="w-full h-12 rounded-lg "/> <br />
          <span>Task Title</span>
          <select {...register("Priority", { required: true })} className=" w-full h-12 rounded-lg mt-5">
            <option value="">Priority</option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select> <br />
          <div className="md:flex justify-between gap-5">
            <div className="w-full">
          <span>Task Title</span>

          <input type="date" {...register("Deadlines", { required: true })} placeholder="Deadlines" className=" w-full h-12 rounded-lg mt-5" />
            </div>
            <div className="w-full">
          <span>Task Title</span>

          <input type="date" {...register("Deadlines", { required: true })} placeholder="Deadlines" className=" w-full h-12 rounded-lg mt-5" />
            </div>
          </div>
          <span>Task Title</span>
          <textarea {...register("Descriptions", { required: true })} placeholder="Descriptions" className=" w-full h-12 rounded-lg mt-5"/> <br />
          <p>{data}</p>
          <input type="submit" className=" w-full h-12 rounded-lg mt-5"/>
        </form>
        </div>
      );
};

export default AddTask;
