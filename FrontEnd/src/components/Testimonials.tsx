import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "jimpoultry",
    role: "from Australia",
    rating: 5,
    feedback:
      "Great person. I had a few issues with the script in my server and they made sure it all worked in a very quick timeframe. Very professional and very helpful",
  },
  {
    name: "vrachtmatfeiz",
    role: "from Netherlands",
    rating: 5,
    feedback: "This guy knows what he is doing",
  },
  {
    name: "mrestablished",
    role: "from United States",
    rating: 5,
    feedback: "Wouldn’t mind working with him he is awesome",
  },
  {
    name: "marley_b94",
    role: "from United States",
    rating: 5,
    feedback:
      "I definitely appreciate the loading screen. I’d been trying for 3 weeks and they got me right this morning",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="min-h-[50vh] flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-20 bg-[var(--black-olive)] text-white"
    >
      <h2 className="flex items-center justify-center gap-3 text-[clamp(1.8rem,2vw,2.5rem)] font-bold text-[var(--pale-dogwood)] mb-12 text-center">
        Reviews <span className="text-white">From</span>
        <span className="flex items-center">
          <img
            src="/fiverr.png"
            alt="Fiverr Logo"
            className="w-[110px] md:w-[140px] object-contain inline-block ml-2"
          />
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] p-8 rounded-2xl shadow-lg hover:scale-[1.03] transition-transform duration-500"
          >
            {/* Feedback text */}
            <p className="text-[clamp(1rem,1vw,1.2rem)] text-gray-300 italic leading-relaxed mb-6">
              “{t.feedback}”
            </p>

            {/* Star rating */}
            <div className="flex justify-center md:justify-start mb-3 text-yellow-400">
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} className="text-lg" />
              ))}
            </div>

            {/* Name and role */}
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
      <a href="https://www.fiverr.com/zaidwebdev" target="_blank" className="mt-12 font-bold text-[18px] text-gray-300 italic hover:text-[var(--pale-dogwood)]"> 40+ more...</a>
    </section>
  );
};

export default Testimonials;
