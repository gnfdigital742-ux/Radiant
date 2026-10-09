function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">

          {/* LEFT SIDE */}
          <div>
            <p className="mb-5 font-semibold uppercase tracking-[3px] text-blue-700">
              Welcome to Radiat Model Academy
            </p>

            <h1 className="text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
              Inspiring{" "}
              <span className="text-blue-700">
                Young Minds
              </span>

              <br />

              For a Brighter Future
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              At Radiat Model Academy, we provide quality education
              in a safe and supportive environment where every student
              is encouraged to learn, grow, and achieve their dreams.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="/admission"
                className="rounded-lg bg-blue-700 px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-800"
              >
                Apply for Admission
              </a>

              <a
                href="/about"
                className="rounded-lg border-2 border-blue-700 px-7 py-4 font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white"
              >
                Discover More
              </a>

            </div>

            {/* SCHOOL STATISTICS */}
            <div className="mt-10 flex flex-wrap gap-10">

              <div>
                <p className="text-2xl font-bold text-gray-900">
                  500+
                </p>
                <p className="text-sm text-gray-500">
                  Students
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-gray-900">
                  30+
                </p>
                <p className="text-sm text-gray-500">
                  Teachers
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-gray-900">
                  10+
                </p>
                <p className="text-sm text-gray-500">
                  Years Experience
                </p>
              </div>

            </div>
          </div>


          {/* RIGHT SIDE */}
          <div className="relative">

            <div className="flex h-[500px] items-center justify-center overflow-hidden rounded-3xl bg-blue-700 shadow-2xl">

              <div className="text-center text-white">

                <div className="text-9xl">
                  🎓
                </div>

                <h2 className="mt-6 text-3xl font-bold">
                  Radiat Model Academy
                </h2>

                <p className="mt-3 text-lg text-blue-100">
                  Learn • Grow • Succeed
                </p>

              </div>

            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-5 shadow-xl md:-left-8">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl">
                  🏆
                </div>

                <div>
                  <p className="font-bold text-gray-900">
                    Academic Excellence
                  </p>

                  <p className="text-sm text-gray-500">
                    Building successful futures
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= ABOUT PREVIEW ================= */}
      <section className="bg-white py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">

          {/* IMAGE PLACEHOLDER */}
          <div className="relative">

            <div className="flex h-[420px] items-center justify-center overflow-hidden rounded-3xl bg-gray-100">

              <div className="text-center">

                <div className="text-8xl">
                  🏫
                </div>

                <h2 className="mt-6 text-2xl font-bold text-blue-700">
                  Radiat Model Academy
                </h2>

                <p className="mt-2 text-gray-500">
                  A place where students learn and grow
                </p>

              </div>

            </div>

            {/* EXPERIENCE CARD */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-blue-700 px-6 py-5 text-white shadow-xl md:-right-8">

              <p className="text-3xl font-bold">
                10+
              </p>

              <p className="text-sm text-blue-100">
                Years of Excellence
              </p>

            </div>

          </div>


          {/* ABOUT CONTENT */}
          <div>

            <p className="font-bold uppercase tracking-[3px] text-blue-700">
              About Our School
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              Shaping{" "}
              <span className="text-blue-700">
                Tomorrow's Leaders
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Radiat Model Academy is committed to providing quality
              education that prepares students for a successful and
              meaningful future.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              We create a supportive learning environment where
              students can develop their academic abilities,
              creativity, confidence, discipline, and leadership skills.
            </p>

            {/* FEATURES */}
            <div className="mt-7 grid gap-4 sm:grid-cols-2">

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  ✓
                </div>

                <p className="font-semibold text-gray-700">
                  Quality Education
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  ✓
                </div>

                <p className="font-semibold text-gray-700">
                  Qualified Teachers
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  ✓
                </div>

                <p className="font-semibold text-gray-700">
                  Safe Environment
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  ✓
                </div>

                <p className="font-semibold text-gray-700">
                  Student Development
                </p>
              </div>

            </div>

            <a
              href="/about"
              className="mt-8 inline-block rounded-lg bg-blue-700 px-7 py-4 font-semibold text-white shadow-md transition hover:bg-blue-800"
            >
              Learn More About Us →
            </a>

          </div>

        </div>

      </section>


      {/* ================= CALL TO ACTION ================= */}
      <section className="bg-blue-700 py-20">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-extrabold text-white md:text-5xl">
            Give Your Child the Best Start
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Join Radiat Model Academy and give your child the
            opportunity to learn, grow, and build a brighter future.
          </p>

          <a
            href="/admission"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-bold text-blue-700 shadow-lg transition hover:-translate-y-1"
          >
            Start Your Application →
          </a>

        </div>

      </section>

    </div>
  );
}

export default Home;