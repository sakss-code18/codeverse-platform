function LearningPathCard({ icon, title, duration }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300">

      <div className="text-5xl">
        {icon}
      </div>

      <h3 className="text-xl font-bold mt-4">
        {title}
      </h3>

      <p className="mt-2 text-gray-600">
        {duration}
      </p>

    </div>
  );
}

export default LearningPathCard;