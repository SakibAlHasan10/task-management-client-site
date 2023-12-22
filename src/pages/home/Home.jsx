import { Link, NavLink } from "react-router-dom";
import PageWidth from "../../components/PageWidth";

const route = (
  <>
    <NavLink
    to={`/`}
    className={({ isActive, isPending }) =>
      isActive
        ? "active text-[#ff625e] border-b mb-3 lg:mb-0 text-lg border-[#ff625e]"
        : isPending
        ? "pending"
        : "mb-3 lg:mb-0 hover:text-[#ff625e] text-lg hover:border-b border-[#ff625e]"
    }

    >
      <li>Home</li>
    </NavLink>
    <NavLink to={`/people`}
    className={({ isActive, isPending }) =>
      isActive
        ? "active text-[#ff625e] mb-3 border-b lg:mb-0 text-lg border-[#ff625e]"
        : isPending
        ? "pending"
        : "mb-3 lg:mb-0 hover:text-[#ff625e] text-lg hover:border-b border-[#ff625e]"
    }
    >
      <li>People</li>
    </NavLink>
    <NavLink to={`/about`}
    className={({ isActive, isPending }) =>
      isActive
        ? "active text-[#ff625e] border-b mb-3 lg:mb-0 text-lg border-[#ff625e]"
        : isPending
        ? "pending"
        : "mb-3 lg:mb-0 hover:text-[#ff625e] text-lg hover:border-b border-[#ff625e]"
    }
    >
      <li>About</li>
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
            <div className="w-full">

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
            <div className="flex justify-between w-full mx-auto max-w-screen-xl ">

            <div className="flex-1 px-2 mx-2 text-[#5088E9] text-3xl font-bold">
              our<span className="text-[#ff625e]">Task</span>
            </div>
            <div className=" flex-none hidden lg:block">
              <ul className="menu menu-horizontal gap-6">
                {/* Navbar menu content here */}
                {route}
              </ul>
            </div>
            </div>

            </div>
          </div>
          {/* Page content here */}
          <PageWidth>
            <div className="flex justify-center text-center items-center min-h-[90vh]">
              <div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold">
                  ONLINE TASK MANAGEMENT
                </h2>
                    <p className="text-md font-medium w-11/12 md:w-9/12 lg:w-7/12 mx-auto mt-4">Organize and manage your team like a boss with ourTask, a free task management tool packing more capabilities than you can imagine.</p>
                <div className="w-full text-center mt-8">
                  <Link to={"/signin"}>
                    <button className="btn bg-[#09C372] text-white font-semibold text-2xl hover:bg-white hover:text-black">
                      Let&apos;s Explore
                    </button>
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
          <ul className="menu p-4 mt-16 w-52 min-h-full bg-base-200">
            {/* Sidebar content here */}
            {route}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
