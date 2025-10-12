// AboutSection.tsx
export const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-[90vh] px-6 md:px-16 lg:px-24 py-12 bg-[var(--black-olive)] text-gray-100">
      {/* Left Side Image */}
      <div className="flex-1 flex justify-center md:justify-start mb-10 md:mb-0">
        <img
          src="/p1.png"
          alt="About"
          className="w-3/4 md:w-2/3 lg:w-1/2 rounded-2xl shadow-2xl hover:scale-[1.03] transition-transform duration-500"
        />
      </div>

      {/* Right Side Content */}
      <div className="flex-1 flex flex-col justify-center text-center md:text-left max-w-2xl">
        <h2 className="text-[clamp(1.8rem,2vw,2.5rem)] font-bold text-[var(--pale-dogwood)] mb-4">
          About <span className="text-white">Me</span>
        </h2>
        <p className="text-[clamp(1rem,1vw,1.2rem)] text-gray-300 leading-relaxed mb-6">
          I'm a passionate frontend developer dedicated to building immersive,
          performant, and user-centered web experiences. I focus on blending
          simplicity, clarity, and emotion-driven design to create impactful
          digital products.
        </p>
      </div>
    </section>
  );
};
