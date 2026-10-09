function Gallery() {
  return (
    <div className="min-h-screen bg-white">

      {/* ================= PAGE HEADER ================= */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">

          <p className="font-bold uppercase tracking-[3px] text-blue-700">
            School Gallery
          </p>

          <h1 className="mt-4 text-5xl font-extrabold text-gray-900 md:text-6xl">
            Life at{" "}
            <span className="text-blue-700">
              Radiat Model Academy
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Take a look at some of the activities, learning experiences,
            and memorable moments at Radiat Model Academy.
          </p>

        </div>
      </section>


      {/* ================= GALLERY ================= */}
      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* GALLERY ITEM 1 */}
            <div className="group overflow-hidden rounded-2xl bg-gray-100 shadow-sm">

              <div className="flex h-72 items-center justify-center bg-blue-100 transition duration-300 group-hover:scale-105">
                <div className="text-center">
                  <div className="text-7xl">🏫</div>
                  <p className="mt-4 font-bold text-blue-700">
                    Our School
                  </p>
                </div>
              </div>

            </div>


            {/* GALLERY ITEM 2 */}
            <div className="group overflow-hidden rounded-2xl bg-gray-100 shadow-sm">

              <div className="flex h-72 items-center justify-center bg-blue-50 transition duration-300 group-hover:scale-105">
                <div className="text-center">
                  <div className="text-7xl">👨‍🏫</div>
                  <p className="mt-4 font-bold text-blue-700">
                    Our Teachers
                  </p>
                </div>
              </div>

            </div>


            {/* GALLERY ITEM 3 */}
            <div className="group overflow-hidden rounded-2xl bg-gray-100 shadow-sm">

              <div className="flex h-72 items-center justify-center bg-blue-100 transition duration-300 group-hover:scale-105">
                <div className="text-center">
                  <div className="text-7xl">📚</div>
                  <p className="mt-4 font-bold text-blue-700">
                    Learning
                  </p>
                </div>
              </div>

            </div>


            {/* GALLERY ITEM 4 */}
            <div className="group overflow-hidden rounded-2xl bg-gray-100 shadow-sm">

              <div className="flex h-72 items-center justify-center bg-blue-50 transition duration-300 group-hover:scale-105">
                <div className="text-center">
                  <div className="text-7xl">⚽</div>
                  <p className="mt-4 font-bold text-blue-700">
                    Sports Activities
                  </p>
                </div>
              </div>

            </div>


            {/* GALLERY ITEM 5 */}
            <div className="group overflow-hidden rounded-2xl bg-gray-100 shadow-sm">

              <div className="flex h-72 items-center justify-center bg-blue-100 transition duration-300 group-hover:scale-105">
                <div className="text-center">
                  <div className="text-7xl">🎨</div>
                  <p className="mt-4 font-bold text-blue-700">
                    Creative Activities
                  </p>
                </div>
              </div>

            </div>


            {/* GALLERY ITEM 6 */}
            <div className="group overflow-hidden rounded-2xl bg-gray-100 shadow-sm">

              <div className="flex h-72 items-center justify-center bg-blue-50 transition duration-300 group-hover:scale-105">
                <div className="text-center">
                  <div className="text-7xl">🏆</div>
                  <p className="mt-4 font-bold text-blue-700">
                    Awards & Events
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SCHOOL ACTIVITIES ================= */}
      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <p className="font-bold uppercase tracking-[3px] text-blue-700">
              Beyond The Classroom
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
              More Than Just Academics
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Our students participate in activities that help develop
              confidence, teamwork, creativity, leadership, and discipline.
            </p>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {/* ACTIVITY 1 */}
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">

              <div className="text-6xl">
                ⚽
              </div>

              <h3 className="mt-5 text-2xl font-bold text-gray-900">
                Sports
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Students develop teamwork, discipline, and healthy
                competition through sporting activities.
              </p>

            </div>


            {/* ACTIVITY 2 */}
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">

              <div className="text-6xl">
                🎭
              </div>

              <h3 className="mt-5 text-2xl font-bold text-gray-900">
                Arts & Culture
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Creative activities allow students to express themselves
                and discover their talents.
              </p>

            </div>


            {/* ACTIVITY 3 */}
            <div className="rounded-2xl bg-white p-8 text-center shadow-sm">

              <div className="text-6xl">
                🧪
              </div>

              <h3 className="mt-5 text-2xl font-bold text-gray-900">
                Practical Learning
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Students gain practical experience through experiments,
                projects, and interactive learning.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="bg-blue-700 py-20">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-extrabold text-white md:text-5xl">
            Want Your Child to Be Part of Us?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Give your child the opportunity to learn, grow, discover
            their talents, and build a bright future.
          </p>

          <a
            href="/admission"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-bold text-blue-700 shadow-lg transition hover:-translate-y-1"
          >
            Apply for Admission →
          </a>

        </div>

      </section>

    </div>
  );
}

export default Gallery;