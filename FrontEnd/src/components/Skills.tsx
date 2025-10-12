const skills = [
  { name: "React.js", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Django", level: "Intermediate" },
  { name: "Python", level: "Advanced" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[var(--black-olive)] text-center">
      <h2 className="text-4xl font-bold text-[var(--pale-dogwood)] mb-12">
        Skills & Tools
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center bg-gray-800/50 p-6 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <span className="text-xl font-semibold text-[var(--pale-azure)]">
              {skill.name}
            </span>
            <span className="text-sm text-gray-400">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
