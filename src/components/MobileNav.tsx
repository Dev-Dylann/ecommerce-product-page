import closeNavBtn from '../assets/icons/icon-close.svg'

type MobileNavProps = {
    isNav: boolean,
    setIsNav: React.Dispatch<React.SetStateAction<boolean>>,
}

const MobileNav = ({isNav, setIsNav}: MobileNavProps) => {
  return (
    <aside className='fixed top-0 left-0 z-10 w-full h-screen bg-transBlack -translate-x-full transition-all duration-300 lg:hidden' style={isNav ? {transform: 'translateX(0)'} : {}}>

        <nav aria-label='Mobile Nav' className='flex flex-col p-6 gap-10 bg-white h-full w-3/4 sm:w-1/2 sm:p-8'>
            <button className='p-2 w-fit' onClick={() => setIsNav(prev => !prev)}>
                <img src={closeNavBtn} alt="Close Nav" />
            </button>

            <ul className='flex flex-col gap-5 font-bold p-2 text-xl'>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>

    </aside>
  )
}

export default MobileNav