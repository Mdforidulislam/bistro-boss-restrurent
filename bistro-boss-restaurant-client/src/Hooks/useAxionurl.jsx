import axios from "axios";


const instance = axios.create({
    baseURL:'http://localhost:5000'
})

const useAxionurl = () => {
  
    return instance;
};

export default useAxionurl;