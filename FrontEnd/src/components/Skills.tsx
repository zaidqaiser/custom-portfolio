export const Skills = () => {
  const skills = [
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Django",
    "Node.js",
    "Next.js",
    "UI/UX Design",
    "Git & GitHub",
    "Zoho Creator",
  ];

  return (
    <section
      id="skills"
      className="min-h-[40vh] flex flex-col items-center justify-center bg-[var(--black-olive)] text-white px-6 md:px-16 lg:px-24 py-20"
    >
      <h2 className="text-[clamp(1.8rem,2vw,2.5rem)] font-bold text-[var(--pale-dogwood)] mb-8">
        My <span className="text-white">Skills</span>
      </h2>
      <p className="text-[clamp(1rem,1vw,1.2rem)] text-gray-300 mb-12 text-center max-w-2xl">
        Here are the technologies and tools I work with to create clean, efficient, and
        scalable web experiences.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-10">
        {skills.map((skill) => (
          <div
            key={skill}
            className="text-center bg-[rgba(255,255,255,0.05)] px-6 py-4 rounded-xl border border-[rgba(255,255,255,0.1)] hover:scale-105 hover:bg-[rgba(255,255,255,0.1)] transition-transform duration-300"
          >
            <span className="text-[clamp(0.9rem,0.9vw,1.1rem)] font-semibold">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
