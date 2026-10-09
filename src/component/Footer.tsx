function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">

        {/* SCHOOL INFORMATION */}
        <div>

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-xl font-bold">
              R
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Radiat Model Academy
              </h2>

              <p className="text-xs text-gray-400">
                Excellence in Education
              </p>
            </div>

          </div>

          <p className="mt-6 leading-7 text-gray-400">
            Providing quality education and creating a supportive
            environment where every student can learn, grow, and
            achieve their dreams.
          </p>

        </div>


        {/* QUICK LINKS */}
        <div>

          <h3 className="text-lg font-bold">
            Quick Links
          </h3>

          <ul className="mt-6 space-y-4">

            <li>
              <a
                href="/"
                className="text-gray-400 transition hover:text-white"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="text-gray-400 transition hover:text-white"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="/admission"
                className="text-gray-400 transition hover:text-white"
              >
                Admission
              </a>
            </li>

            <li>
              <a
                href="/gallery"
                className="text-gray-400 transition hover:text-white"
              >
                Gallery
              </a>
            </li>

          </ul>

        </div>


        {/* STUDENT LINKS */}
        <div>

          <h3 className="text-lg font-bold">
            Student Portal
          </h3>

          <ul className="mt-6 space-y-4">

            <li>
              <a
                href="/result"
                className="text-gray-400 transition hover:text-white"
              >
                Check Result
              </a>
            </li>

            <li>
              <a
                href="/login"
                className="text-gray-400 transition hover:text-white"
              >
                Student Login
              </a>
            </li>

            <li>
              <a
                href="/admission"
                className="text-gray-400 transition hover:text-white"
              >
                Apply for Admission
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="text-gray-400 transition hover:text-white"
              >
                Contact School
              </a>
            </li>

          </ul>

        </div>


        {/* CONTACT */}
        <div>

          <h3 className="text-lg font-bold">
            Contact Us
          </h3>

          <div className="mt-6 space-y-5">

            {/* PHONE */}
            <a
              href="tel:+2348012345678"
              className="flex gap-3 text-gray-400 transition hover:text-white"
            >
              <span className="text-xl">
                📞
              </span>

              <span>
                +234 801 234 5678
              </span>
            </a>


            {/* EMAIL */}
            <a
              href="mailto:radiatmodelacademy@gmail.com"
              className="flex gap-3 text-gray-400 transition hover:text-white"
            >
              <span className="text-xl">
                ✉️
              </span>

              <span className="break-all">
                radiatmodelacademy@gmail.com
              </span>
            </a>


            {/* LOCATION */}
            <div className="flex gap-3 text-gray-400">

              <span className="text-xl">
                📍
              </span>

              <span>
                Nigeria
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM FOOTER ================= */}
      <div className="border-t border-gray-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-500 md:flex-row lg:px-8">

          <p>
            © {new Date().getFullYear()} Radiat Model Academy.
            All rights reserved.
          </p>

          <div className="flex gap-6">

            <a
              href="/"
              className="transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="/"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;