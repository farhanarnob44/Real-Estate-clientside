import React, { useContext } from 'react';
import UseeAxiosSecure from './UseeAxiosSecure';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    // const axiosSecure = UseeAxiosSecure();
    // const {user} = useContext(AuthContext);
    // const {data: role, isLoading} = useQuery({
    //     queryKey: ['role', user.email],
    //     queryFn: async() => {
    //         const {data} = await axiosSecure(`/users/role/${user.email}`)
    //         return data;
    //     }
    // })
    // return [role, isLoading]

    const {user} = useContext(AuthContext);
    const axiosSecure = UseeAxiosSecure ();
    const {data : isAdmin , isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
    
};

export default useRole;