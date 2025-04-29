import React, { useContext } from 'react';
import UseeAxiosSecure from './UseeAxiosSecure';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {


    const {user} = useContext(AuthContext);
   
    const axiosSecure = UseeAxiosSecure();
    const {data : role , isLoading} = useQuery({
        queryKey: ['role', user?.email ],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/users/role/${user.email}`)
            
            return data.role;
        }
    })
    return [role, isLoading]
    
};

export default useRole;