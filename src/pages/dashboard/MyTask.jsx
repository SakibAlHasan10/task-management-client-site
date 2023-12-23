import usePrivate from "../../hooks/private/usePrivate";
import useApi from "../../hooks/AuthApi/useApi";
import { FaTrashCan } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
const MyTask = () => {
  const user = useApi();
  const email = user?.user?.email;
  const axiosPrivate = usePrivate();
  const {
    isPending,
    error,
    data = [],
    refetch,
  } = useQuery({
    queryKey: ["task", email],
    queryFn: () =>
      axiosPrivate.get(`/task?owner=${email}`).then((res) => {
        return res?.data;
      }),
  });
  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  const handleDeletedTask = (id) => {
    axiosPrivate.delete(`/task/${id}`).then((res) => {
      if (res?.data) {
        refetch();
        return;
      }
    });
  };
  return (
    <div className="w-full">
      <Helmet>
        <title>My Task || ourTask</title>
      </Helmet>
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
                  <button onClick={() => handleDeletedTask(ts?._id)}>
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
