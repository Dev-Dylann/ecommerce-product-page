import { useRef, useEffect, useState } from 'react'
import {useCartContext} from '../context/CartContext'
import menuBars from '../assets/icons/icon-menu.svg'
import logo from '../assets/icons/logo.svg'
import cartIcon from '../assets/icons/icon-cart.svg'
import deleteIcon from '../assets/icons/icon-delete.svg'
import avatarImg from '../assets/images/image-avatar.png'

type HeaderProps = {
    setIsNav: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({setIsNav}: HeaderProps) => {
    const { cartItems, deleteFromCart } = useCartContext()!
    const dialogRef = useRef<HTMLDialogElement | null>(null)

    const [cartCount, setCartCount] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const navArray = ['Collection', 'Men', 'Women', 'About', 'Contact']

    useEffect(() => {
        console.log(isOpen) 
        
        if (isOpen) {
            dialogRef.current?.show()
            dialogRef.current?.classList.add('md:flex')
        } else {
            dialogRef.current?.close()
            dialogRef.current?.classList.remove('md:flex')
        }
    }, [isOpen])

    useEffect(() => {
        let newCartCount = 0

        cartItems.forEach(item => {
            newCartCount += item.count
            console.log(newCartCount)
        })

        setCartCount(newCartCount)
    }, [cartItems])

  return (
    <section className='flex items-center p-4 gap-3 sm:px-7 sm:py-5 sm:gap-5 md:px-10 md:py-7 lg:gap-10 lg:p-0'>
        <button className='p-2 lg:hidden' onClick={() => setIsNav(prev => !prev)}>
            <img src={menuBars} alt="Menu Icon" />
        </button>

        <div className='grow lg:grow-0 lg:py-7'>
            <img src={logo} alt="sneakers Logo" className='' />
        </div>

        <nav aria-label='Desktop Nav' className='hidden lg:block grow xl:px-6'>
            <ul className='flex gap-4 text-blue-darkGray xl:gap-8'>
                {navArray.map((item, index) => (
                    <li key={`navItem${index}`} className='hover:text-black cursor-pointer relative before:absolute before:-bottom-7 before:left-0 before:w-full before:h-1 before:bg-orange before:scale-0 hover:before:scale-100 before:transition-all before:rounded-t-md'>{item}</li>
                ))}
            </ul>
        </nav>

        <button className='p-2 relative' onClick={() => setIsOpen(prev => !prev)}>
            <img src={cartIcon} alt='Cart' />

            {cartCount > 0 && (
                <span className='absolute top-0 right-0 bg-orange px-2 py-0.5 rounded-full text-[8px] font-bold text-white'>{cartCount}</span>
            )}
        </button>

        <dialog ref={dialogRef} className='w-full px-3 top-20 z-10 bg-transparent sm:px-7 md:px-10 md:top-24 md:justify-end max-w-7xl'>
            <section className='flex flex-col bg-white rounded-md md:w-2/3 md:max-w-[450px] lg:max-w-[500px] shadow-2xl xl:max-w-[450px]'>
                <h3 className='font-bold text-lg p-5 border-b border-blue-gray sm:text-xl sm:px-7'>Cart</h3>

                <article className='p-5 flex flex-col gap-4 sm:p-7'>
                    {cartItems.length > 0 ? (
                        <>
                        <ul className='flex flex-col gap-4'>
                            {cartItems.map((item, i) => (
                                <li key={`cartItem${i}`} className='grid grid-cols-5 gap-2 items-center text-blue-darkGray'>
                                    <img src={item.thumbnail} alt={item.name} className='rounded-md w-[90%]' />

                                    <div className='flex flex-col gap-1 col-span-3 sm:text-lg md:text-base lg:text-lg xl:text-base'>
                                        <p className=''>{item.name}</p>

                                        <p>${item.price.toFixed(2)} &times; {item.count} <span className='text-blue-dark font-bold ml-1'>${item.total.toFixed(2)}</span></p>
                                    </div>

                                    <button className='grid place-content-center p-2 justify-self-end' onClick={() => deleteFromCart(item.id)}>
                                        <img src={deleteIcon} alt="Delete Icon" />
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <button className='text-white font-bold rounded-md bg-orange py-4 sm:text-lg'>Checkout</button>
                        </>
                    ) : (
                        <p className='font-bold text-center text-blue-darkGray py-20 sm:text-lg'>Your cart is empty</p>
                    )}
                    
                </article>
            </section>

        </dialog>

        <img src={avatarImg} alt="Avatar Image" height="100" width="100" className='rounded-full w-8 lg:w-12 hover:ring hover:ring-orange cursor-pointer' />

    </section>
  )
}

export default Header