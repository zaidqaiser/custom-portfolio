const Header = () => {
  return (
    <div className='text-[var(--pale-dogwood)] p-10 items-center flex justify-between'>
        <img src="/logo.png" alt="logo" width={60} />
        <ul className='flex items-center gap-18 font-bold text-2xl justify-end cursor-pointer'>
            <li>Zaid</li>
            <li>Projects</li>
            <li className="p-4 border-2 border-[var(--pale-dogwood)]">Contact</li>
        </ul>
    </div>
  )
}

export default Header