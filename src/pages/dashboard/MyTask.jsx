import { useEffect, useState } from "react";
import usePrivate from "../../hooks/private/usePrivate";
import useApi from "../../hooks/AuthApi/useApi";
import { FaTrashCan } from "react-icons/fa6";
const MyTask = () => {
  const user = useApi();
  const [data, setData] = useState();
  const email = user?.user?.email;
  const axiosPrivate = usePrivate();
  useEffect(() => {
    axiosPrivate.get(`/task?owner=${email}`).then((res) => {
      setData(res.data);
    });
  }, [axiosPrivate, email]);
  console.log(data);
  return (
    <div className="w-full">
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data?.map((ts, idx) => (
              <tr key={ts._id}>
                <th>{idx + 1}</th>
                <td>{ts?.data?.TaskTitle}</td>
                <td>{ts?.data?.StartDate}</td>
                <td>{ts?.data?.EndDate}</td>
                <td className="text-red-600">
                  <button>
                    <FaTrashCan />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTask;
