import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UseeAxiosSecure from "./UseeAxiosSecure";

const UseeAdmin = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseeAxiosSecure();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/role/${user.email}`);
      console.log(res.data);
      return res.data?.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default UseeAdmin;
