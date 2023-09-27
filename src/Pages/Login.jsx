import React from "react";
import poster from "../assets/Login_page/postergif.gif";
import posterlight from "../assets/Login_page/posterlightgif.gif";
import { useContext } from "react";
import gsap from "gsap";
import Context from "../context/Context";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Wrapper , Loading} from "../Components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { set } from "mongoose";

const Login = () => {
  const { isdark , islogin, setislogin , setUser } = useContext(Context);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Username, setUsername] = useState("");
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    gsap.fromTo(".auth", {x:400 , opacity : 0},{x : 0 , opacity: 100 , duration : 2 , ease : "power3.out" , stagger : 0.25});
  }, [islogin])

  const login = async () => {
    if (Email === "" || Password === "") {
      alert("Please fill all the fields");
    } else {
      try {
        setloading(true);
        const res = await fetch(
          "https://ewfl-backend-hemant2335.vercel.app/user/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: Email, password: Password }),
          }
        );

        const data = await res.json();
        console.log(data?.user);
        setloading(false);
        if (data?.message === "Authentication successful") {
          setUser(data?.user);
          sessionStorage.setItem("user", data?.user?._id);
          navigate("/");
        } else {
          alert("Invalid Credentials");
        }
      } catch (error) {
        alert("Internal Server Error");
      }
    }
  };

  const Register = async () => {
    if (Email === "" || Password === "") {
      alert("Please fill all the fields");
    } else {
      try {
        setloading(true);
        const res = await fetch(
          "https://ewfl-backend-hemant2335.vercel.app/user/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({username : Username ,email: Email, password: Password }),
          }
        );
    
        const data = await res.json();
        setloading(false);
        if (data?.message === "User created successfully") {
          alert("User Created Successfully")
          setislogin(true)
        } else {
          alert("Username or Email already exists");
        }
      } catch (error) {
        setloading(false);
        alert("Username or Email already exists");
      }
    }
    
  }

  return (
    <Wrapper>
      {loading && <Loading />}
      <div className="flex py-4 md:px-[8vw] justify-center ">
        <div className="w-[80vw] h-[85vh]  z-10 md:flex hidden">
          <img
            src={isdark ? poster : posterlight}
            alt=""
            className=" object-cover  "
          />
        </div>

        {/* Login Cred */}
        {islogin ? (<div className="auth w-full h-fit flex flex-col items-center shadow-3xl p-[5vh]  rounded-xl">
          <div>
            <h1 className="mt-[5vh] font-montserrat font-bold text-3xl ">
              Welcome back!
            </h1>
            <p className=" font-montserrat font-light text-center">
              Please enter your details
            </p>
          </div>

          <div className="flex flex-col items-center mt-[8vh] gap-[2vh] md:w-fit  w-full ">
            
            <div className=" border-b-2 md:w-[60vh]  flex w-[45vh]">
              <input
                type="email"
                className=" mt-2 w-full rounded-lg py-4 font-montserrat  font-medium  md:w-[60vh]"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
              />
            </div>
            <div className=" border-b-2 md:w-[60vh] flex w-[45vh]">
              <input
                type="password"
                className=" mt-2 w-full rounded-lg  py-4 font-montserrat  font-medium md:w-[60vh]"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
              />
            </div>
            <div className="w-full mt-[1vh] justify-between flex">
              <button
                className=" font-montserrat font-medium text-gray-600  hover:text-[#01796f] hover:scale-105 transition-transform"
              >
                Forgot Password?
              </button>
              <button
                className=" font-montserrat font-medium text-gray-600  hover:text-[#01796f] hover:scale-105 transition-transform"
                onClick={() => {setislogin(false)}}
              >
                Not a User? Register
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-[2vh] w-full md:px-[20vh] px-[5vh] mt-[8vh]">
            <button
              className="text-md w-full font-poppins font-medium  shadow-3xl p-3 rounded-xl hover:bg-[#01796f] hover:scale-105 transition-transform"
              onClick={() => login()}
            >
              Log in
            </button>
            <button className="text-md flex items-center justify-center gap-[2vh] w-full font-poppins font-medium  shadow-3xl p-3 rounded-xl hover:bg-red-400 hover:scale-105 transition-transform">
              <FcGoogle /> Log in with Google
            </button>
          </div>
        </div>) : (
        
        // Register
        
        <div className="auth w-full h-fit flex flex-col items-center shadow-3xl p-[5vh]  rounded-xl">
          <div>
            <h1 className="mt-[5vh] text-center font-montserrat font-bold text-3xl ">
              Register with Echakran
            </h1>
            <p className=" font-montserrat font-light text-center">
              Please fill your details to register
            </p>
          </div>

          <div className="flex flex-col items-center mt-[8vh] gap-[2vh] md:w-fit  w-full ">
          <div className=" border-b-2 md:w-[60vh]  flex w-[45vh]">
              <input
                type="text"
                className=" mt-2 w-full rounded-lg py-4 font-montserrat  font-medium  md:w-[60vh]"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="Username"
              />
            </div>
            <div className=" border-b-2 md:w-[60vh]  flex w-[45vh]">
              <input
                type="email"
                className=" mt-2 w-full rounded-lg py-4 font-montserrat  font-medium  md:w-[60vh]"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
              />
            </div>
            <div className=" border-b-2 md:w-[60vh] flex w-[45vh]">
              <input
                type="password"
                className=" mt-2 w-full rounded-lg  py-4 font-montserrat  font-medium md:w-[60vh]"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
              />
            </div>
            <div className="w-full mt-[1vh]">
            <button
                className=" font-montserrat font-medium text-gray-600  hover:text-[#01796f] hover:scale-105 transition-transform"
                onClick={() => {setislogin(true)}}
              >
                Already a User?
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-[2vh] w-full md:px-[20vh] px-[5vh] mt-[8vh]">
            <button
              className="text-md w-full font-poppins font-medium  shadow-3xl p-3 rounded-xl hover:bg-[#01796f] hover:scale-105 transition-transform"
              onClick={() => Register()}
            >
              Sign up
            </button>
            <button className="text-md flex items-center justify-center gap-[2vh] w-full font-poppins font-medium  shadow-3xl p-3 rounded-xl hover:bg-red-400 hover:scale-105 transition-transform">
              <FcGoogle /> Log in with Google
            </button>
          </div>
        </div>)}
        
      </div>
    </Wrapper>
  );
};

export default Login;
