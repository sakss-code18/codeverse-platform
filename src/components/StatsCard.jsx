function StatsCard({ number, title }) {
  return (
    <div className="text-center bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">

      <h3 className="text-4xl font-bold text-orange-500">
        {number}
      </h3>

      <p className="mt-3 text-gray-600 font-medium">
        {title}
      </p>

    </div>
  );
}

export default StatsCard;