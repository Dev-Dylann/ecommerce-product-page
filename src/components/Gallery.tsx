import { useState } from "react"
import prevArrow from '../assets/icons/icon-previous.svg'
import nextArrow from '../assets/icons/icon-next.svg'
import closeIcon from '../assets/icons/icon-close-white.svg'

type GalleryProps = {
    imgArray: string[],
    thumbArray: string[],
    setIsGallery: React.Dispatch<React.SetStateAction<boolean>>
}

const Gallery = ({imgArray, thumbArray, setIsGallery}: GalleryProps) => {
    const [current, setCurrent] = useState(0)

  return (
    <section className='hidden lg:flex flex-col gap-4 justify-center place-items-center fixed w-full h-screen top-0 left-0 bg-transBlack z-10'>
        <article className='relative w-1/2 max-w-[500px]'>
            <button className='p-2 absolute right-0 -top-10' onClick={() => setIsGallery(false)}>
                <img src={closeIcon} alt="Close Gallery" />
            </button>

            <img src={imgArray[current]} alt="Gallery Preview" className='rounded-lg' />

            <button onClick={() => setCurrent(prev => prev - 1)} disabled={current === 0} className='bg-white h-10 w-10 grid place-content-center rounded-full p-4 disabled:bg-gray-400 absolute inset-0 -left-5 my-auto'>
                <img src={prevArrow} alt="Previous" />
            </button>

            <button onClick={() => setCurrent(prev => prev + 1)} disabled={current === imgArray.length - 1} className='bg-white h-10 w-10 grid place-content-center rounded-full p-4 disabled:bg-gray-400 absolute left-[calc(100%_-_20px)] my-auto inset-0'>
                <img src={nextArrow} alt="Next" />
            </button>
        </article>

        <article className='lg:grid grid-flow-col gap-4 w-1/2 max-w-[450px] xl:gap-8'>
            {thumbArray.map((item, index) => (
                <img key={`galleryThumb${index}`} src={item} alt={`Gallery Thumbnail ${index + 1}`} className='rounded-md' onClick={() => setCurrent(index)} />
            ))}
        </article>
    </section>
  )
}

export default Gallery