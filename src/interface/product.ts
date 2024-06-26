export default interface Product {
    _id: string | number,
    title: string,
    description: string,
    price: number,
    image: string,
    count: number,
    rate: number
    category: string
}