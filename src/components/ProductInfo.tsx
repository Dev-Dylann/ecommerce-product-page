import { useState } from "react"
import { useCartContext } from "../context/CartContext"
import { ProductType } from "../data/types"
import minusIcon from '../assets/icons/icon-minus.svg'
import plusIcon from '../assets/icons/icon-plus.svg'
import cartIcon from '../assets/icons/icon-cart-white.svg'

type ProductInfoProps = {
  product: ProductType,
}

const ProductInfo = ({product}: ProductInfoProps) => {
  
  const [productCount, setProductCount] = useState(0)

  const price = product.discount !== undefined ? product.price * (product.discount / 100) : product.price

  const { addToCart } = useCartContext()!

  return (
    <section className='p-5 flex flex-col gap-2 sm:p-7 md:p-10 lg:p-0'>
      <h2 className='text-orange font-bold text-sm sm:text-base'>SNEAKER COMPANY</h2>

      <h3 className='text-3xl font-bold sm:text-4xl'>{product.name}</h3>

      <p className='text-blue-darkGray pt-2 sm:text-lg'>{product.desc}</p>

      <div className='flex gap-4 items-center pt-3'>
        <span className='text-3xl font-bold sm:text-4xl'>${price.toFixed(2)}</span>

        {product.discount !== undefined && (
          <div className='flex items-center justify-between grow'>
            <span className='bg-orange-pale text-orange font-bold px-2 py-1 rounded-md sm:text-lg'>{product.discount}%</span>

            <span className='font-bold text-blue-gray line-through sm:text-lg lg:hidden'>${product.price.toFixed(2)}</span>
          </div>
        )}
      </div>
      <span className='font-bold text-blue-gray line-through text-lg lg:inline hidden'>${product.price.toFixed(2)}</span>

      <article className='flex flex-col mt-3 gap-3 lg:flex-row'>
        <div className='bg-blue-lightGray px-5 py-4 rounded-md flex justify-between items-center sm:px-7 md:px-10 lg:px-5 lg:grow'>
          <button disabled={productCount === 0} onClick={() => setProductCount(prev => prev - 1)} className='p-2'>
            <img src={minusIcon} alt="Decrease" />
          </button>

          <span className='font-bold sm:text-lg lg:grow lg:text-center'>{productCount}</span>

          <button onClick={() => setProductCount(prev => prev + 1)} className='p-2'>
            <img src={plusIcon} alt="Increase" />
          </button>
        </div>

        <button disabled={productCount < 1} className='bg-orange shadow-xl shadow-orange-pale rounded-md py-4 flex justify-center gap-4 text-white font-bold disabled:grayscale-[35%] sm:text-lg lg:grow-[2]' onClick={() => addToCart(product, productCount, price)}>
          <img src={cartIcon} alt="Cart Icon" className='' />
          Add to cart
        </button>
      </article>
    </section>
  )
}

export default ProductInfo