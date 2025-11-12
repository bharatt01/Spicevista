const markets = [
  "United States",
  "Germany",
  "United Kingdom",
  "Canada",
  "UAE",
  "Bangladesh",
  "Australia",
  "Sweden",
  "Japan",
  "South Africa",
  "Saudi Arabia",
  // Add/adjust as needed
];

const MarketList = () => {
  return (
    <section className="py-16 bg-gradient-to-tr from-amber-50 via-yellow-50 to-amber-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl font-playfair font-bold text-amber-800 text-center mb-12">
          Major Export Destinations
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-amber-900">
          {markets.map((market) => (
            <li
              key={market}
              className="bg-white shadow-md rounded-xl py-3 px-4 flex items-center justify-center font-semibold text-lg hover:bg-amber-100 transition-colors cursor-pointer"
              title={`Export destination: ${market}`}
            >
              {market}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MarketList;
