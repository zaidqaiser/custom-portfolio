export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[80vh] flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-20 bg-[var(--black-olive)] text-white"
    >
      <h2 className="text-[clamp(1.8rem,2vw,2.5rem)] font-bold text-[var(--pale-dogwood)] mb-8">
        Get In <span className="text-white">Touch</span>
      </h2>
      <p className="text-[clamp(1rem,1vw,1.2rem)] text-gray-300 mb-10 text-center max-w-2xl">
        Want to collaborate or discuss a project? Drop a message — I’d love to connect.
      </p>

      <form className="w-full max-w-xl flex flex-col gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] focus:outline-none focus:border-[var(--pale-dogwood)] text-gray-100"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] focus:outline-none focus:border-[var(--pale-dogwood)] text-gray-100"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="p-4 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] focus:outline-none focus:border-[var(--pale-dogwood)] text-gray-100"
        ></textarea>

        <button
          type="submit"
          className="bg-[var(--pale-dogwood)] text-[var(--black-olive)] font-semibold py-3 rounded-full hover:scale-105 transition-transform duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};
