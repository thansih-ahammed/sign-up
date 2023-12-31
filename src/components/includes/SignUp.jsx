<<<<<<< HEAD
import React, { useState } from "react";
import Swal from 'sweetalert2';
import axios from 'axios';


export default function SignUp() {

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    class: "",
    division: "",
    gender: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, date, class: selectedClass, division, gender } = formData;
  
    try {
      // Send POST request to server
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts/1/comments', {
        name,
        date,
        class: selectedClass,
        division,
        gender,
      });
  
      // Handle success response
      console.log(response.data); // Log the response data
  
      // Show success popup
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Form submitted successfully!',
        confirmButtonText: 'OK',
      }).then(() => {
        // Do something after the user clicks "OK" in the success popup
        // For example, you can redirect the user to another page
        window.location.href = '/thank-you-page';
      });
    } catch (error) {
      // Handle error response
      console.error(error);
  
      // Show error popup
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred. Please try again.',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <section className="  sm:h-screen px-4 items-center bg-gradient-to-br from-blue-500 to-green-500 flex flex-wrap justify-around  ">
      {/* Container */}
      <div className="sm:max-w-xl  sm:p-[50px] p-5 bg-transparent sm:shadow-2xl">
        {/* LeftContainer */}
        <h1 className="text-3xl text-white mx-auto sm:max-w-md font-bold">
          Get in Touch
        </h1>
        <p className="text-white mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          reiciendis mollitia velit eveniet tempora praesentium quod molestias
          illum voluptatem beatae sit id in doloribus sint voluptatibus ipsum
          iure cum dignissimos.
        </p>
      </div>
      <div className="w-full sm:max-w-lg p-5">
        {/* Signup */}
        <h2 className="text-2xl text-white font-bold mb-6">Sign Up</h2>
        <form  onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
            value={formData.name}
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border-b bg-transparent focus:outline-none placeholder:text-black"
              pattern="[A-Za-z ]+"
              required
              onChange={(e)=> setFormData({...formData,name:e.target.value})}
=======
import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { updateUserData } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post("https://traveller.talrop.works/api/v1/auth/register/", {
        email,
        password,
        name,
      })
      .then((res) => {
        let data = res.data;
        console.log(data);
        if (data.StatusCode === 6000) {
          localStorage.setItem("user_login_data", JSON.stringify(data));
          updateUserData({ type: "LOGIN", payload: data });
          navigate("/main");
        } else {
          setMessage(data.message);
        }
      });
  };

  return (
    <section className="h-screen px-4 items-center bg-gradient-to-br from-blue-500 to-green-500 flex flex-wrap justify-around">
      <div className="w-full sm:max-w-lg p-5">
        <h2 className="text-2xl text-white font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              value={name}
              placeholder="Name"
              type="text" // Updated input type to "text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border-b bg-transparent focus:outline-none"
              required
              onChange={(e) => setName(e.target.value)}
>>>>>>> ae0ad83e45413263bd8b5d73ff5d8ca223ab1be7
            />
          </div>
          <div className="mb-4">
            <input
<<<<<<< HEAD
             value={formData.date}
              type="date"
              id="dob"
              className="w-full px-3 py-2 border-b bg-transparent focus:outline-none "
              required
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <select
              value={formData.class}
              id="class"
              className="w-full px-3 py-2 border-b bg-transparent focus:outline-none  custom-select"
              required
              onChange={(e) =>
                setFormData({ ...formData, class: e.target.value })
              }
            >
              <option value="">Select Class</option>
              <option value="I">I</option>
              <option value="II">II</option>
              <option value="III">III</option>
              <option value="IV">IV</option>
              <option value="V">V</option>
              <option value="VI">VI</option>
              <option value="VII">VII</option>
              <option value="VIII">VIII</option>
              <option value="IX">IX</option>
              <option value="X">X</option>
              <option value="XI">XI</option>
              <option value="XII">XII</option>
            </select>
          </div>
          <div className="mb-4">
            <select
              value={formData.division}
              id="division"
              className="w-full px-3 py-2 border-b bg-transparent focus:outline-none  custom-select"
              required
              onChange={(e) =>
                setFormData({ ...formData, division: e.target.value })
              }
            >
              <option value="">Select Division</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
          <div className="mb-4">
            <p className="block font-medium mb-1 ">Gender:</p>
            <div className="flex items-center">
              <input
                type="radio"
                id="male"
                value="male"
                name="gender"
                className="mr-2"
                required
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="female"
                value="female"
                name="gender"
                className="mr-2"
                required
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />
              <label htmlFor="female">Female</label>
            </div>
=======
              value={email}
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border-b bg-transparent focus:outline-none"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              value={password}
              placeholder="Password"
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border-b bg-transparent focus:outline-none"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
>>>>>>> ae0ad83e45413263bd8b5d73ff5d8ca223ab1be7
          </div>
          <button
            type="submit"
            className="w-full bg-transparent border py-2 px-4 rounded-md hover:bg-green-400"
          >
<<<<<<< HEAD
            Submit
          </button>
        </form>
=======
            Sign Up
          </button>
        </form>
        <p className="text-white mt-4">
          Already have an account? <Link to="/auth/login/">Log in</Link>
          {message && (
            <small className="text-sm text-red-600 mb-[25px] items-center">
              {message}
            </small>
          )}
        </p>
>>>>>>> ae0ad83e45413263bd8b5d73ff5d8ca223ab1be7
      </div>
    </section>
  );
}
