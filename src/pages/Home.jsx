import CourseCard from "../components/CourseCard";
import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-between px-10 bg-gray-50">

        <div className="max-w-xl">

          <h1 className="text-5xl font-bold leading-tight">
            Learn Coding.
            <span className="text-orange-500">
              {" "}Build Your Future.
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Master programming, data structures, web development
            and become industry ready with structured learning.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
              Explore Courses
            </button>

            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-50">
              Start Learning
            </button>

          </div>

        </div>


        <div className="hidden md:block">

          <div className="w-80 h-80 bg-orange-100 rounded-full flex items-center justify-center">

            <h2 className="text-6xl">
              💻
            </h2>

          </div>

        </div>

      </section>


      {/* Course Section */}
      <section className="py-16 px-10 bg-white">

        <h2 className="text-3xl font-bold text-center">
          Popular Courses
        </h2>

        <p className="text-center mt-3 text-gray-600">
          Choose the right path to start your coding journey
        </p>


        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <CourseCard
            title="Web Development"
            description="Learn frontend, backend and build real-world projects."
          />

          <CourseCard
            title="Data Structures & Algorithms"
            description="Master DSA concepts for coding interviews."
          />

          <CourseCard
            title="AI & Machine Learning"
            description="Explore AI concepts and intelligent systems."
          />

        </div>

      </section>


      {/* Why Choose Us Section */}
      <section className="py-16 px-10 bg-gray-50">

        <h2 className="text-3xl font-bold text-center">
          Why Choose CodeVerse?
        </h2>

        <p className="text-center mt-3 text-gray-600">
          Everything you need to become industry ready.
        </p>


        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <FeatureCard
            icon="🚀"
            title="Industry Ready Skills"
            description="Learn technologies used in real-world projects."
          />

          <FeatureCard
            icon="👨‍💻"
            title="Expert Guidance"
            description="Get structured learning paths and mentorship."
          />

          <FeatureCard
            icon="🏆"
            title="Placement Preparation"
            description="Prepare for coding interviews and career growth."
          />

        </div>

      </section>

    </div>
  );
}

export default Home;