import {
  FaRocket,
  FaUserGraduate,
  FaTrophy,
  FaGlobe,
  FaBrain,
  FaRobot,
} from "react-icons/fa";
import FeatureCard from "../components/FeatureCard";
import StatsCard from "../components/StatsCard";
import LearningPathCard from "../components/LearningPathCard";
import heroImg from "../assets/hero.png";
import CourseSection from "../components/CourseSection";
import {useRef } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const courseRef = useRef(null);
  const navigate = useNavigate();

const scrollToCourses = () => {
  courseRef.current?.scrollIntoView({
    behavior: "smooth",
  });
};
  return (
    <div>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-10 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center lg:text-left">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-gray-950">
            Learn Coding.
            <span className="text-orange-500"> Build Your Future.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg font-medium text-gray-800 leading-8">
            Master programming, data structures, web development and become
            industry ready with structured learning.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <button className="w-full sm:w-auto bg-orange-500 text-white px-8 py-4 rounded-xl hover:bg-orange-600 transition shadow-lg" onClick={scrollToCourses}>
              Explore Courses
            </button>
          
            <button
            onClick={() => navigate("/login")}
             className="w-full sm:w-auto border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-xl hover:bg-orange-500 hover:text-white transition">
              Start Learning
            </button>
          </div>
          

        </div>

        <div>
          <img
            src={heroImg}
            alt="Coding Illustration"
            className="w-72 sm:w-96 lg:w-[520px] xl:w-[560px] drop-shadow-2xl"
          />
        </div>

        </div>

      </section>
       
      <div ref={courseRef}>
      <CourseSection />
      </div>
            {/* Why Choose Us */}
      <section className="py-20 px-5 sm:px-8 lg:px-10 bg-gray-50">

        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-950">
          Why Choose CodeVerse?
        </h2>

        <p className="text-center mt-4 text-gray-800 text-lg font-semibold max-w-2xl mx-auto">
          Everything you need to become industry ready.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <FeatureCard
            icon={<FaRocket />}
            title="Industry Ready Skills"
            description="Learn technologies used in real-world projects."
          />

          <FeatureCard
            icon={<FaUserGraduate />}
            title="Expert Guidance"
            description="Get structured learning paths and mentorship."
          />

          <FeatureCard
            icon={<FaTrophy />}
            title="Placement Preparation"
            description="Prepare for coding interviews and career growth."
          />

        </div>

      </section>

      {/* Achievements */}
      <section className="py-20 px-5 sm:px-8 lg:px-10 bg-white">

        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900">
          Our Achievements
        </h2>

        <p className="text-center mt-4 text-gray-800 text-lg font-medium max-w-2xl mx-auto">
          Numbers that represent our learning community.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          <StatsCard number="50K+" title="Students" />
          <StatsCard number="100+" title="Courses" />
          <StatsCard number="95%" title="Success Rate" />
          <StatsCard number="24/7" title="Support" />

        </div>

      </section>

      {/* Learning Paths */}
      <section className="py-20 px-5 sm:px-8 lg:px-10 bg-gray-50">

        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900">
          Choose Your Learning Path
        </h2>

        <p className="text-center mt-4 text-gray-700 text-lg font-medium max-w-2xl mx-auto">
          Select a roadmap that matches your career goals.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          <LearningPathCard
            icon={<FaGlobe />}
            title="Frontend Development"
            duration="3 Months"
          />

          <LearningPathCard
            icon={<FaRocket />}
            title="Full Stack Development"
            duration="6 Months"
          />

          <LearningPathCard
            icon={<FaBrain />}
            title="DSA Preparation"
            duration="4 Months"
          />

          <LearningPathCard
            icon={<FaRobot />}
            title="AI & Machine Learning"
            duration="5 Months"
          />

        </div>

      </section>

    </div>
  );
}

export default Home;
