import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Social from "../../Sheare/SocialResigter/Social";
import useApi from "../../AuthApi/useApi";
import { ToastContainer, toast } from "react-toastify";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const SignIn = () => {
  const [errorText, setErrorText] = useState("");
  const [visible, setVisible] = useState(true);
  const { signInWithEmail } = useApi();
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    setErrorText("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmail(email, password)
      .then((res) => {
        res && toast.success("your login successful", {
          position: toast.POSITION.TOP_RIGHT,
        });
        // console.log(res.user);
        navigate("/");
      })
      .catch((error) => {
        if (error) {
          setErrorText("invalid login information");
        }
        // console.error(error)
      });
  };
  return (
    <div>
      <Helmet>
      <title>Login || TidalWave</title>
      </Helmet>
      <ToastContainer />
      <div className="hero min-h-screen">
        <div className="hero-content w-full flex-col">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input w-full input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={`${visible ? "password" : "text"}`}
                    name="password"
                    placeholder="password"
                    className="input w-full input-bordered"
                    required
                  />
                  <span
                    onClick={() => setVisible(!visible)}
                    className={`absolute -ml-8 pt-4`}
                  >
                    {visible ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <p className="text-red-600 text-lg mt-2 font-semibold">
                  {errorText}
                </p>
              </div>
              <div className="form-control mt-2">
                <button type="submit" className="btn btn-outline">
                  Login
                </button>
              </div>
            </form>
            <div className="px-8 pb-8">
              <Social></Social>
              <p className="text-center mt-4">
                Not a Member?{" "}
                <Link
                  to={"/sign-up"}
                  className="text-orange-400 hover:text-green-600"
                >
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
