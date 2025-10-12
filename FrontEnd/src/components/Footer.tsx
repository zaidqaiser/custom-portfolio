export const Footer = () => {
  return (
    <footer className="py-8 text-center text-gray-400 text-[clamp(0.8rem,0.8vw,1rem)] border-t border-[rgba(255,255,255,0.1)]">
      <p>
        © {new Date().getFullYear()} Zaid Qaiser. All rights reserved.
      </p>
    </footer>
  );
};
