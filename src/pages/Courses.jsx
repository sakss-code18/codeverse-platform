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
            title="Frontend Development"
            description="Master HTML, CSS, JavaScript, React and build modern websites."
          />


          <CourseCard
            title="Full Stack Development"
            description="Learn frontend, backend, databases and deploy complete applications."
          />


          <CourseCard
            title="Data Structures & Algorithms"
            description="Prepare for coding interviews with strong DSA fundamentals."
          />


          <CourseCard
            title="AI & Machine Learning"
            description="Understand machine learning concepts and AI technologies."
          />


          <CourseCard
            title="Python Programming"
            description="Start your programming journey with Python basics and projects."
          />


          <CourseCard
            title="Cyber Security"
            description="Learn security concepts and protect digital systems."
          />

        </div>

      </section>


    </div>
  );
}

export default Courses;