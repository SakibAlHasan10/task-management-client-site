
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useApi from "../../hooks/AuthApi/useApi";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const AddTask = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const user = useApi()
    const navigate = useNavigate()
//   console.log(data)
const email = user?.user?.email;
// console.log(data==[])
if(!data==[]){
  console.log(!data==[],'trueeeeeeeeeeee')
  setData("")
fetch("http://localhost:5000/task", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({owner:email, data}),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              toast.success("your signup successful", {
                position: toast.POSITION.TOP_RIGHT,
              });
            }
            navigate("/dashboard");
            return
          });
}
    return (
        <div className="w-full px-5">
          <Helmet>
        <title>Add Task || ourTask</title>
      </Helmet>
{/* (JSON.stringify(data)) */}
        <form onSubmit={handleSubmit((data) => setData(data))}>
          <div className="w-full mt-4">

          <span className=" text-white">Task Title</span>
          <input {...register("TaskTitle", { required: true })} placeholder="Task Title" className="w-full h-12 rounded-lg mt-2 px-4 "/> 
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

          <input type="date" {...register("StartDate", { required: true })} placeholder="Start Date" className=" w-full h-12 rounded-lg mt-2 px-4" />
            </div>
            <div className="w-full mt-4">

          <span>End Date</span>
          <input type="date" {...register("EndDate", { required: true })} placeholder="End Date" className=" w-full h-12 rounded-lg mt-2 px-4" />
            </div>
          </div>
          <div className="mt-4">

          <span className="mt-8">Descriptions</span>
          <textarea {...register("Descriptions", { required: true })} placeholder="Descriptions" className=" w-full h-12 rounded-lg mt-2 px-4"/>
          </div>
          {/* <p>{data}</p> */}
          <input type="submit" className="cursor-pointer w-full h-12 rounded-lg mt-6 px-4 bg-white text-black"/>
        </form>
        </div>
      );
};

export default AddTask;
