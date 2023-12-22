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
          <div className="w-full mt-4">

          <span className=" text-white">Task Title</span>
          <input {...register("Task Title", { required: true })} placeholder="Task Title" className="w-full h-12 rounded-lg mt-2 px-4 "/> 
          </div>
          <div className="w-full mt-4">

          <span>Task Priority</span>
          <select {...register("Priority", { required: true })} className=" w-full h-12 rounded-lg mt-2 px-4">
            <option value="">Priority</option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>
          </div>
          <div className="md:flex justify-between gap-5">
            <div className="w-full mt-4">
          <span>Start Date</span>

          <input type="date" {...register("Start Date", { required: true })} placeholder="Start Date" className=" w-full h-12 rounded-lg mt-2 px-4" />
            </div>
            <div className="w-full mt-4">

          <span>End Date</span>
          <input type="date" {...register("End Date", { required: true })} placeholder="End Date" className=" w-full h-12 rounded-lg mt-2 px-4" />
            </div>
          </div>
          <div className="mt-4">

          <span className="mt-8">Descriptions</span>
          <textarea {...register("Descriptions", { required: true })} placeholder="Descriptions" className=" w-full h-12 rounded-lg mt-2 px-4"/>
          </div>
          <p>{data}</p>
          <input type="submit" className=" w-full h-12 rounded-lg mt-6 px-4 bg-white text-black"/>
        </form>
        </div>
      );
};

export default AddTask;
