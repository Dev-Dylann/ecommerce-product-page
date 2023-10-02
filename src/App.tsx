import 'tailwindcss/tailwind.css'
import { useState } from 'react'
import product from './data/exampleProduct'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductInfo from './components/ProductInfo'
import MobileNav from './components/MobileNav'

function App() {
  const [isNav, setIsNav] = useState(false)
  
  return (
    <>
      <header>
        <Header setIsNav={setIsNav} />
        <MobileNav isNav={isNav} setIsNav={setIsNav}/>
      </header>

      <main className='flex flex-col lg:flex-row lg:p-10'>
        <Slider imgArray={product.images} />
        
        <ProductInfo product={product} />
      </main>
    </>
  )
}

export default App
