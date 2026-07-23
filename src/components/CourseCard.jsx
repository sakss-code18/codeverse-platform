function CourseCard({
  title,
  description,
  icon,
  tags,
  level,
  onView,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between">

      <div>
        <div className="text-4xl text-orange-500 mb-4 flex justify-center">
          {icon}
        </div>

        <h3 className="text-xl font-bold mt-4">
          {title}
        </h3>

        <p className="mt-3 text-gray-600">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm font-semibold text-gray-500">
          Level: {level}
        </p>
      </div>

      <button
        onClick={onView}
        className="mt-6 w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
      >
        Explore Course
      </button>

    </div>
  );
}

export default CourseCard;