import { Link, NavLink, Outlet } from "react-router-dom";
import PageWidth from "../../components/PageWidth";
import useApi from "../../hooks/AuthApi/useApi";

const route = (
    <>
      <NavLink to={"/dashboard/addtask"}>
        <li>Add Task</li>
      </NavLink>
      <NavLink to={"/dashboard/mytask"}>
        <li>My Task</li>
      </NavLink>
      <NavLink>
        <li>Logout</li>
      </NavLink>
    </>
  );
const Dashboard = () => {
  const { user, logOut } = useApi();
  // console.log(user)
  const userLogout=()=>{
    logOut()
  }
    return (
        <div>
            <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full z-50 navbar bg-[#2A2E35]">
            <PageWidth>

            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1  text-[#5088E9] text-3xl font-bold">
              <h2>Dashboard</h2>
            </div>
            </PageWidth>
          </div>
          {/* Page content here */}
          <PageWidth>
            
          <div className="flex min-h-[89vh] justify-between w-full">
            <div className="menu mr-6 hidden lg:block p-4 w-60 min-h-[89vh] bg-base-200">
              <div className="border-b-2 border-dotted mb-6 ">
              {
              user&&<>
                <img src={user?.photoURL} alt={user?.displayName} className="w-28 rounded-full ml-8" />
                <h3 className="text-center mt-5 text-xl font-semibold">{user?.displayName}</h3>
                <h3 className="text-center mt-1 text-md font-semibold pb-4">{(user?.email.length>20)? user?.email.slice(0,19)+ "...":user?.email}</h3>
              </>
            } 
              </div>
            <ul>
            {/* Sidebar content here */}
            
            {route}
            <Link>
            <button className="btn" onClick={()=>userLogout()}>Logout</button>
            </Link>
          </ul>
            </div>
            <div className="flex justify-center items-center w-full">

            <Outlet/>
            </div>
            </div>
          </PageWidth>
        </div>
        <div className="drawer-side flex-none">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-52 mt-14 min-h-full bg-base-200">
              <div className="border-b-2 border-dotted mb-6 ">
              {
              user&&<>
                <img src={user?.photoURL} alt={user?.displayName} className="w-28 rounded-full ml-8" />
                <h3 className="text-center mt-5 text-xl font-semibold">{user?.displayName}</h3>
                <h3 className="text-center mt-1 text-md font-semibold pb-4">{(user?.email.length>20)? user?.email.slice(0,19)+ "...":user?.email}</h3>
              </>
            }
              </div>
            <ul>
            {/* Sidebar content here */}
            
            {route}
            <Link>
            <button className="btn" onClick={()=>userLogout()}>Logout</button>
            </Link>
          </ul>
            </div>
            
        </div>
      </div>
        </div>
    );
};

export default Dashboard;