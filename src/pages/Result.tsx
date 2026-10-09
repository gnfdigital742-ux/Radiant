function Result() {
  return (
    <div className="min-h-screen bg-white">

      {/* ================= PAGE HEADER ================= */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">

          <p className="font-bold uppercase tracking-[3px] text-blue-700">
            Student Results
          </p>

          <h1 className="mt-4 text-5xl font-extrabold text-gray-900 md:text-6xl">
            Check Your{" "}
            <span className="text-blue-700">
              Result
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Enter your student information below to access your
            academic result.
          </p>

        </div>
      </section>


      {/* ================= RESULT FORM ================= */}
      <section className="py-24">

        <div className="mx-auto max-w-3xl px-6 lg:px-8">

          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl md:p-12">

            {/* ICON */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-4xl">
              📊
            </div>

            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Student Result Portal
            </h2>

            <p className="mt-2 text-center text-gray-600">
              Enter your details to view your result.
            </p>


            <form className="mt-10">

              {/* STUDENT ID */}
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Student ID
                </label>

                <input
                  type="text"
                  placeholder="Enter your student ID"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />
              </div>


              {/* SESSION */}
              <div className="mt-6">

                <label className="mb-2 block font-semibold text-gray-700">
                  Academic Session
                </label>

                <select
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">
                    Select academic session
                  </option>

                  <option>
                    2025/2026
                  </option>

                  <option>
                    2026/2027
                  </option>

                  <option>
                    2027/2028
                  </option>
                </select>

              </div>


              {/* TERM */}
              <div className="mt-6">

                <label className="mb-2 block font-semibold text-gray-700">
                  Term
                </label>

                <select
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">
                    Select term
                  </option>

                  <option>
                    First Term
                  </option>

                  <option>
                    Second Term
                  </option>

                  <option>
                    Third Term
                  </option>
                </select>

              </div>


              {/* CHECK RESULT BUTTON */}
              <button
                type="submit"
                className="mt-8 w-full rounded-lg bg-blue-700 px-6 py-4 font-bold text-white shadow-lg transition hover:bg-blue-800"
              >
                Check Result
              </button>

            </form>


            {/* INFORMATION */}
            <div className="mt-8 rounded-xl bg-blue-50 p-5">

              <div className="flex gap-3">

                <div className="text-xl">
                  ℹ️
                </div>

                <p className="text-sm leading-6 text-gray-600">
                  Please make sure your Student ID, academic session,
                  and term are correct before checking your result.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= RESULT FEATURES ================= */}
      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="font-bold uppercase tracking-[3px] text-blue-700">
              Result Portal
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-gray-900">
              Easy Access to Academic Results
            </h2>

          </div>


          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {/* FEATURE 1 */}
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">

              <div className="text-5xl">
                🔐
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Secure
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Student results should only be accessible to
                authorized users.
              </p>

            </div>


            {/* FEATURE 2 */}
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">

              <div className="text-5xl">
                ⚡
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Fast
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Access academic information quickly through the
                online result portal.
              </p>

            </div>


            {/* FEATURE 3 */}
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">

              <div className="text-5xl">
                📱
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Mobile Friendly
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                The result portal can be accessed from phones,
                tablets, and computers.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= HELP SECTION ================= */}
      <section className="bg-blue-700 py-16">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Having Trouble Checking Your Result?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            If you are having problems accessing your result,
            please contact the school administration.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-block rounded-lg bg-white px-7 py-4 font-bold text-blue-700 shadow-lg transition hover:-translate-y-1"
          >
            Contact School →
          </a>

        </div>

      </section>

    </div>
  );
}

export default Result;