type ProductType = {
    id: number,
    images: string[],
    thumbnails: string[],
    name: string,
    desc: string,
    price: number,
    discount?: number,
}

type CartType = {
    id: number, 
    name: string, 
    price: number,
    total: number, 
    count: number, 
    thumbnail: string,
}

export type { ProductType, CartType }
  