function CourseCard({ title, description, icon, tags, level }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">


      <div className="text-4xl">
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


      <button className="mt-5 text-orange-500 font-semibold hover:underline">
        Explore Course →
      </button>


    </div>
  );
}

export default CourseCard;