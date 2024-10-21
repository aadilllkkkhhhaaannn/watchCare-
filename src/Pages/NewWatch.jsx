import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addComplaint } from "../features/auth/Watch/watchSlice";
import { toast } from "react-toastify";
import Loading from "../Components/Loading";
import Backbutton from "../Components/Backbutton";

const NewWatch = () => {
  const { user } = useSelector((state) => state.auth);

  const { watchName, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.watch
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    watch: "",
    registration: "",
    description: "",
  });
  const { watch, description, registration } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    toast.success("Complaint Raised!", {
      position: "top-center",
      theme: "colored",
      theme: "dark",
    });
    // console.log(formData);
    e.preventDefault();
    dispatch(addComplaint(formData));
    navigate("/watches");
  };

  // const navigate = useNavigate();
  // const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    // isSuccess(navigate("/watches"));
    if (!user) {
      return navigate("/login");
    }

    // dispatch(getComplaints());
  }, [user]);

  // useEffect(() => {
  //   if (watchName) {
  //     navigate("/watches");
  //   }
  if (isError && message) {
    toast.error(message);
  }
  // }, [watchName, isError, isSuccess, message]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="container p-5">
        <Backbutton />
        <div className="rsd">
          <h1 className="text-center">Raise Your Complaint!</h1>
        </div>
        <div className="card p-3 my-3">
          <input
            name="name"
            className="form-control my-1"
            disabled
            required
            value={user?.name}
            type="text"
          />
          <input
            name="email"
            required
            className="form-control my-1"
            disabled
            value={user?.email}
            type="text"
          />
          <form onSubmit={handleSubmit}>
            <select
              className="form-select my-1"
              name="watch"
              value={watch}
              onChange={handleChange}
            >
              <option defaultValue={"#"}>Select Your Watch</option>
              <option value="Patek Philippe Grandmaster Chime">
                Patek Philippe Grandmaster Chime
              </option>
              <option value="Jacob & Co. Billionaire Watch">
                Jacob & Co. Billionaire Watch
              </option>
              <option value="Breguet Grande Complication Marie-Antoinette">
                Breguet Grande Complication Marie-Antoinette
              </option>
              <option value="Graff Diamonds Hallucination">
                Graff Diamonds Hallucination
              </option>
              <option value="Rolex Paul Newman Daytona">
                Rolex Paul Newman Daytona
              </option>
              <option value="Chopard 201-Carat Watch">
                Chopard 201-Carat Watch
              </option>
            </select>
            <input
              type="text"
              className="form-control my-1"
              placeholder="Enter Registration Number"
              value={registration}
              name="registration"
              onChange={handleChange}
            />
            <textarea
              value={description}
              name="description"
              onChange={handleChange}
              placeholder="Enter Your Issue"
              required
              className="form-control my-1"
            ></textarea>
            <button
              onClick={(e) => handleSubmit(e)}
              className="btn btn-dark my-2 w-100"
            >
              Raise Complaint
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewWatch;
