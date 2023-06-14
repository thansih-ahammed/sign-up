import React from "react";

export default function SignUp() {
  return (
    <section className="h-screen justify-center items-center bg-gradient-to-br from-blue-500 to-green-500  grid  grid-cols-1 sm:grid-cols-2  gap-2">
      {/* Container */}

      <div className="max-w-2xl mx-auto p-[50px] bg-transparent shadow-2xl">
        {/* LeftContainer */}

        <h1 className="text-3xl text-white  sm:max-w-md font-bold">Get in Touch</h1>
        <p className=" text-white font-extralight mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          reiciendis mollitia velit eveniet tempora praesentium quod molestias
          illum voluptatem beatae sit id in doloribus sint voluptatibus ipsum
          iure cum dignissimos.
        </p>
      </div>

      <div className="max-w-sm  mx-auto p-5">
        {/* Signup */}
        <h2 className="text-2xl text-white font-bold mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1">
              Name:
            </label>
            <input 
              type="text"
              id="name"
              className="w-full px-3 py-2 border bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              pattern="[A-Za-z ]+"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dob" className="block font-medium mb-1">
              Date of Birth:
            </label>
            <input
              type="date"
              id="dob"
              className="w-full px-3 py-2 border bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="class" className="block font-medium mb-1">
              Class:
            </label>
            <select
              id="class"
              className="w-full px-3 py-2 border bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
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
            <label htmlFor="division" className="block font-medium mb-1">
              Division:
            </label>
            <select
              id="division"
              className="w-full px-3 py-2 border bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Division</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>
          <div className="mb-4">
            <p className="block font-medium mb-1">Gender:</p>
            <div className="flex items-center">
              <input
                type="radio"
                id="male"
                name="gender"
                className="mr-2"
                required
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="female"
                name="gender"
                className="mr-2"
                required
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-transparent  border  text-white py-2 px-4 rounded-md hover:bg-green-400"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
