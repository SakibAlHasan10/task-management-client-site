import axios from "axios";

const axiosPrivate = axios.create({
  baseURL: "http://localhost:5000", withCredentials:true
});

const usePrivate = () => {
    return axiosPrivate;
    
};

export default usePrivate;