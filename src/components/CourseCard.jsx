function CourseCard({ title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">

      <h3 className="text-xl font-bold text-gray-800">
        {title}
      </h3>

      <p className="mt-3 text-gray-600">
        {description}
      </p>

      <button className="mt-5 text-orange-500 font-semibold">
        Explore →
      </button>

    </div>
  );
}

export default CourseCard;