import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Social from "../../Sheare/SocialResigter/Social";
import useApi from "../../AuthApi/useApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const [visible, setVisible] = useState(true);
  const [errorText, setErrorText] = useState("");
  const { createUserWithEmail } = useApi();
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    setErrorText("");
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const userData = {
      email,
      name,
      photo,
      password,
    };
    // console.log(userData);
    if (password.length < 6) {
      setErrorText("Your password must be at least 6 characters");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setErrorText("Your password must contain at least one capital letter");
      return;
    } else {
      if (!/(?=.*[!#$%&? "])/.test(password)) {
        setErrorText(
          "Your password must contain at least one Special characters"
        );
        return;
      }
    }
    createUserWithEmail(email, password)
      .then((res) => {
        // console.log(res.user)
        updateProfile(res.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userData),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  toast.success("your signup successful", {
                    position: toast.POSITION.TOP_RIGHT,
                  });
                }
                navigate("/");
                // console.log(data);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        if(error){
          setErrorText(
            "This email already in use"
          );
        }
      });
  };
  return (
    <div>
      <Helmet>
      <title>SignUp || TidalWave</title>
      </Helmet>
      <ToastContainer />
      <div className="hero min-h-screen">
        <div className="hero-content w-full flex-col">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Sign Up now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
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
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="full name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered"
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
                  Sign Up
                </button>
              </div>
            </form>
            <div className="px-8 pb-8">
              <Social></Social>
              <p className="text-center mt-6">
                Already a Member?{" "}
                <Link
                  to={"/login"}
                  className="text-orange-400 hover:text-green-600"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
