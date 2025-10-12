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
    <section id="testimonials" className="py-20 text-center">
      <h2 className="text-4xl font-bold text-[var(--pale-dogwood)] mb-12">
        What People Say
      </h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-gray-800/50 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <p className="text-gray-300 italic mb-4">“{t.feedback}”</p>
            <h4 className="text-[var(--pale-azure)] font-semibold">
              {t.name}
            </h4>
            <span className="text-gray-500 text-sm">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
