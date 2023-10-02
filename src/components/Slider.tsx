import { useState } from 'react'
import prevArrow from '../assets/icons/icon-previous.svg'
import nextArrow from '../assets/icons/icon-next.svg'

type SliderProps = {
    imgArray: string[],
}

const Slider = ({ imgArray }: SliderProps) => {
    const [current, setCurrent] = useState<number>(0)

  return (
    <section className='relative'>
        <article className=''>
            <img src={imgArray[current]} alt="Product Image" />
        </article>

        <div className='absolute top-0 left-5 h-full w-fit flex items-center sm:left-7 md:left-10 lg:hidden'>
            <button onClick={() => setCurrent(prev => prev - 1)} disabled={current === 0} className='bg-white h-10 w-10 grid place-content-center rounded-full p-4 disabled:bg-gray-400'>
                <img src={prevArrow} alt="Previous" />
            </button>
        </div>

        <div className='absolute top-0 right-5 h-full w-fit flex items-center sm:right-7 md:right-10 lg:hidden'>
            <button onClick={() => setCurrent(prev => prev + 1)} disabled={current === imgArray.length - 1} className='bg-white h-10 w-10 grid place-content-center rounded-full p-4 disabled:bg-gray-400'>
                <img src={nextArrow} alt="Next" />
            </button>
        </div>
    </section>
  )
}

export default Slider