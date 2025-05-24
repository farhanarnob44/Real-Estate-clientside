import axios from 'axios';
import React from 'react';

const axiosPublic = axios.create({
    baseURL: 'https://real-estate-server-lilac.vercel.app/'
})

const UseeAxiosPublic = () => {
    return axiosPublic;
};

export default UseeAxiosPublic;