import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000/'
})

const UseeAxiosSecure = () => {
    return axiosSecure;
};

export default UseeAxiosSecure;