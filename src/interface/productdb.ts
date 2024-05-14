export interface ProductDB {
    id: string | number,
    title: string,
    desc: string,
    price: number,
    image: string,
    category: string
}

export type CreateProduct = Omit<ProductDB, 'id'>
