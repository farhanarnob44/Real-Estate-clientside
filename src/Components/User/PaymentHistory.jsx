import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import UseeAxiosSecure from '../UseeAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {

    const {user} = useContext(AuthContext)
    const axiousSecure = UseeAxiosSecure();

    const { data : payments} = useQuery({
        queryKey:['payments' , user.email],
        queryFn: async () => {
            const res = await axiousSecure.get('/payments')
            const paymentList = 
            return res.data

        }
    })


    return (
        <div>
            <h1>This is payment history</h1>



        </div>
    );
};

export default PaymentHistory;