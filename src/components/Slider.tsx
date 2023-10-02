import { useState } from 'react'
import prevArrow from '../assets/icons/icon-previous.svg'
import nextArrow from '../assets/icons/icon-next.svg'

type SliderProps = {
    imgArray: string[],
    thumbArray: string[],
    setIsGallery: React.Dispatch<React.SetStateAction<boolean>>
}

const Slider = ({ imgArray, thumbArray, setIsGallery }: SliderProps) => {
    const [current, setCurrent] = useState<number>(0)

  return (
    <section className='relative lg:flex lg:flex-col lg:gap-8'>
        <article className='cursor-pointer' onClick={() => setIsGallery(true)}>
            <img src={imgArray[current]} alt="Product Image" className='max-w-[450px] mx-auto sm:rounded-lg' />
        </article>

        <article className='hidden lg:grid grid-flow-col gap-4 w-full'>
            {thumbArray.map((item, index) => (
                <img key={`thumb${index}`} src={item} alt={`Thumbnail ${index + 1}`} className='rounded-md transition-transform hover:scale-105 cursor-pointer' style={current === index ? {outline: '3px solid hsl(26, 100%, 55%)', transform: 'scale(1.05)'} : {}} onClick={() => setCurrent(index)} />
            ))}
        </article>

        <div className='absolute top-0 left-5 h-full w-fit flex items-center sm:left-7 md:left-10 lg:hidden'>
            <button onClick={() => setCurrent(prev => prev - 1)} disabled={current === 0} className='bg-white h-10 w-10 grid place-content-center rounded-full p-4 disabled:bg-blue-gray shadow-xl'>
                <img src={prevArrow} alt="Previous" />
            </button>
        </div>

        <div className='absolute top-0 right-5 h-full w-fit flex items-center sm:right-7 md:right-10 lg:hidden'>
            <button onClick={() => setCurrent(prev => prev + 1)} disabled={current === imgArray.length - 1} className='bg-white h-10 w-10 grid place-content-center rounded-full p-4 disabled:bg-blue-gray shadow-xl'>
                <img src={nextArrow} alt="Next" />
            </button>
        </div>

    </section>
  )
}

export default Slider