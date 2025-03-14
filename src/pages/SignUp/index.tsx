"use client";

export default function ResponsiveSignup() {
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
            Sign Up
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400">
            And lets get started with your free trial
          </p>
          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                User name
              </label>
              <input
                type="text"
                className="mt-1 w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-700"
                placeholder="User Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                className="mt-1 w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-700"
                placeholder="Email"
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
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Confirm Password
              </label>
              <input
                type="password"
                className="mt-1 w-full p-3 border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-700"
                required
              />
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg mt-4 transition-all">
              Sign Up
            </button>

            <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Sign in
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
