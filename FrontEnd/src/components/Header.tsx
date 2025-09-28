const Header = () => {
  return (
    <div className="text-[var(--pale-dogwood)] p-10 flex items-center justify-between">
      <img src="/logo.png" alt="logo" width={60} className="cursor-pointer" />
      <ul className="flex items-center gap-18 font-bold text-2xl justify-end cursor-pointer">
        {["Zaid", "Projects"].map((item) => (
          <li key={item} className="relative group px-2">
            {item}
            <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-[var(--pale-dogwood)] transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </li>
        ))}
        <li className="p-4 border-2 border-[var(--pale-dogwood)] hover:bg-[var(--pale-dogwood)] hover:text-[var(--black-olive)] transition-colors duration-300">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Header;
