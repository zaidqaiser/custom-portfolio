const testimonials = [
  {
    name: "Ali Khan",
    role: "Software Engineer",
    feedback:
      "Zaid's attention to detail and design is outstanding. He delivers high-quality work every time.",
  },
  {
    name: "Sara Ahmed",
    role: "Product Manager",
    feedback:
      "Amazing collaboration experience — he turns ideas into beautiful, functional products.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="min-h-[50vh] flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-20 bg-[var(--black-olive)] text-white"
    >
      <h2 className="text-[clamp(1.8rem,2vw,2.5rem)] font-bold text-[var(--pale-dogwood)] mb-12 text-center">
        What <span className="text-white">People Say</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] p-8 rounded-2xl shadow-lg hover:scale-[1.03] transition-transform duration-500"
          >
            <p className="text-[clamp(1rem,1vw,1.2rem)] text-gray-300 italic leading-relaxed mb-6">
              “{t.feedback}”
            </p>
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-[clamp(1rem,1.2vw,1.3rem)] font-semibold text-[var(--pale-azure)]">
                {t.name}
              </h4>
              <span className="text-gray-400 text-[clamp(0.85rem,0.9vw,1rem)]">
                {t.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
