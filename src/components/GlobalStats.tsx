import { useEffect, useState } from "react";

const stats = [
  { label: "Countries Served", value: 32 },
  { label: "International Partners", value: 58 },
  { label: "Export Volume (tons/year)", value: 12000 },
];

const GlobalStats = () => {
  // State for each counter, initialized to 0
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    // Animate each counter from 0 to its target value
    const durations = [2000, 2000, 3000]; // animation duration in ms per counter
    const steps = 60; // animation steps
    const timers: NodeJS.Timeout[] = [];

    stats.forEach(({ value }, i) => {
      let start = 0;
      const increment = value / steps;
      const interval = durations[i] / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          start = value;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = Math.floor(start);
          return newCounts;
        });
      }, interval);
      timers.push(timer);
    });

    return () => timers.forEach((t) => clearInterval(t));
  }, []);

  return (
    <section className="flex justify-center bg-background py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full px-8">
        {stats.map(({ label }, i) => (
          <div key={label} className="text-center">
            <div className="text-4xl font-bold text-amber-700">
              {counts[i].toLocaleString()}+
            </div>
            <div className="text-lg text-muted-foreground mt-2">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlobalStats;
