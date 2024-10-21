import React, { useEffect } from "react";
import Loading from "../Components/Loading";
import Backbutton from "../Components/Backbutton";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/admin/adminSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AllUsers = () => {
  const { users, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.admin
  );
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError && message) {
      toast.error(message);
    }
  }, [isError, message]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getUsers());
    }
  }, [user]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="container p-5">
        <Backbutton url={"/"} />
        <div className="txt">
          <h1 className="text-center">All Users</h1>
        </div>
        <table class="table m-3">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
            {users?.map((users, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{users?.name}</td>
                  <td>{users?.email}</td>
                </tr>
              );
            })}
          </thead>
          <tbody>
            <tr>
              {/* <td colSpan="6" className="text-center">
                No data available 😴
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllUsers;
