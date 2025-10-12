const stats = [
  { label: "Projects Completed", value: "25+" },
  { label: "Years of Experience", value: "2+" },
  { label: "Happy Clients", value: "10+" },
  { label: "Technologies Used", value: "15+" },
];

const Stats = () => {
  return (
    <section className="py-20 bg-gray-900 text-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label}>
            <h3 className="text-5xl font-bold text-[var(--pale-dogwood)]">
              {stat.value}
            </h3>
            <p className="text-gray-400 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
