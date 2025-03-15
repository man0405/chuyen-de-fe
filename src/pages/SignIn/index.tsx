"use client";

export default function ResponsiveLogin() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="flex flex-col lg:flex-row w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        {/* Left Section - Login Form */}
        <div className="w-full lg:w-1/2 p-8">
          <div className="text-center mb-6">
            <img
              src="/assets/images/logo-light-streamline.png"
              alt="Brand Logo"
              className="mx-auto dark:filter dark:invert w-24"
            />
          </div>
          <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">
            Welcome Back!
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400">
            Please enter your credentials to sign in!
          </p>
          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                className="mt-1 w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-700"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                className="mt-1 w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-700"
                required
              />
            </div>
            <div className="flex justify-between items-center text-sm">
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Forgot password?
              </a>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg mt-4 transition-all">
              Sign In
            </button>
            <div className="my-4 text-center text-gray-600 dark:text-gray-300">
              or continue with
            </div>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center px-6 py-3 border rounded-lg shadow-sm bg-white dark:bg-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition text-lg w-full sm:w-1/2">
                <img
                  src="/assets/images/google.png"
                  alt="Google"
                  className="mr-3 w-6 h-6 border rounded-full"
                />
                Google
              </button>
              <button className="flex items-center px-6 py-3 border rounded-lg shadow-sm bg-white dark:bg-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition text-lg w-full sm:w-1/2">
                <img
                  src="/assets/images/github.png"
                  alt="GitHub"
                  className="mr-3 w-6 h-6 border rounded-full"
                />
                GitHub
              </button>
            </div>
            <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </div>
        {/* Right Section - Image (Hidden on Small Screens) */}
        <div className="w-full lg:w-1/2 hidden lg:flex items-center justify-center bg-gray-200 dark:bg-gray-800">
          <img
            src="/assets/images/close-up-hous.png"
            alt="Brand Logo"
            className="rounded-lg w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
