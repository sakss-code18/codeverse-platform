function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-5">

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center">
          Welcome Back!!
        </h1>

        <p className="text-center text-gray-600 mt-3">
          Login to continue your coding journey
        </p>


        <form className="mt-8">

          <div className="mb-5">

            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

          </div>


          <div className="mb-5">

            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

          </div>


          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600"
          >
            Login
          </button>


        </form>


        <p className="text-center mt-6 text-gray-600">

          Don't have an account?

          <span className="text-orange-500 font-semibold ml-1 cursor-pointer">
            Sign Up
          </span>

        </p>


      </div>

    </div>
  );
}

export default Login;