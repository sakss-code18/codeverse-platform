import CourseCard from "../components/CourseCard";

function Courses() {
  return (
    <div>

      {/* Courses Hero Section */}
      <section className="bg-gray-50 py-16 px-10 text-center">

        <h1 className="text-5xl font-bold">
          Explore Our Courses
        </h1>

        <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
          Learn industry-demand skills with structured courses
          designed for students and developers.
        </p>

      </section>


      {/* Course Listing Section */}
      <section className="py-16 px-10">

        <h2 className="text-3xl font-bold text-center">
          All Courses
        </h2>


        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <CourseCard
  icon="💻"
  title="Frontend Development"
  description="Master HTML, CSS, JavaScript and React to build modern websites."
  tags={["HTML", "CSS", "React"]}
  level="Beginner"
/>


<CourseCard
  icon="🚀"
  title="Full Stack Development"
  description="Learn frontend, backend, databases and deployment."
  tags={["React", "Node", "MongoDB"]}
  level="Advanced"
/>


<CourseCard
  icon="🧠"
  title="Data Structures & Algorithms"
  description="Prepare for coding interviews with strong DSA fundamentals."
  tags={["C++", "DSA", "Algorithms"]}
  level="Intermediate"
/>


<CourseCard
  icon="🤖"
  title="AI & Machine Learning"
  description="Understand machine learning concepts and AI technologies."
  tags={["Python", "ML", "AI"]}
  level="Advanced"
/>


<CourseCard
  icon="🐍"
  title="Python Programming"
  description="Start programming with Python basics and projects."
  tags={["Python", "Basics", "Projects"]}
  level="Beginner"
/>


<CourseCard
  icon="🔐"
  title="Cyber Security"
  description="Learn security concepts and protect digital systems."
  tags={["Security", "Networks", "Ethical Hacking"]}
  level="Intermediate"
/>

        </div>

      </section>


    </div>
  );
}

export default Courses;