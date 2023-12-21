import { NavLink, Outlet } from "react-router-dom";
import PageWidth from "../../components/PageWidth";

const route = (
    <>
      <NavLink>
        <li>Home</li>
      </NavLink>
      <NavLink>
        <li>About</li>
      </NavLink>
      <NavLink>
        <li>contact</li>
      </NavLink>
    </>
  );
const Dashboard = () => {
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
            
          <div className="flex min-h-[89vh] justify-between bg-white w-full">
            <div>
            <ul className="menu mr-6 hidden lg:block p-4 w-52 min-h-[89vh] bg-base-200">
            {/* Sidebar content here */}
                <img src="" alt="" />
                <h3>name</h3>
            {route}
          </ul>
            </div>
            <div>

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
          <ul className="menu p-4 w-52 min-h-full bg-base-200">
            {/* Sidebar content here */}
            {route}
          </ul>
        </div>
      </div>
        </div>
    );
};

export default Dashboard;