import 'tailwindcss/tailwind.css'
import { useState } from 'react'
import product from './data/exampleProduct'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductInfo from './components/ProductInfo'
import MobileNav from './components/MobileNav'
import Gallery from './components/Gallery'

function App() {
  const [isNav, setIsNav] = useState(false)
  const [isGallery, setIsGallery] = useState(false)
  
  return (
    <>
      <header className='border-b border-blue-lightGray'>
        <Header setIsNav={setIsNav} />
        <MobileNav isNav={isNav} setIsNav={setIsNav}/>
      </header>

      <main className='flex flex-col lg:grid lg:grid-cols-2 pb-4 lg:py-10 lg:px-16 lg:items-center lg:gap-10 xl:px-24 xl:gap-16'>
        <Slider imgArray={product.images} thumbArray={product.thumbnails} setIsGallery={setIsGallery} />
        {isGallery && <Gallery imgArray={product.images} thumbArray={product.thumbnails} setIsGallery={setIsGallery} />}
        
        <ProductInfo product={product} />
      </main>

      <footer className='fixed left-0 bottom-0 w-full'>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/Dev-Dylann/">DevDylan</a>.
        </div>
      </footer>
    </>
  )
}

export default App
