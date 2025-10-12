import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaRegPaperPlane } from "react-icons/fa";

export const HeroPage = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-[90vh] px-[5vw] py-[5vh]">
      {/* Text Section */}
      <div className="flex flex-col gap-[2vh] max-w-[700px] text-center md:text-left">
        <span className="uppercase tracking-[0.5vw] text-[1.8vw] sm:text-[1.2vw] text-[var(--pale-azure)]">
          Frontend Developer
        </span>

        <h1 className="text-[10vw] sm:text-[7vw] md:text-[5vw] font-extrabold text-[var(--pale-dogwood)] leading-[1.1] drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
          Zaid <span className="text-white">Qaiser</span>
        </h1>

        <p className="text-[4vw] sm:text-[2.4vw] md:text-[1.4vw] text-gray-200 leading-relaxed max-w-[85vw] md:max-w-[40vw] mx-auto md:mx-0">
          I build elegant, responsive web experiences that merge design,
          performance, and purpose — creating products users love.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-[3vw] mt-[3vh]">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[10vw] h-[10vw] sm:w-[6vw] sm:h-[6vw] md:w-[3.5vw] md:h-[3.5vw] rounded-full bg-[var(--pale-dogwood)] text-[var(--black-olive)] hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <FaGithub className="text-[5vw] sm:text-[3vw] md:text-[1.8vw]" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-[10vw] h-[10vw] sm:w-[6vw] sm:h-[6vw] md:w-[3.5vw] md:h-[3.5vw] rounded-full bg-[var(--pale-dogwood)] text-[var(--black-olive)] hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <FaLinkedin className="text-[5vw] sm:text-[3vw] md:text-[1.8vw]" />
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mt-[6vh] md:mt-0 md:w-[50vw] flex justify-center">
        <img
          src="/hero-img.png"
          alt="hero"
          className="w-[70vw] sm:w-[50vw] md:w-[38vw] lg:w-[32vw] drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)] hover:scale-[1.04] transition-transform duration-500"
        />
      </div>
      
      {/* Floating Contact Badge */}
      <motion.a
        href="mailto:zaid@example.com"
        target="_blank"
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-[3vh] right-[3vw] flex items-center gap-2 
        bg-[var(--pale-dogwood)] text-black font-bold px-5 py-3 rounded-full shadow-md 
        hover:shadow-black transition-all duration-300"
      >
        <FaRegPaperPlane />
        <span>Contact Me</span>
      </motion.a>
    </section>
  );
};
