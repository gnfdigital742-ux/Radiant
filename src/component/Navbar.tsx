import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b bg-white shadow-sm">

      {/* ================= TOP NAVBAR ================= */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-xl font-bold text-white">
            R
          </div>

          <div>
            <h1 className="text-lg font-bold text-blue-700 sm:text-xl">
              Radiat Model Academy
            </h1>

            <p className="text-xs text-gray-500">
              Excellence in Education
            </p>
          </div>

        </a>


        {/* ================= DESKTOP NAVIGATION ================= */}
        <div className="hidden items-center gap-7 md:flex">

          <a
            href="/"
            className="font-semibold text-blue-700 transition hover:text-blue-800"
          >
            Home
          </a>

          <a
            href="/about"
            className="font-medium text-gray-600 transition hover:text-blue-700"
          >
            About
          </a>

          <a
            href="/admission"
            className="font-medium text-gray-600 transition hover:text-blue-700"
          >
            Admission
          </a>

          <a
            href="/gallery"
            className="font-medium text-gray-600 transition hover:text-blue-700"
          >
            Gallery
          </a>

          <a
            href="/contact"
            className="font-medium text-gray-600 transition hover:text-blue-700"
          >
            Contact
          </a>

          <a
            href="/result"
            className="font-medium text-gray-600 transition hover:text-blue-700"
          >
            Result
          </a>

          <a
            href="/login"
            className="rounded-lg bg-blue-700 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-800"
          >
            Login
          </a>

        </div>


        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-2xl text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* ================= MOBILE NAVIGATION ================= */}
      {menuOpen && (
        <div className="border-t bg-white px-6 py-5 md:hidden">

          <div className="flex flex-col gap-2">

            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-semibold text-blue-700 hover:bg-blue-50"
            >
              Home
            </a>

            <a
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-blue-50"
            >
              About
            </a>

            <a
              href="/admission"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-blue-50"
            >
              Admission
            </a>

            <a
              href="/gallery"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-blue-50"
            >
              Gallery
            </a>

            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-blue-50"
            >
              Contact
            </a>

            <a
              href="/result"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-blue-50"
            >
              Result
            </a>

            <a
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-blue-700 px-4 py-3 text-center font-semibold text-white hover:bg-blue-800"
            >
              Login
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;