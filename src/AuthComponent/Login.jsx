import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <section className="h-[100%] w-[100%]  bg-amber-500 flex justify-center items-center">
      <article className="h-[500px] w-[400px] bg-white rounded-md shadow-md p-[20px]">
        <header>
          <h1 className="text-center text-3xl m-2">Login</h1>
        </header>
        <main>
          <form action="" className="flex flex-col gap-3 ">
            <div className=" flex gap-1 flex-col">
              <label htmlFor="">
                Username
              </label>
              <input
                type="text"
                name=""
                id=""
                className="border-2 w-[100%] py-[7px] rounded-[7px] outline-none border-[#eee] p-4"
              />
            </div>
           {/* <div className=" flex gap-1 flex-col">
              <label htmlFor="">
                UserEmail:
              </label>
              <input
                type="email"
                name=""
                id=""
                className="border-2 w-[100%] py-[7px] rounded-[7px] outline-none border-[#eee] p-4"
              />
            </div> */}
            <div className=" flex gap-1 flex-col">
              <label htmlFor="">
                password
              </label>
              <input
                type="password"
                name=""
                id=""
                className="border-2 w-[100%] py-[7px] rounded-[7px] outline-none border-[#eee]"
              />
            </div>
           
           <div> 
             <button  className="w-[100%] bg-[#2666fc]  text-[white] py-[7px] rounded-md cursor-pointer bg-[#0b52f8]">Login</button>
           </div>
          </form>
        </main>
        <footer className="mt-[10px] cursor-pointer m-2">
          <NavLink to={"/Register"}>Don't have any account?</NavLink>
          <NavLink  className="m-4" to={"/resetpassword"}> Reset password </NavLink>
        </footer>
      </article>
    </section>
  );
};

export default Login;
