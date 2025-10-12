const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-4xl font-bold text-[var(--pale-dogwood)] mb-8">
        Let’s Work Together
      </h2>
      <p className="text-gray-300 mb-6">
        Have a project in mind or just want to say hi? Let’s connect!
      </p>
      <a
        href="mailto:zaid.qaiser@example.com"
        className="px-8 py-4 bg-[var(--pale-dogwood)] text-[var(--black-olive)] font-bold rounded-full hover:scale-105 transition-transform duration-300"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
