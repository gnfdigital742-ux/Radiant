function Login() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= PAGE HEADER ================= */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">

          <p className="font-bold uppercase tracking-[3px] text-blue-700">
            Student Portal
          </p>

          <h1 className="mt-4 text-5xl font-extrabold text-gray-900 md:text-6xl">
            Welcome{" "}
            <span className="text-blue-700">
              Back
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-gray-600">
            Sign in to access your Radiat Model Academy account.
          </p>

        </div>
      </section>


      {/* ================= LOGIN FORM ================= */}
      <section className="py-20">

        <div className="mx-auto max-w-md px-6">

          <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">

            {/* LOGO */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-700 text-3xl font-bold text-white">
              R
            </div>

            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign In
            </h2>

            <p className="mt-2 text-center text-gray-500">
              Access your school portal
            </p>


            <form className="mt-8">

              {/* EMAIL */}
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />
              </div>


              {/* PASSWORD */}
              <div className="mt-6">

                <div className="mb-2 flex items-center justify-between">

                  <label className="font-semibold text-gray-700">
                    Password
                  </label>

                  <a
                    href="#"
                    className="text-sm font-semibold text-blue-700 hover:text-blue-800"
                  >
                    Forgot Password?
                  </a>

                </div>

                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* REMEMBER ME */}
              <div className="mt-5 flex items-center gap-2">

                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 accent-blue-700"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-gray-600"
                >
                  Remember me
                </label>

              </div>


              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="mt-7 w-full rounded-lg bg-blue-700 px-6 py-4 font-bold text-white shadow-lg transition hover:bg-blue-800"
              >
                Login
              </button>

            </form>


            {/* REGISTER */}
            <div className="mt-7 text-center">

              <p className="text-gray-600">
                Don't have an account?
              </p>

              <a
                href="/admission"
                className="mt-1 inline-block font-bold text-blue-700 hover:text-blue-800"
              >
                Apply for Admission
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SECURITY INFORMATION ================= */}
      <section className="bg-white py-16">

        <div className="mx-auto max-w-5xl px-6">

          <div className="rounded-2xl bg-blue-50 p-8 text-center">

            <div className="text-4xl">
              🔐
            </div>

            <h2 className="mt-4 text-2xl font-bold text-gray-900">
              Your Information Is Important
            </h2>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-600">
              Please keep your login details private. Never share your
              password with anyone you do not trust.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section className="bg-blue-700 py-16">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Need Help?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            If you are having trouble accessing your account,
            contact Radiat Model Academy.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-block rounded-lg bg-white px-7 py-4 font-bold text-blue-700 shadow-lg transition hover:-translate-y-1"
          >
            Contact Us →
          </a>

        </div>

      </section>

    </div>
  );
}

export default Login;