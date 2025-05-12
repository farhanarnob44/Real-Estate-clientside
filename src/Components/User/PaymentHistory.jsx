import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import UseeAxiosSecure from "../UseeAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../SectionTitle";
import { FaTrash } from "react-icons/fa6";
import { format } from "date-fns";


const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiousSecure = UseeAxiosSecure();
  const [list, setList] = useState([]);

  const { data: payments } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiousSecure.get("/payments");
      const paymentList = res.data.filter((item) => item.email === user.email);
      setList(paymentList);
    },
  });
  console.log(list);

  return (
    <div>
      <div>
        <SectionTitle
          heading="Payment History"
          subHeading="Check Up "
        ></SectionTitle>
        <h2 className="text-3xl ml-9 ">Total properties : {list.length}</h2>
        <div className="overflow-x-auto w-10/12 mx-auto mt-8">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>History</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {list.map((menuItem, index) => (
                <tr key={menuItem._id}>
                  <th>{index + 1}</th>
                  <td className="flex font-bold items-center">
                    <img
                      className="w-16 h-16 rounded-lg mr-3"
                      src={menuItem.propertyImage}
                      alt=""
                    />
                    <h1 className="text-xl">You have Successfully bought <span className="text-green-500">{menuItem.propertyTitle}</span> and your transactionId is : <span className="text-green-600">{menuItem.transactionId}</span></h1>
                  </td>
                  <td>
                    <h1>{format(new Date(menuItem.date), "PPpp")}</h1>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
