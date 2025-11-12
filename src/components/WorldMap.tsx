const WorldMap = () => {
  return (
    <section className="relative flex justify-center items-center py-16 bg-amber-50 rounded-lg overflow-hidden max-w-5xl mx-auto px-4 shadow-lg min-h-[480px] md:min-h-[600px]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/assets/world.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for warm tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-700/60 via-transparent to-amber-700/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center text-amber-900">
        <h2 className="text-3xl font-playfair font-bold mb-6">Global Reach</h2>
        <p className="text-lg leading-relaxed">
          Explore our dynamic global network through this interactive visual showing our comprehensive presence across continents, connecting Indian spices to markets worldwide.
        </p>
      </div>
    </section>
  );
};

export default WorldMap;
