import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'https://real-estate-server-lilac.vercel.app/'
})

const UseeAxiosSecure = () => {
    return axiosSecure;
};

export default UseeAxiosSecure;