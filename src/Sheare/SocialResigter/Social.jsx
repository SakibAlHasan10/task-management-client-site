import { FaGoogle, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/AuthApi/useApi";
const Social = () => {
  const {createAccountWithGoogle, createAccountWithGitHub} = useApi()
  const navigate = useNavigate()
  const handleLoginWithGoogle =()=>{
    createAccountWithGoogle()
    .then(result =>{
      // console.log(result.user)
      result && navigate('/dashboard')
    })
    .catch(error=>{
      console.error(error)
    })
  }
  const handleLoginWithGitHub =()=>{
    createAccountWithGitHub()
    .then(result =>{
      console.log(result.user)
      navigate('/dashboard')
    })
    .catch(error=>{
      console.error(error)
    })
  }
  return (
    <div>
      <div className="flex items-center">
        <span className="w-full border-b-2"></span>
        <span className="px-2 py-1 rounded-md text-md m-2 border-2">or</span>
        <span className="w-full border-b-2"></span>
      </div>
      <div className="flex justify-center mt-6 gap-6">
        <button onClick={handleLoginWithGoogle}>
          <FaGoogle className="text-3xl border-2 p-3 rounded-full text-white bg-red-500 w-12 h-12" />
        </button>
        <button onClick={handleLoginWithGitHub}>
          <FaGithub className="text-3xl border-2 p-3 rounded-full text-white bg-black w-12 h-12" />
        </button>
      </div>
    </div>
  );
};

export default Social;
