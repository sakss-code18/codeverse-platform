function About() {
  return (
    <div>

      {/* About Hero Section */}
      <section className="bg-gray-50 py-20 px-10 text-center">

        <h1 className="text-5xl font-bold">
          About CodeVerse
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          CodeVerse is an online learning platform designed to help
          students build strong programming skills, learn industry
          technologies and prepare for successful tech careers.
        </p>

      </section>


      {/* Mission and Vision */}
      <section className="py-16 px-10">

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white shadow-md rounded-xl p-8">

            <h2 className="text-2xl font-bold text-orange-500">
              Our Mission 🚀
            </h2>

            <p className="mt-4 text-gray-600">
              Our mission is to make quality coding education
              accessible and help learners become confident
              developers through practical learning.
            </p>

          </div>


          <div className="bg-white shadow-md rounded-xl p-8">

            <h2 className="text-2xl font-bold text-orange-500">
              Our Vision 🌎
            </h2>

            <p className="mt-4 text-gray-600">
              We aim to create a community where students can
              learn, practice, build projects and achieve their
              career goals.
            </p>

          </div>

        </div>

      </section>


      {/* Why Students Choose Us */}
      <section className="bg-gray-50 py-16 px-10">

        <h2 className="text-3xl font-bold text-center">
          Why Students Choose Us?
        </h2>


        <div className="grid md:grid-cols-3 gap-8 mt-10">


          <div className="text-center">

            <div className="text-5xl">
              💻
            </div>

            <h3 className="text-xl font-bold mt-4">
              Practical Learning
            </h3>

            <p className="mt-3 text-gray-600">
              Learn through projects and real-world applications.
            </p>

          </div>


          <div className="text-center">

            <div className="text-5xl">
              🎯
            </div>

            <h3 className="text-xl font-bold mt-4">
              Career Focused
            </h3>

            <p className="mt-3 text-gray-600">
              Prepare for internships and technical interviews.
            </p>

          </div>


          <div className="text-center">

            <div className="text-5xl">
              📚
            </div>

            <h3 className="text-xl font-bold mt-4">
              Structured Courses
            </h3>

            <p className="mt-3 text-gray-600">
              Follow clear learning paths from beginner to advanced.
            </p>

          </div>


        </div>

      </section>


    </div>
  );
}

export default About;