import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaRegPaperPlane, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const HeroPage = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between h-[90vh] px-6 md:px-16">
      <div className="flex flex-col gap-6 max-w-2xl">
        <span className="uppercase tracking-widest text-sm text-[var(--pale-azure)]">
          WebSite Developer
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--pale-dogwood)] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
          Zaid <span className="text-white">Qaiser</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 max-w-xl leading-relaxed">
          I build elegant, responsive web experiences that merge design,
          performance, and purpose - creating products users love.
        </p>
        <span className="uppercase tracking-widest text-sm text-[var(--pale-azure)]">
          rating
        </span>
        <span className="flex items-center gap-2 font-bold text-xl">
          <div className="flex items-center">
            <FaStar className="text-yellow-400 text-2xl" />
            <FaStar className="text-yellow-400 text-2xl" />
            <FaStar className="text-yellow-400 text-2xl" />
            <FaStar className="text-yellow-400 text-2xl" />
            <FaStarHalfAlt className="text-yellow-400 text-2xl" />
          </div>
          <p>4.8</p>
        </span>

        <hr />
        <div className="flex flex-wrap gap-4 mt-2 items-center">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--pale-dogwood)] text-[var(--black-olive)] hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <i className="fab fa-github text-2xl">
              <FaGithub />
            </i>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--pale-dogwood)] text-[var(--black-olive)] hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <i className="fab fa-github text-2xl">
              <FaLinkedin />
            </i>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--pale-dogwood)] text-[var(--black-olive)] hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <i className="fab fa-github text-2xl">
              <FaFacebook />
            </i>
          </a>
        </div>
      </div>
      <div className="hidden md:flex justify-center w-1/2">
        <img
          src="/hero-img.png"
          alt="hero"
          className="w-[90%] drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:scale-[1.04] transition-transform duration-500"
        />
      </div>

      {/* Floating Contact Badge */}
      <motion.a
        href="mailto:zaidqaiser2025@gmail.com"
        whileHover={{ scale: 1.1 }}
        target="_blank"
        className="fixed bottom-[3vh] right-[3vw] flex items-center gap-2 
        bg-[var(--steel-blue)] text-white px-5 py-3 rounded-full shadow-lg 
        hover:shadow-[0_0_25px_rgba(32,129,195,0.5)] transition-all duration-300"
      >
        <FaRegPaperPlane />
        <span>Mail Me</span>
      </motion.a>
    </section>
  );
};
