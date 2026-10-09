function Admission() {
  return (
    <div className="min-h-screen bg-white">

      {/* ================= PAGE HEADER ================= */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-24">

        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">

          <p className="font-bold uppercase tracking-[3px] text-blue-700">
            Admissions
          </p>

          <h1 className="mt-4 text-5xl font-extrabold text-gray-900 md:text-6xl">
            Join{" "}
            <span className="text-blue-700">
              Radiat Model Academy
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Give your child the opportunity to learn, grow, and
            prepare for a bright and successful future.
          </p>

        </div>

      </section>


      {/* ================= ADMISSION CONTENT ================= */}
      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-3 lg:px-8">

          {/* LEFT INFORMATION */}
          <div className="lg:col-span-1">

            <p className="font-bold uppercase tracking-[3px] text-blue-700">
              Admission Process
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
              How to Apply
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Follow these simple steps to begin your child's
              admission process at Radiat Model Academy.
            </p>


            {/* STEP 1 */}
            <div className="mt-8 flex gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
                1
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  Complete the Form
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Fill in the student's information in the application
                  form.
                </p>
              </div>

            </div>


            {/* STEP 2 */}
            <div className="mt-7 flex gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
                2
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  Submit Application
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Review the information and submit your application.
                </p>
              </div>

            </div>


            {/* STEP 3 */}
            <div className="mt-7 flex gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
                3
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  School Review
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Our admission team will review your application.
                </p>
              </div>

            </div>


            {/* STEP 4 */}
            <div className="mt-7 flex gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 font-bold text-white">
                4
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  Admission Confirmation
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Successful applicants will receive admission
                  information from the school.
                </p>
              </div>

            </div>

          </div>


          {/* APPLICATION FORM */}
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl lg:col-span-2 md:p-10">

            <h2 className="text-3xl font-extrabold text-gray-900">
              Admission Application
            </h2>

            <p className="mt-2 text-gray-600">
              Please provide the student's information below.
            </p>


            <form className="mt-8">

              {/* STUDENT NAME */}
              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block font-semibold text-gray-700">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                  />
                </div>


                <div>
                  <label className="mb-2 block font-semibold text-gray-700">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

              </div>


              {/* EMAIL + PHONE */}
              <div className="mt-6 grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block font-semibold text-gray-700">
                    Parent/Guardian Email
                  </label>

                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                  />
                </div>


                <div>
                  <label className="mb-2 block font-semibold text-gray-700">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

              </div>


              {/* DATE + CLASS */}
              <div className="mt-6 grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block font-semibold text-gray-700">
                    Date of Birth
                  </label>

                  <input
                    type="date"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                  />
                </div>


                <div>
                  <label className="mb-2 block font-semibold text-gray-700">
                    Class Applying For
                  </label>

                  <select
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">Select class</option>
                    <option>Nursery</option>
                    <option>Primary 1</option>
                    <option>Primary 2</option>
                    <option>Primary 3</option>
                    <option>Primary 4</option>
                    <option>Primary 5</option>
                    <option>Primary 6</option>
                    <option>JSS 1</option>
                    <option>JSS 2</option>
                    <option>JSS 3</option>
                    <option>SS 1</option>
                    <option>SS 2</option>
                    <option>SS 3</option>
                  </select>
                </div>

              </div>


              {/* ADDRESS */}
              <div className="mt-6">

                <label className="mb-2 block font-semibold text-gray-700">
                  Home Address
                </label>

                <textarea
                  rows={4}
                  placeholder="Enter home address"
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* BUTTON */}
              <button
                type="submit"
                className="mt-8 w-full rounded-lg bg-blue-700 px-6 py-4 font-bold text-white shadow-lg transition hover:bg-blue-800"
              >
                Submit Application
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* ================= INFORMATION ================= */}
      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-3xl font-extrabold text-gray-900">
            Need Help With Admission?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            If you have questions about the admission process,
            please contact the school administration for assistance.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-block rounded-lg bg-blue-700 px-7 py-4 font-semibold text-white transition hover:bg-blue-800"
          >
            Contact the School →
          </a>

        </div>

      </section>

    </div>
  );
}

export default Admission;