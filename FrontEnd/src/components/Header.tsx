const Header = () => {
  return (
    <div className="text-[var(--pale-dogwood)] p-10 flex items-center justify-between">
      <img src="/logo.svg" alt="logo" width={60} className="cursor-pointer hover:scale-[1.2] transition-transform duration-500" />
      <ul className="flex items-center gap-18 font-bold text-2xl justify-end cursor-pointer">
        {["Zaid", "Projects"].map((item) => (
          <li key={item} className="relative group px-2">
            {item}
            <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-[var(--pale-dogwood)] transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </li>
        ))}
        <li className="">
          <button className="button">
            <span className="button_lg">
              <span className="button_sl"></span>
              <span className="button_text">Resume</span>
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
