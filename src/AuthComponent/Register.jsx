import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiStreetView } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Register = () => {
  let initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  let [userData, setuserData] = useState(initialState);
  let { username, email, password, confirmPassword } = userData;

  let handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setuserData({ ...userData, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();

    if (password == confirmPassword) {
      let payLoad = {
        ...userData,
        emp_id: "1",
        isAuthenticated: false,
        userImage:
          "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
        address: {
          street: "",
          landmark: "",
          area: "",
          city: "",
          state: "",
          country: "",
          pincode: "",
        },
        dob: "",
        mobile: "",
        gender: "",
      };

      let resp = await axios.post("http://localhost:5000/users", payLoad);
      console.log(resp);

      toast.success("registered Successfully");
    } else {
      toast.error("Please match the Password");
    }
  };

  return (
    <section className="h-[90vh] w-[100vw] flex justify-center items-center ">
      <article className=" w-[400px] bg-white shadow-md rounded-md p-[20px]">
        <header>
          <h1 className="text-center text-[24px] font-semibold">Register</h1>
        </header>
        <main>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
          >
            <div className="flex gap-1 flex-col">
              <label htmlFor="">Username</label>
              <input
                type="text"
                className="border-2 text-black w-[100%] py-[7px] rounded-[7px] outline-none border-[#eee] px-[10px]"
                onChange={handleInputChange}
                name="username"
                value={username}
              />
            </div>
            <div className="flex gap-1 flex-col">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="border-2 text-black w-[100%] py-[7px] rounded-[7px] outline-none border-[#eee] px-[10px]"
                onChange={handleInputChange}
                name="email"
                value={email}
              />
            </div>
            <div className="flex gap-1 flex-col">
              <label htmlFor="">Password</label>
              <input
                type="text"
                className="border-2 text-black w-[100%] py-[7px] rounded-[7px] outline-none border-[#eee] px-[10px]"
                onChange={handleInputChange}
                name="password"
                value={password}
              />
            </div>
            <div className="flex gap-1 flex-col">
              <label htmlFor="">Confirm password</label>
              <input
                type="text"
                className="border-2 text-black w-[100%] py-[7px] rounded-[7px] outline-none border-[#eee] px-[10px]"
                onChange={handleInputChange}
                name="confirmPassword"
                value={confirmPassword}
              />
            </div>

            <div>
              <button className="w-[100%] bg-[#5454e9] text-[#eee] py-[7px] rounded-md cursor-pointer mt-[15px] hover:bg-[#2626fc] ">
                Submit
              </button>
            </div>
          </form>
        </main>

        <footer className="mt-[10px] cursor-pointer">
          <NavLink to={"/login"}>Already have an account ?</NavLink>
        </footer>
      </article>
    </section>
  );
};

export default Register;
