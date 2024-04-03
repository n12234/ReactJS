export interface ProductDB {
    id: string,
    title: string,
    description: string,
    price: number,
    image: string,
    category: string
}

export type CreateProduct = Omit<ProductDB, 'id'>