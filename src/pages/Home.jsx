import CourseCard from "../components/CourseCard";
import FeatureCard from "../components/FeatureCard";
import StatsCard from "../components/StatsCard";
import LearningPathCard from "../components/LearningPathCard";
import heroImg from "../assets/hero.png";

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 bg-gray-50 gap-10">

        <div className="max-w-xl">

          <h1 className="text-5xl font-bold leading-tight">
            Learn Coding.
            <span className="text-orange-500"> Build Your Future.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Master programming, data structures, web development and become
            industry ready with structured learning.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
              Explore Courses
            </button>

            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-50 transition">
              Start Learning
            </button>

          </div>

        </div>

        <div>
          <img
            src={heroImg}
            alt="Coding Illustration"
            className="w-80 md:w-96"
          />
        </div>

      </section>

      {/* Popular Courses */}
      <section className="py-16 px-10 bg-white">

        <h2 className="text-3xl font-bold text-center">
          Popular Courses
        </h2>

        <p className="text-center mt-3 text-gray-600">
          Choose the right path to start your coding journey.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <CourseCard
            icon="💻"
            title="Web Development"
            description="Learn frontend, backend and build real-world projects."
            tags={["HTML", "CSS", "React"]}
            level="Beginner"
          />

          <CourseCard
            icon="🧠"
            title="Data Structures & Algorithms"
            description="Master DSA concepts for coding interviews."
            tags={["C++", "DSA", "Problem Solving"]}
            level="Intermediate"
          />

          <CourseCard
            icon="🤖"
            title="AI & Machine Learning"
            description="Explore AI concepts and intelligent systems."
            tags={["Python", "ML", "AI"]}
            level="Advanced"
          />

        </div>

      </section>

      {/* Why Choose Us */}
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

      {/* Achievements */}
      <section className="py-16 px-10 bg-white">

        <h2 className="text-3xl font-bold text-center">
          Our Achievements
        </h2>

        <p className="text-center mt-3 text-gray-600">
          Numbers that represent our learning community.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-10">

          <StatsCard
            number="50K+"
            title="Students"
          />

          <StatsCard
            number="100+"
            title="Courses"
          />

          <StatsCard
            number="95%"
            title="Success Rate"
          />

          <StatsCard
            number="24/7"
            title="Support"
          />

        </div>

      </section>

      {/* Learning Paths */}
      <section className="py-16 px-10 bg-gray-50">

        <h2 className="text-3xl font-bold text-center">
          Choose Your Learning Path
        </h2>

        <p className="text-center mt-3 text-gray-600">
          Select a roadmap that matches your career goals.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-10">

          <LearningPathCard
            icon="🌐"
            title="Frontend Development"
            duration="3 Months"
          />

          <LearningPathCard
            icon="🚀"
            title="Full Stack Development"
            duration="6 Months"
          />

          <LearningPathCard
            icon="🧠"
            title="DSA Preparation"
            duration="4 Months"
          />

          <LearningPathCard
            icon="🤖"
            title="AI & Machine Learning"
            duration="5 Months"
          />

        </div>

      </section>

    </div>
  );
}

export default Home;