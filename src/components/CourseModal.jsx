function CourseModal({ course, onClose }) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl hover:text-red-500"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-orange-500">
          {course.title}
        </h2>

        <p className="mt-4 text-gray-600">
          {course.description}
        </p>

        <div className="mt-6">
          <h3 className="font-semibold text-lg">Technologies</h3>

          <div className="flex flex-wrap gap-2 mt-2">
            {course.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-5">
          <span className="font-semibold">Level:</span> {course.level}
        </p>

        <p className="mt-2">
          <span className="font-semibold">Category:</span> {course.category}
        </p>

        <button
          className="mt-8 w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
        >
          Enroll Now
        </button>

      </div>
    </div>
  );
}

export default CourseModal;