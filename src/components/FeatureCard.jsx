function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">

      <div className="text-4xl text-orange-500 mb-4 flex justify-center">
        {icon}
      </div>

      <h3 className="text-xl font-bold mt-4">
        {title}
      </h3>

      <p className="mt-3 text-gray-600">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;