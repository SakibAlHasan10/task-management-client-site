import { Link } from "react-router-dom";
import PageWidth from "../../components/PageWidth";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || ourTask</title>
      </Helmet>
      <PageWidth>
        <div className="flex justify-center text-center items-center min-h-[90vh]">
          <div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold">
              ONLINE TASK MANAGEMENT
            </h2>
            <p className="text-md font-medium w-11/12 md:w-9/12 lg:w-7/12 mx-auto mt-4">
              Organize and manage your team like a boss with ourTask, a free
              task management tool packing more capabilities than you can
              imagine.
            </p>
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
  );
};

export default Home;
