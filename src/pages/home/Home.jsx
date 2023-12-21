import { Link, NavLink } from "react-router-dom";
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

const Home = () => {
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-[#2A2E35]">
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
            <div className="flex-1 px-2 mx-2 text-[#5088E9] text-3xl font-bold">
              our<span className="text-[#ff625e]">Task</span>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal gap-6">
                {/* Navbar menu content here */}
                {route}
              </ul>
            </div>
          </div>
          {/* Page content here */}
          <PageWidth>
            
          <div className="flex justify-center items-center min-h-[80vh]">
            <div>
                <h2 className="text-4xl font-extrabold">Continue your task </h2>
                <div className="w-full text-center mt-8">

            <Link to={"/signin"}>
              <button className="btn bg-blue-600">Let&apos;s Explore</button>
            </Link>
                </div>
          </div>
            </div>
          </PageWidth>
        </div>
        <div className="drawer-side">
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

export default Home;
