import {createContext, useState, useContext, ReactElement} from 'react'
import { CartType, ProductType } from '../data/types'

type CartContextType = {
    cartItems: CartType[],
    addToCart: (product: ProductType, count: number, price: number) => void,
    deleteFromCart: (id: number) => void
}

const CartContext = createContext<CartContextType | undefined>({
    cartItems: [] as CartType[],
    addToCart: (product: ProductType, count: number, price: number) => {console.log([product, count, price])},
    deleteFromCart: (id: number) => {console.log(id)}
})

type CartProviderProps = {
    children?: ReactElement | ReactElement[] | undefined
}

export const CartProvider = ({children}: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartType[]>([])

    const deleteFromCart = (id: number): void => {
        const updatedCart: CartType[] = cartItems.filter(item => {
            return item.id !== id
        })

        setCartItems(updatedCart)
    }

    const checkExistingProduct = (id: number): boolean  => {
        const existingProduct = cartItems.find(item => item.id === id)

        return !!existingProduct
    }

    const addToCart = (product: ProductType, count: number, price: number): void => {
        if (cartItems.length === 0) {
            const newCartItem: CartType = {
                id: product.id,
                name: product.name,
                price: price,
                total: price * count,
                count: count,
                thumbnail: product.thumbnails[0]
            }

            const newCartList = [newCartItem]
            setCartItems(newCartList)
        } else {
           const inCartAlready = checkExistingProduct(product.id)

           if (inCartAlready) {
            const updatedCartItems: CartType[] = cartItems.map(item => {
                return item.id === product.id ? {...item, total: item.price * (item.count + count),count: item.count + count} : item
            })

            setCartItems(updatedCartItems)
           } else {
            const newCartItem: CartType = {
                id: product.id,
                name: product.name,
                price,
                total: price * count,
                count,
                thumbnail: product.thumbnails[0]
            }

            setCartItems(prev => [...prev, newCartItem])
           }
        }
    }

    return (
        <CartContext.Provider value={{
            cartItems, addToCart, deleteFromCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}

// Custom hook for using the context

export const useCartContext = () => {
    const context = useContext(CartContext)

    return context
}

export default CartContext
