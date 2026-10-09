function Contact() {
  return (
    <div className="min-h-screen bg-white">

      {/* ================= PAGE HEADER ================= */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">

          <p className="font-bold uppercase tracking-[3px] text-blue-700">
            Contact Us
          </p>

          <h1 className="mt-4 text-5xl font-extrabold text-gray-900 md:text-6xl">
            Get in{" "}
            <span className="text-blue-700">
              Touch
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Have a question about Radiat Model Academy?
            We would love to hear from you.
          </p>

        </div>
      </section>


      {/* ================= CONTACT CONTENT ================= */}
      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">

          {/* CONTACT INFORMATION */}
          <div>

            <p className="font-bold uppercase tracking-[3px] text-blue-700">
              Contact Information
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-gray-900">
              We're Here to Help
            </h2>

            <p className="mt-5 max-w-lg leading-8 text-gray-600">
              Whether you are a parent, student, or visitor,
              feel free to contact us. Our team will be happy
              to assist you.
            </p>


            {/* ADDRESS */}
            <div className="mt-10 flex gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                📍
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  School Address
                </h3>

                <p className="mt-1 leading-7 text-gray-600">
                  Radiat Model Academy
                  <br />
                  Your School Address
                  <br />
                  Nigeria
                </p>
              </div>

            </div>


            {/* PHONE */}
            <div className="mt-7 flex gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                📞
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Phone
                </h3>

                <a
                  href="tel:+2348012345678"
                  className="mt-1 block text-gray-600 transition hover:text-blue-700"
                >
                  +234 801 234 5678
                </a>
              </div>

            </div>


            {/* EMAIL */}
            <div className="mt-7 flex gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                ✉️
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Email
                </h3>

                <a
                  href="mailto:radiatmodelacademy@gmail.com"
                  className="mt-1 block text-gray-600 transition hover:text-blue-700"
                >
                  radiatmodelacademy@gmail.com
                </a>
              </div>

            </div>


            {/* OFFICE HOURS */}
            <div className="mt-7 flex gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                🕐
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Office Hours
                </h3>

                <p className="mt-1 leading-7 text-gray-600">
                  Monday – Friday
                  <br />
                  8:00 AM – 4:00 PM
                </p>
              </div>

            </div>

          </div>


          {/* ================= CONTACT FORM ================= */}
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl md:p-10">

            <h2 className="text-3xl font-extrabold text-gray-900">
              Send Us a Message
            </h2>

            <p className="mt-2 text-gray-600">
              Fill out the form and we will get back to you.
            </p>

            <form className="mt-8">

              {/* NAME */}
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />
              </div>


              {/* EMAIL */}
              <div className="mt-6">
                <label className="mb-2 block font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />
              </div>


              {/* PHONE */}
              <div className="mt-6">
                <label className="mb-2 block font-semibold text-gray-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />
              </div>


              {/* SUBJECT */}
              <div className="mt-6">
                <label className="mb-2 block font-semibold text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What is your message about?"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />
              </div>


              {/* MESSAGE */}
              <div className="mt-6">
                <label className="mb-2 block font-semibold text-gray-700">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />
              </div>


              {/* BUTTON */}
              <button
                type="submit"
                className="mt-7 w-full rounded-lg bg-blue-700 px-6 py-4 font-bold text-white shadow-lg transition hover:bg-blue-800"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* ================= MAP PLACEHOLDER ================= */}
      <section className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="overflow-hidden rounded-3xl bg-gray-200">

            <div className="flex h-80 items-center justify-center">

              <div className="text-center">

                <div className="text-7xl">
                  🗺️
                </div>

                <h2 className="mt-5 text-2xl font-bold text-gray-800">
                  Find Us
                </h2>

                <p className="mt-2 text-gray-600">
                  School location map will appear here.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="bg-blue-700 py-16">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Ready to Join Radiat Model Academy?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Start your child's journey toward academic excellence
            and personal growth today.
          </p>

          <a
            href="/admission"
            className="mt-7 inline-block rounded-lg bg-white px-7 py-4 font-bold text-blue-700 shadow-lg transition hover:-translate-y-1"
          >
            Apply for Admission →
          </a>

        </div>

      </section>

    </div>
  );
}

export default Contact;