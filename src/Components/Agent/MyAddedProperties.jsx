import React, { useContext, useState } from 'react';
import { GrDocumentUpdate } from "react-icons/gr";
import UseeAxiosSecure from '../UseeAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Provider/AuthProvider';
import SectionTitle from '../SectionTitle';
import { Link } from 'react-router-dom';
import UpdateProperties from './UpdateProperties';

const MyAddedProperties = () => {

    const {user} = useContext(AuthContext)
    // console.log(user.email)

      const axiosSecure = UseeAxiosSecure();
    
      const [menu, setMenu] = useState([]);
      const { refetch } = useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
          const res = await axiosSecure.get("/allproperties");
          const emails = res.data.map(item => item.agentEmail);
          // console.log(emails)
          // console.log(user.email)
          // console.log(res.data)
          const myAddedData = res.data.filter((item) => item.agentEmail === user.email);
          setMenu(myAddedData)

          console.log(emails)

           return (myAddedData);
           
        //   console.log(menu)
        },
      });
      

      // console.log(menu)


      const handleUpdateProduct = (menuItem) => {
        // console.log(menuItem._id)

        UpdateProperties(menuItem);
      }


    return (
      <div>
      <SectionTitle
        heading="Manage All Items"
        subHeading="Hurry Up "
      ></SectionTitle>
      <h2 className="text-3xl ml-9 ">Total properties : {menu.length}</h2>
      <div className="overflow-x-auto w-10/12 mx-auto mt-8">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu.map((menuItem, index) => (
              <tr key={menuItem._id}>
                <th>{index + 1}</th>
                <td className="flex font-bold items-center">
                  <img
                    className="w-12 h-12 rounded-lg mr-3"
                    src={menuItem.propertyImage}
                    alt=""
                  />
                  {menuItem.propertyTitle}
                 
                </td>
                <td>{menuItem.priceRange}</td>
                <td>{menuItem.propertyLocation}</td>
                {/* <td>
                          {" "}
                          {menu.role === 'admin' ? 'Admin' :
                            <buTton
                              // onClick={() => handleMakeAdmin(menu)}
                              className="btn"
                            >
                              
                            </buTton>
                          }
                        </td> */}
                <td>
                  <Link to="/dashboard/updateProperties"
                    // onClick={() => handleUpdateProduct(menuItem)}
                    state={{ menuItem }} 
                    className="btn"
                  >
                    <h1>Udpdate</h1>
                    <GrDocumentUpdate />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyAddedProperties;